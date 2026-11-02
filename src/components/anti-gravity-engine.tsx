"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Terminal, Activity, Rocket, Zap, Shield, Bot, ChevronRight, Play } from "lucide-react";

export function AntiGravityEngine() {
  const [isZeroG, setIsZeroG] = useState(false);
  const [activeTab, setActiveTab] = useState<"terminal" | "telemetry" | "architecture">("terminal");
  const [pulseCount, setPulseCount] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[$] antigravity-agent --env=production --provider=gemini-2.0-flash",
    "[ok] Connected to Google Anti-Gravity Neural Runtime (Latency: 42ms)",
    "[sys] Initializing Rent Zimbabwe & WA Directory micro-agents...",
    "[sec] Zero-Trust Enclave active: HMAC validation & Supabase RLS enforced",
    "[ready] Anti-gravity reactive matrix online. Interactive zero-g ready.",
  ]);

  const triggerPulse = () => {
    setPulseCount((prev) => prev + 1);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("anti-gravity-pulse", {
          detail: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
        })
      );
    }
  };

  const toggleZeroG = () => {
    setIsZeroG((prev) => !prev);
    triggerPulse();
    const newLog = !isZeroG
      ? `[ANTI-GRAVITY] G-Force inverted: -9.81 m/s² | Levitation active`
      : `[ANTI-GRAVITY] Normal gravity restored: 1.00 G | Systems stable`;
    setTerminalLogs((prev) => [...prev.slice(-6), newLog]);
  };

  const simulateAgentAction = () => {
    triggerPulse();
    const actions = [
      `[GEMINI-2.0] Analyzing WhatsApp natural-language query in Shona/English...`,
      `[AGENT-HARNESS] Human-in-the-loop task decomposed: 4 files validated with Vitest`,
      `[SUPABASE] Cosine similarity search executed (0.94 match score)`,
      `[CYBER-SEC] STRIDE threat boundary verified: Input sanitized, 0 anomalies detected`,
      `[WHATSAPP-API] Direct interactive card dispatched with 99.98% delivery rate`,
    ];
    const nextAction = actions[Math.floor(Math.random() * actions.length)];
    setTerminalLogs((prev) => [...prev.slice(-6), nextAction]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 relative">
      {/* Outer Glow Halo */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

      {/* Main Glassmorphic HUD Deck */}
      <div className="relative rounded-2xl border border-zinc-200/80 border-zinc-800/80 bg-white/70 bg-zinc-950/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Silicon Valley Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-zinc-200/80 border-zinc-800/80 bg-zinc-100/60 bg-zinc-900/60">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700 mx-1" />
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-zinc-800 text-zinc-200 uppercase">
                Google Anti-Gravity Engine
              </span>
              <span className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 text-cyan-400 border border-cyan-500/20">
                v2.4 ZERO-G
              </span>
            </div>
          </div>

          {/* Quick HUD Metrics */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-zinc-600 text-zinc-400">
              <Activity className="w-3.5 h-3.5 text-emerald-500" />
              <span>G-FORCE:</span>
              <span className={`font-bold ${isZeroG ? "text-cyan-500 animate-pulse" : "text-emerald-500"}`}>
                {isZeroG ? "-0.50 G" : "1.00 G"}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-zinc-600 text-zinc-400">
              <Shield className="w-3.5 h-3.5 text-indigo-500" />
              <span>STATUS:</span>
              <span className="font-semibold text-zinc-900 text-zinc-200">OPTIMAL</span>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-between border-b border-zinc-200/80 border-zinc-800/80 px-4 py-2 bg-zinc-50/50 bg-zinc-900/30 text-xs font-mono">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("terminal")}
              className={`px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === "terminal"
                  ? "bg-cyan-500/15 text-cyan-700 text-cyan-300 border border-cyan-500/30"
                  : "text-zinc-600 text-zinc-400 hover:text-zinc-900 hover:text-zinc-200"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Agent Console
            </button>
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`px-3 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === "telemetry"
                  ? "bg-cyan-500/15 text-cyan-700 text-cyan-300 border border-cyan-500/30"
                  : "text-zinc-600 text-zinc-400 hover:text-zinc-900 hover:text-zinc-200"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              Physics Telemetry
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`hidden sm:flex px-3 py-1 rounded-md transition-colors items-center gap-1.5 ${
                activeTab === "architecture"
                  ? "bg-cyan-500/15 text-cyan-700 text-cyan-300 border border-cyan-500/30"
                  : "text-zinc-600 text-zinc-400 hover:text-zinc-900 hover:text-zinc-200"
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              Stack Pipeline
            </button>
          </div>

          {/* Interactive Trigger Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleZeroG}
              className={`px-3 py-1 text-xs font-mono font-medium rounded-md flex items-center gap-1.5 transition-all shadow-sm ${
                isZeroG
                  ? "bg-cyan-500 text-white shadow-cyan-500/30 shadow-lg scale-105"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-800 text-zinc-200 hover:bg-cyan-500/20 hover:text-cyan-500"
              }`}
              title="Invert gravitational field"
            >
              <Rocket className={`w-3.5 h-3.5 ${isZeroG ? "animate-bounce" : ""}`} />
              <span className="hidden xs:inline">{isZeroG ? "Zero-G Active" : "Invert Gravity"}</span>
              <span className="xs:hidden">{isZeroG ? "0G" : "Inv"}</span>
            </button>

            <button
              onClick={triggerPulse}
              className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:opacity-90 flex items-center gap-1.5 transition-transform active:scale-95 shadow-sm"
              title="Emit gravitational ripple across grid"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shockwave</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="p-4">
          {activeTab === "terminal" && (
            <div className="space-y-2 font-mono text-xs">
              <div className="bg-zinc-950 text-emerald-400 p-4 rounded-xl border border-zinc-800/80 shadow-inner overflow-x-auto min-h-[140px] flex flex-col justify-between">
                <div className="space-y-1.5">
                  {terminalLogs.map((log, i) => (
                    <div key={i} className="flex items-start gap-2 leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-cyan-400 shrink-0" />
                      <span className={log.startsWith("[$]") ? "text-cyan-300 font-bold" : log.includes("ANTI-GRAVITY") ? "text-amber-300 font-semibold" : "text-zinc-300"}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 mt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Agent Harness Listening for triggers
                  </span>
                  <button
                    onClick={simulateAgentAction}
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 flex items-center gap-1 font-semibold"
                  >
                    <Play className="w-3 h-3" />
                    Dispatch Agent Task
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "telemetry" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-zinc-100/70 bg-zinc-900/60 border border-zinc-200/80 border-zinc-800/80">
                <span className="text-zinc-500 text-zinc-400 block text-[10px] uppercase">G-Acceleration</span>
                <span className="text-lg font-bold text-cyan-600 text-cyan-400 block mt-1">
                  {isZeroG ? "-0.5 m/s²" : "9.81 m/s²"}
                </span>
                <span className="text-[10px] text-emerald-600 text-emerald-400">Anti-Gravity Lift</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-100/70 bg-zinc-900/60 border border-zinc-200/80 border-zinc-800/80">
                <span className="text-zinc-500 text-zinc-400 block text-[10px] uppercase">Shockwaves Sent</span>
                <span className="text-lg font-bold text-indigo-600 text-indigo-400 block mt-1">
                  {pulseCount}
                </span>
                <span className="text-[10px] text-zinc-500">Grid matrix pulses</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-100/70 bg-zinc-900/60 border border-zinc-200/80 border-zinc-800/80">
                <span className="text-zinc-500 text-zinc-400 block text-[10px] uppercase">AI Latency</span>
                <span className="text-lg font-bold text-emerald-600 text-emerald-400 block mt-1">
                  38 ms
                </span>
                <span className="text-[10px] text-emerald-500">Gemini 2.0 Flash</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-100/70 bg-zinc-900/60 border border-zinc-200/80 border-zinc-800/80">
                <span className="text-zinc-500 text-zinc-400 block text-[10px] uppercase">Security Enclave</span>
                <span className="text-lg font-bold text-amber-600 text-amber-400 block mt-1">
                  100%
                </span>
                <span className="text-[10px] text-amber-500">Zero-Trust Active</span>
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="p-4 rounded-xl bg-zinc-100/70 bg-zinc-900/60 border border-zinc-200/80 border-zinc-800/80 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 text-zinc-700 text-zinc-300">
                <div className="px-3 py-2 rounded-lg bg-white dark:bg-zinc-950 border border-cyan-500/30 text-cyan-600 text-cyan-400 font-semibold">
                  WhatsApp Cloud API
                </div>
                <span className="text-zinc-400">➔</span>
                <div className="px-3 py-2 rounded-lg bg-white dark:bg-zinc-950 border border-indigo-500/30 text-indigo-600 text-indigo-400 font-semibold">
                  Next.js Edge Webhook
                </div>
                <span className="text-zinc-400">➔</span>
                <div className="px-3 py-2 rounded-lg bg-white dark:bg-zinc-950 border border-emerald-500/30 text-emerald-600 text-emerald-400 font-semibold">
                  Gemini 2.0 Flash
                </div>
                <span className="text-zinc-400">➔</span>
                <div className="px-3 py-2 rounded-lg bg-white dark:bg-zinc-950 border border-amber-500/30 text-amber-600 text-amber-400 font-semibold">
                  Supabase pgvector
                </div>
              </div>
              <p className="mt-3 text-[11px] text-zinc-500 text-zinc-400 leading-relaxed">
                Multi-agent architectural pipeline deployed across Rent Zimbabwe and WA Directory with sub-second response times and automated schema validation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
