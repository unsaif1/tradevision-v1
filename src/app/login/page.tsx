"use client";

import React, { useState, FormEvent } from "react";
import { loginWithCredentials as apiLogin, fetchUserMe as getUser } from "@/lib/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await apiLogin(email, password);
      if (!data) {
        setError("No token received");
        setLoading(false);
        return;
      }

      localStorage.setItem("tv_token", data);

      // Determine portal from user info
      let portal = "/stitch/policyholder";
      try {
        const user = await getUser(data);
        const role = (user?.role_code || "").toLowerCase();
        const userEmail = (user?.email || email).toLowerCase();
        const name = (user?.full_name || "").toLowerCase();

        if (role === "manager" || role === "contractor" || role === "gc" || role === "sub" ||
            userEmail.includes("construct") || userEmail.includes("roof") || userEmail.includes("contractor") ||
            name.includes("construction") || name.includes("contractor") || name.includes("roofer")) {
          portal = "/stitch/contractor";
        } else if (role === "inspector" || role === "adjuster" || role === "pa" ||
                   userEmail.includes("adjust") || userEmail.includes("inspector") ||
                   name.includes("adjust") || name.includes("inspector")) {
          portal = "/stitch/adjuster";
        } else if (role === "viewer" || role === "policyholder" ||
                   userEmail.includes("policyholder") || userEmail.includes("homeowner") ||
                   name.includes("homeowner") || name.includes("policy")) {
          portal = "/stitch/policyholder";
        }
      } catch {
        // If getUser fails, infer from email domain/pattern
        const e = email.toLowerCase();
        if (e.includes("construct") || e.includes("roof") || e.includes("contractor")) {
          portal = "/stitch/contractor";
        } else if (e.includes("adjust") || e.includes("inspector")) {
          portal = "/stitch/adjuster";
        } else if (e.includes("policyholder") || e.includes("homeowner")) {
          portal = "/stitch/policyholder";
        }
      }

      window.location.href = portal;
    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-surface-dim border-b border-outline-variant flex justify-between items-center px-md h-16 w-full z-50">
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-neon-cyan">security</span>
          <h1 className="font-headline-md text-headline-md text-neon-cyan tracking-tighter">
            SECURITY_CENTRAL_V4
          </h1>
        </div>
        <div className="flex items-center gap-md">
          <div className="flex flex-col items-end">
            <span className="font-mono-data text-mono-data text-status-success uppercase">
              System_Active
            </span>
            <span className="font-mono-data text-[10px] text-text-muted">
              TX_LATENCY: 12ms
            </span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-gutter relative">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-outline-variant rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-outline-variant opacity-50 transform rotate-45" />
        </div>

        <div className="w-full max-w-md bg-surface-container border border-outline-variant p-xl relative z-10 backdrop-blur-md shadow-2xl">
          <div className="scanline" />

          <div className="mb-lg border-b border-outline-variant pb-md flex justify-between items-end">
            <div>
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-neon-pink">
                Access_Portal
              </h2>
              <p className="font-mono-data text-mono-data text-on-surface-variant">
                TRADEVISION C.A.R.E. STACK
              </p>
            </div>
            <div className="text-right">
              <span className="font-mono-data text-[10px] px-2 py-0.5 bg-surface-container-high border border-outline-variant text-neon-cyan">
                VER_0.4.2
              </span>
            </div>
          </div>

          {error && (
            <div className="mb-lg p-3 bg-status-error/10 border border-status-error/30 text-status-error font-mono-data text-mono-data">
              {error}
            </div>
          )}

          <form className="space-y-lg" onSubmit={handleSubmit}>
            <div className="space-y-xs">
              <label className="font-mono-data text-label-caps uppercase text-on-surface-variant block mb-1">
                Email
              </label>
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant opacity-50 group-focus-within:text-neon-cyan transition-colors">
                  mail
                </span>
                <input
                  className="w-full bg-surface-container-low border border-outline-variant px-10 py-3 font-body-md text-body-md text-on-surface placeholder:text-text-muted/40 focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="operator@trade-vision.io"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="space-y-xs">
              <label className="font-mono-data text-label-caps uppercase text-on-surface-variant block mb-1">
                Access_Key
              </label>
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant opacity-50 group-focus-within:text-neon-cyan transition-colors">
                  vpn_key
                </span>
                <input
                  className="w-full bg-surface-container-low border border-outline-variant px-10 py-3 font-body-md text-body-md text-on-surface placeholder:text-text-muted/40 focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="********"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div className="pt-md">
              <button
                className="w-full bg-neon-pink text-white font-headline-md text-headline-md py-4 uppercase tracking-widest hover:bg-neon-pink/90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
              >
                {loading ? "Authenticating..." : "Initiate_Session"}
              </button>
            </div>
          </form>

          <div className="mt-xl grid grid-cols-2 gap-sm border-t border-outline-variant pt-md opacity-70">
            <div className="flex items-center gap-xs">
              <span className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
              <span className="font-mono-data text-mono-data uppercase">
                Node_Status: Secure
              </span>
            </div>
            <div className="flex items-center gap-xs justify-end">
              <span className="material-symbols-outlined text-mono-data" style={{ fontSize: "14px" }}>
                lock
              </span>
              <span className="font-mono-data text-mono-data uppercase">
                Enc: AES-256
              </span>
            </div>
          </div>
        </div>
      </main>

      <footer className="h-8 bg-surface-container-lowest border-t border-outline-variant flex items-center justify-between px-md z-50">
        <div className="flex gap-md items-center h-full">
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-neon-cyan" style={{ fontSize: "14px" }}>
              query_stats
            </span>
            <span className="font-mono-data text-[10px] uppercase text-text-muted">
              System_Health: 100%
            </span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-neon-pink" style={{ fontSize: "14px" }}>
              history_edu
            </span>
            <span className="font-mono-data text-[10px] uppercase text-text-muted">
              Logs: Rotated
            </span>
          </div>
        </div>
        <div className="flex gap-md items-center">
          <span className="font-mono-data text-[10px] uppercase text-text-muted">
            Auth_Protocol: C.A.R.E._V4
          </span>
          <div className="font-mono-data text-[10px] text-neon-cyan">
            {new Date().toUTCString().slice(17, 25)} UTC
          </div>
        </div>
      </footer>
    </div>
  );
}
