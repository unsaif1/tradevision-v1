#!/usr/bin/env python3
"""
Stitch HTML → Next.js JSX Converter
Converts Google Stitch design export to React/JSX components.

Usage:
    python3 stitch_converter.py --screen landing_page
    python3 stitch_converter.py --screen command_center
    python3 stitch_converter.py --all  # Convert all 378 screens
"""

import re, os, sys, json, argparse
from pathlib import Path
from html.parser import HTMLParser

# Paths
STITCH_SRC = Path("/root/hermes-workspace/tradevision-stitch/stitch-src")
PROJECT_ROOT = Path("/root/hermes-workspace/tradevision-stitch")
COMPONENTS_DIR = PROJECT_ROOT / "src/components/ui"
PAGES_DIR = PROJECT_ROOT / "src/app"

# Screen name → route mapping
SCREEN_ROUTES = {
    "tradevision_c.a.r.e._stack_landing_page_1": ("page.tsx", "/"),
    "tradevision_c.a.r.e._stack_landing_page_2": ("page.tsx", "/"),
    "refined_command_center_web_app_v2": ("(dashboard)/command-center/page.tsx", "/command-center"),
    "command_center_web_app": ("(dashboard)/command-center/page.tsx", "/command-center"),
    "secure_login_terminal": ("login/page.tsx", "/login"),
    "refined_claims_listing_v3.0": ("(dashboard)/claims/page.tsx", "/claims"),
    "refined_claim_detail_v3.0": ("(dashboard)/claims/[id]/page.tsx", "/claims/[id]"),
    "refined_financial_terminal_v2.0": ("(dashboard)/financial/page.tsx", "/financial"),
    "weather_safety_command_center": ("(dashboard)/weather/page.tsx", "/weather"),
    "refined_system_settings_v2.0": ("(dashboard)/settings/page.tsx", "/settings"),
}

def extract_tailwind_config(html_content):
    """Extract tailwind.config from Stitch HTML."""
    match = re.search(r'tailwind\.config\s*=\s*(\{.*?\});', html_content, re.DOTALL)
    if match:
        return match.group(1)
    return None

def html_to_jsx(html_content):
    """Convert HTML attributes to JSX."""
    # Remove DOCTYPE
    html_content = re.sub(r'<!DOCTYPE[^>]*>', '', html_content)
    
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html_content, re.DOTALL)
    if body_match:
        content = body_match.group(1)
    else:
        content = html_content
    
    # Convert HTML attributes to JSX
    content = content.replace('class=', 'className=')
    content = content.replace('for=', 'htmlFor=')
    content = content.replace('tabindex=', 'tabIndex=')
    content = content.replace('colspan=', 'colSpan=')
    content = content.replace('rowspan=', 'rowSpan=')
    content = content.replace('autofocus=', 'autoFocus=')
    content = content.replace('autoplay=', 'autoPlay=')
    content = content.replace('readonly=', 'readOnly=')
    content = content.replace('maxlength=', 'maxLength=')
    content = content.replace('cellpadding=', 'cellPadding=')
    content = content.replace('cellspacing=', 'cellSpacing=')
    
    # Fix self-closing tags
    content = re.sub(r'<(br|hr|img|input|meta|link)([^>]*?)(?<!/)>', r'<\1\2 />', content)
    
    # Remove style tags (we'll use Tailwind)
    content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL)
    
    # Remove script tags
    content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.DOTALL)
    
    # Remove HTML comments
    content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)
    
    return content.strip()

def extract_imports(html_content):
    """Extract Google Fonts and other imports needed."""
    imports = set()
    
    # Check for Google Fonts
    if 'fonts.googleapis.com' in html_content:
        imports.add("import { Barlow_Condensed, Manrope } from 'next/font/google'")
    
    # Check for Material Symbols
    if 'Material+Symbols+Outlined' in html_content:
        imports.add("// Material Symbols loaded via Google Fonts CSS")
    
    return imports

def create_page_component(screen_name, html_content, route_path):
    """Create a Next.js page component from Stitch HTML."""
    jsx_content = html_to_jsx(html_content)
    imports = extract_imports(html_content)
    
    # Build the component
    component = f'''"use client";

import React from "react";

export default function {screen_name.title().replace("_", "").replace(".", "")}Page() {{
  return (
    <div className="min-h-screen bg-[#0f141a] text-[#dee2ec]">
{jsx_content}
    </div>
  );
}}
'''
    return component

def convert_screen(screen_name):
    """Convert a single screen from Stitch HTML to JSX."""
    screen_dir = STITCH_SRC / screen_name
    html_file = screen_dir / "code.html"
    
    if not html_file.exists():
        print(f"  ❌ {screen_name}: code.html not found")
        return False
    
    html_content = html_file.read_text()
    
    # Determine output path
    if screen_name in SCREEN_ROUTES:
        route_file, route_path = SCREEN_ROUTES[screen_name]
        output_path = PAGES_DIR / route_file
    else:
        # Default: create a route based on screen name
        clean_name = screen_name.replace(".", "_").replace(" ", "_").lower()
        output_path = PAGES_DIR / clean_name / "page.tsx"
        route_path = f"/{clean_name}"
    
    # Create the component
    component = create_page_component(screen_name, html_content, route_path)
    
    # Ensure directory exists
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    # Write the file
    output_path.write_text(component)
    print(f"  ✅ {screen_name} → {output_path.relative_to(PROJECT_ROOT)}")
    return True

def convert_all_screens():
    """Convert all 378 screens."""
    screens = sorted([d.name for d in STITCH_SRC.iterdir() if d.is_dir()])
    print(f"\n🔄 Converting {len(screens)} screens...\n")
    
    success = 0
    failed = 0
    
    for i, screen_name in enumerate(screens, 1):
        if convert_screen(screen_name):
            success += 1
        else:
            failed += 1
        
        if i % 50 == 0:
            print(f"\n  Progress: {i}/{len(screens)} ({success} ok, {failed} failed)\n")
    
    print(f"\n✅ Done: {success} converted, {failed} failed")
    return success, failed

def main():
    parser = argparse.ArgumentParser(description="Convert Stitch HTML to Next.js JSX")
    parser.add_argument("--screen", help="Convert a specific screen by name")
    parser.add_argument("--all", action="store_true", help="Convert all 378 screens")
    parser.add_argument("--list", action="store_true", help="List all available screens")
    
    args = parser.parse_args()
    
    if args.list:
        screens = sorted([d.name for d in STITCH_SRC.iterdir() if d.is_dir()])
        print(f"\n📋 {len(screens)} screens available:\n")
        for s in screens:
            route = SCREEN_ROUTES.get(s, ("auto", "/auto"))
            print(f"  {s:60s} → {route[1]}")
        return
    
    if args.screen:
        print(f"\n🔄 Converting: {args.screen}\n")
        convert_screen(args.screen)
    elif args.all:
        convert_all_screens()
    else:
        # Default: convert key screens only
        key_screens = [
            "tradevision_c.a.r.e._stack_landing_page_1",
            "refined_command_center_web_app_v2",
            "secure_login_terminal",
            "refined_claims_listing_v3.0",
            "refined_claim_detail_v3.0",
            "refined_financial_terminal_v2.0",
            "weather_safety_command_center",
            "refined_system_settings_v2.0",
        ]
        print(f"\n🔄 Converting {len(key_screens)} key screens...\n")
        for screen in key_screens:
            convert_screen(screen)

if __name__ == "__main__":
    main()
