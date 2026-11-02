"use client";

import React from "react";
import { MessageSquare, Zap, ShieldCheck, Award } from "lucide-react";

const metrics = [
  {
    value: "10k+",
    label: "Conversations Processed",
    icon: MessageSquare,
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-primary-light)]",
  },
  {
    value: "38ms",
    label: "AI Response Latency",
    icon: Zap,
    color: "text-[var(--color-cyan)]",
    bgColor: "bg-[var(--color-cyan-light)]",
  },
  {
    value: "100%",
    label: "Zero-Trust Architecture",
    icon: ShieldCheck,
    color: "text-[var(--color-success)]",
    bgColor: "bg-[var(--color-success-light)]",
  },
  {
    value: "3+",
    label: "Years of Experience",
    icon: Award,
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-primary-light)]",
  },
];

export function Metrics() {
  return (
    <section
      id="metrics"
      className="relative py-16 md:py-24 bg-[var(--color-bg)]"
      aria-labelledby="metrics-heading"
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-y-0 right-0 w-px bg-[var(--color-border)] md:hidden md:block" />
              <div className="text-center p-4 md:p-6">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl mx-auto mb-4 ${metric.bgColor} ${metric.color}`}
                  aria-hidden="true"
                >
                  <metric.icon className="h-6 w-6 md:h-7 md:w-7" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-[var(--color-text-muted)] font-medium">
                  {metric.label}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}