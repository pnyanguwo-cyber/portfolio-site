"use client";

import React, { useEffect, useRef } from "react";

export function HeroIllustration() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Add subtle parallax movement on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 30;
      const y = (e.clientY - rect.top - rect.height / 2) / 30;

      const elements = svgRef.current.querySelectorAll(".floating-element");
      elements.forEach((el, i) => {
        const factor = (i + 1) * 0.3;
        (el as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 400 350"
        className="w-full h-auto"
        aria-hidden="true"
        role="img"
        aria-label="Software engineering workspace with floating technical elements"
      >
        <defs>
          {/* Gradients for the illustration */}
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#087BFA" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="laptopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="keyboardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="subtleShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#101B3C" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Ambient glow behind laptop */}
        <ellipse
          cx="200"
          cy="300"
          rx="140"
          ry="30"
          fill="#087BFA"
          opacity="0.08"
          filter="url(#softGlow)"
        />

        {/* Floating technical elements - background layer */}
        <g className="floating-element" style={{ transition: "transform 0.1s ease-out" }}>
          {/* Code bracket */}
          <g transform="translate(60, 60)">
            <path
              d="M0 0 L15 0 L15 30 L0 30 M0 0 L0 30 M15 0 L15 30"
              stroke="#087BFA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.4"
            />
          </g>

          {/* Database cylinder */}
          <g transform="translate(320, 80)">
            <ellipse cx="12" cy="0" rx="12" ry="4" fill="#06B6D4" opacity="0.3" />
            <path d="M0 0 L0 25" stroke="#06B6D4" strokeWidth="1.5" opacity="0.3" />
            <path d="M24 0 L24 25" stroke="#06B6D4" strokeWidth="1.5" opacity="0.3" />
            <ellipse cx="12" cy="25" rx="12" ry="4" fill="#06B6D4" opacity="0.2" />
            <ellipse cx="12" cy="12.5" rx="10" ry="3" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.2" />
          </g>

          {/* API node */}
          <g transform="translate(50, 260)">
            <circle cx="15" cy="15" r="15" fill="none" stroke="#087BFA" strokeWidth="1.5" opacity="0.3" />
            <circle cx="15" cy="15" r="8" fill="#087BFA" opacity="0.3" />
            <g stroke="#087BFA" strokeWidth="1.5" opacity="0.4">
              <line x1="15" y1="15" x2="15" y2="-5" />
              <line x1="15" y1="15" x2="35" y2="15" />
              <line x1="15" y1="15" x2="5" y2="25" />
            </g>
          </g>

          {/* Cloud */}
          <g transform="translate(300, 240)" opacity="0.3">
            <path
              d="M20 15 Q10 15 10 25 Q10 35 20 35 L30 35 Q40 35 40 25 Q40 15 30 15 Q25 10 20 15"
              fill="#087BFA"
            />
          </g>

          {/* Shield - security */}
          <g transform="translate(70, 180)">
            <path
              d="M15 2 L5 8 L5 20 Q5 28 15 34 Q25 28 25 20 L25 8 Z"
              fill="none"
              stroke="#16A34A"
              strokeWidth="1.5"
              opacity="0.35"
            />
            <path d="M15 10 L15 22 M10 16 L20 16" stroke="#16A34A" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
          </g>

          {/* Terminal window */}
          <g transform="translate(280, 140)" opacity="0.3">
            <rect x="0" y="0" width="50" height="35" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="1" />
            <rect x="4" y="4" width="12" height="12" rx="2" fill="#EF4444" opacity="0.5" />
            <rect x="20" y="4" width="12" height="12" rx="2" fill="#F59E0B" opacity="0.5" />
            <rect x="36" y="4" width="12" height="12" rx="2" fill="#10B981" opacity="0.5" />
            <g stroke="#06B6D4" strokeWidth="1" opacity="0.6">
              <line x1="6" y1="18" x2="44" y2="18" />
              <line x1="6" y1="24" x2="35" y2="24" />
              <line x1="6" y1="30" x2="30" y2="30" />
            </g>
          </g>

          {/* Git branch */}
          <g transform="translate(30, 120)" opacity="0.35">
            <circle cx="10" cy="5" r="5" fill="#087BFA" />
            <circle cx="10" cy="25" r="4" fill="#06B6D4" />
            <circle cx="10" cy="45" r="4" fill="#06B6D4" />
            <path d="M10 10 L10 21 M10 29 L10 41" stroke="#087BFA" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 10 L-5 10 M10 25 L-5 25" stroke="#087BFA" strokeWidth="1.5" strokeDasharray="3 2" strokeLinecap="round" />
          </g>
        </g>

        {/* Main laptop */}
        <g filter="url(#subtleShadow)" className="floating-element" style={{ transition: "transform 0.1s ease-out" }}>
          {/* Laptop base */}
          <path
            d="M70 200 L70 280 Q70 295 82 303 L318 303 Q330 295 330 280 L330 200 Z"
            fill="url(#laptopGradient)"
            stroke="#334155"
            strokeWidth="1"
          />

          {/* Keyboard area */}
          <path
            d="M80 200 L80 215 Q80 225 92 225 L308 225 Q320 225 320 215 L320 200 Z"
            fill="url(#keyboardGradient)"
          />

          {/* Keyboard keys suggestion */}
          <g fill="#475569" opacity="0.3">
            <rect x="95" y="204" width="4" height="4" rx="1" />
            <rect x="102" y="204" width="4" height="4" rx="1" />
            <rect x="109" y="204" width="4" height="4" rx="1" />
            <rect x="285" y="204" width="4" height="4" rx="1" />
            <rect x="292" y="204" width="4" height="4" rx="1" />
            <rect x="299" y="204" width="4" height="4" rx="1" />
          </g>

          {/* Trackpad */}
          <rect x="180" y="235" width="40" height="28" rx="4" fill="#334155" opacity="0.5" />

          {/* Screen */}
          <rect x="82" y="85" width="236" height="115" rx="4" fill="#0F172A" />
          <rect x="88" y="92" width="224" height="101" rx="3" fill="url(#screenGradient)" />

          {/* Screen content - code editor */}
          <g transform="translate(100, 100)">
            {/* Editor tabs */}
            <g>
              <rect x="0" y="0" width="60" height="20" rx="2" fill="#1E293B" />
              <rect x="60" y="0" width="70" height="20" rx="2" fill="#334155" />
              <text x="10" y="14" fontSize="9" fill="#94A3B8" fontFamily="monospace">main.ts</text>
              <text x="68" y="14" fontSize="9" fill="#E2E8F0" fontFamily="monospace">security.ts</text>
            </g>

            {/* Code lines */}
            <g fontFamily="monospace" fontSize="9" fill="#E2E8F0">
              <text x="0" y="35">export function validateRequest(req: Request, res: Response) &#123;</text>
              <text x="12" y="50" fill="#10B981">// HMAC verification</text>
              <text x="12" y="65" fill="#F59E0B">const signature</text>
              <text x="95" y="65"> = req.headers.get(&quot;x-signature&quot;);</text>
              <text x="0" y="80">&#125;</text>
            </g>
          </g>

          {/* Webcam */}
          <circle cx="200" cy="72" r="3" fill="#334155" />
        </g>

        {/* Floating elements - foreground layer */}
        <g className="floating-element" style={{ transition: "transform 0.1s ease-out" }}>
          {/* AI sparkles */}
          <g transform="translate(350, 100)" opacity="0.5">
            <polygon points="10,0 12,5 18,5 13,9 15,15 10,12 5,15 7,9 2,5 8,5" fill="#087BFA" />
            <polygon points="30,15 31,18 34,18 32,20 33,23 30,21 27,23 28,20 26,18 29,18" fill="#06B6D4" transform="scale(0.6)" />
          </g>

          {/* Notification badge */}
          <g transform="translate(310, 90)" opacity="0.4">
            <rect x="0" y="0" width="22" height="12" rx="6" fill="#EF4444" />
            <circle cx="11" cy="6" r="2.5" fill="white" />
          </g>

          {/* Connection lines */}
          <g stroke="#087BFA" strokeWidth="1" opacity="0.2" strokeDasharray="4 4">
            <line x1="150" y1="85" x2="180" y2="60" />
            <line x1="250" y1="85" x2="280" y2="60" />
          </g>
        </g>
      </svg>

      {/* Decorative gradient orbs */}
      <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-[var(--color-primary)]/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-cyan)]/10 blur-3xl pointer-events-none" aria-hidden="true" />
    </div>
  );
}