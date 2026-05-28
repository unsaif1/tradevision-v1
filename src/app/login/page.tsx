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

      let portal = "/stitch/policyholder";
      try {
        const user = await getUser(data);
        const role = (user?.role_code || "").toLowerCase();
        if (role === "manager" || role === "contractor" || role === "gc" || role === "sub") {
          portal = "/stitch/contractor";
        } else if (role === "inspector" || role === "adjuster" || role === "pa") {
          portal = "/stitch/adjuster";
        } else if (role === "viewer" || role === "policyholder") {
          portal = "/stitch/policyholder";
        }
      } catch {
        const e = email.toLowerCase();
        if (e.includes("construct") || e.includes("roof") || e.includes("contractor")) {
          portal = "/stitch/contractor";
        } else if (e.includes("adjust") || e.includes("inspector")) {
          portal = "/stitch/adjuster";
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
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#040037",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      padding: "20px",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "40px 32px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
      }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#E21E51",
            borderRadius: "8px",
            margin: "0 auto 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "24px",
            fontWeight: "bold",
          }}>T</div>
          <h1 style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#040037",
            margin: "0 0 4px",
          }}>TradeVision</h1>
          <p style={{
            fontSize: "14px",
            color: "#6b7280",
            margin: 0,
          }}>Sign in to your account</p>
        </div>

        {error && (
          <div style={{
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            color: "#dc2626",
            padding: "12px 16px",
            borderRadius: "6px",
            fontSize: "14px",
            marginBottom: "20px",
          }}>{error}</div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{
              display: "block",
              fontSize: "13px",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "6px",
            }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              autoComplete="email"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
                color: "#111827",
              }}
            />
          </div>

          <div>
            <label style={{
              display: "block",
              fontSize: "13px",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "6px",
            }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "15px",
                outline: "none",
                boxSizing: "border-box",
                color: "#111827",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: loading ? "#9ca3af" : "#E21E51",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              marginTop: "4px",
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>

      <p style={{
        fontSize: "12px",
        color: "rgba(255,255,255,0.4)",
        marginTop: "24px",
      }}>TradeVision C.A.R.E. Stack v0.4.2</p>
    </div>
  );
}
