import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SaifHaven — Build Fast",
    template: "%s | SaifHaven",
  },
  description:
    "We design, build, and maintain modern websites, AI integrations, and automation for businesses that need speed, clarity, and results.",
  keywords: ["website audit", "AI chatbot", "marketing automation", "web development", "SaifHaven"],
  openGraph: {
    title: "SaifHaven — Build Fast",
    description:
      "We design, build, and maintain modern websites, AI integrations, and automation for businesses that need speed, clarity, and results.",
    type: "website",
    locale: "en_US",
    siteName: "SaifHaven",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaifHaven — Build Fast",
    description:
      "We design, build, and maintain modern websites, AI integrations, and automation for businesses that need speed, clarity, and results.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
