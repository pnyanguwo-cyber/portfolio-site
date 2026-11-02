"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  color: string;
}

interface GridPoint {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

export function ReactiveGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect dark mode initially and on change
    const checkDark = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    checkDark();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "class") {
          checkDark();
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse / Touch pointer state
    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isHovered: false,
      radius: Math.min(width, height) * 0.28,
      shockwaves: [] as { x: number; y: number; radius: number; maxRadius: number; strength: number }[],
    };

    // Responsive grid parameters
    const isMobile = width < 768;
    const gridSpacing = isMobile ? 42 : 36;
    const cols = Math.ceil(width / gridSpacing) + 2;
    const rows = Math.ceil(height / gridSpacing) + 2;

    const gridPoints: GridPoint[] = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = (i - 1) * gridSpacing;
        const y = (j - 1) * gridSpacing;
        gridPoints.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
        });
      }
    }

    // Anti-Gravity Floating Particles (Zero-G quantum dust)
    const particleCount = isMobile ? 32 : 64;
    const particles: Particle[] = [];
    const colorsDark = ["#38bdf8", "#818cf8", "#34d399", "#22d3ee", "#a78bfa"];
    const colorsLight = ["#0284c7", "#4f46e5", "#059669", "#0891b2", "#7c3aed"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.35 - Math.random() * 0.55, // Defying gravity: upward drift
        size: Math.random() * 2.2 + 1,
        baseAlpha: Math.random() * 0.45 + 0.15,
        alpha: 0.3,
        color: isDark
          ? colorsDark[Math.floor(Math.random() * colorsDark.length)]
          : colorsLight[Math.floor(Math.random() * colorsLight.length)],
      });
    }

    // Handle Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      pointer.radius = Math.min(width, height) * 0.28;
    };

    // Pointer event listeners
    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
      pointer.isHovered = true;
    };

    const handlePointerLeave = () => {
      pointer.isHovered = false;
      pointer.targetX = -1000;
      pointer.targetY = -1000;
    };

    // Shockwave pulse trigger on tap or click
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      pointer.targetX = clientX;
      pointer.targetY = clientY;
      pointer.shockwaves.push({
        x: clientX,
        y: clientY,
        radius: 10,
        maxRadius: Math.min(width, height) * 0.45,
        strength: 22,
      });
    };

    // Mobile touch move (non-blocking)
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        pointer.targetX = e.touches[0].clientX;
        pointer.targetY = e.touches[0].clientY;
        pointer.isHovered = true;
      }
    };

    // Listen to custom "anti-gravity-pulse" event
    const handleCustomPulse = (e: Event) => {
      const customEvent = e as CustomEvent<{ x?: number; y?: number }>;
      const cx = customEvent.detail?.x ?? width / 2;
      const cy = customEvent.detail?.y ?? height / 2;
      pointer.shockwaves.push({
        x: cx,
        y: cy,
        radius: 10,
        maxRadius: Math.max(width, height) * 0.8,
        strength: 35,
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown as EventListener, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("anti-gravity-pulse", handleCustomPulse);

    // Animation Loop
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth pointer interpolation
      pointer.x += (pointer.targetX - pointer.x) * 0.15;
      pointer.y += (pointer.targetY - pointer.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Silicon Valley Ambient Radial Spotlight
      if (pointer.isHovered && pointer.x > -500) {
        const spotlightRadius = pointer.radius * 1.5;
        const spotGrad = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          spotlightRadius
        );
        if (isDark) {
          spotGrad.addColorStop(0, "rgba(56, 189, 248, 0.12)");
          spotGrad.addColorStop(0.4, "rgba(129, 140, 248, 0.05)");
          spotGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        } else {
          spotGrad.addColorStop(0, "rgba(2, 132, 199, 0.09)");
          spotGrad.addColorStop(0.5, "rgba(79, 70, 229, 0.03)");
          spotGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
        }
        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, spotlightRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Update Shockwaves
      for (let s = pointer.shockwaves.length - 1; s >= 0; s--) {
        const sw = pointer.shockwaves[s];
        sw.radius += 420 * dt;
        sw.strength *= 0.96;

        // Draw glowing shockwave ring
        const ringAlpha = (1 - sw.radius / sw.maxRadius) * 0.35;
        if (ringAlpha > 0.01) {
          ctx.beginPath();
          ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
          ctx.strokeStyle = isDark
            ? `rgba(56, 189, 248, ${ringAlpha})`
            : `rgba(2, 132, 199, ${ringAlpha})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        if (sw.radius >= sw.maxRadius || sw.strength < 0.2) {
          pointer.shockwaves.splice(s, 1);
        }
      }

      // 3. Update & Draw Grid Points with Anti-Gravity Repulsion Physics
      const pointColorDefault = isDark ? "rgba(255, 255, 255, 0.14)" : "rgba(100, 116, 139, 0.22)";
      const pointColorNear = isDark ? "#38bdf8" : "#0284c7";

      for (let i = 0; i < gridPoints.length; i++) {
        const p = gridPoints[i];

        // Anti-Gravity Force from Pointer
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let fx = 0;
        let fy = 0;

        if (dist < pointer.radius && dist > 1) {
          const force = (1 - dist / pointer.radius) * 32;
          const angle = Math.atan2(dy, dx);
          // Deflection: push outwards with upward anti-gravity lift bias
          fx += Math.cos(angle) * force;
          fy += Math.sin(angle) * force - force * 0.45; // Defies gravity upwards!
        }

        // Force from shockwaves
        for (const sw of pointer.shockwaves) {
          const swDx = p.x - sw.x;
          const swDy = p.y - sw.y;
          const swDist = Math.sqrt(swDx * swDx + swDy * swDy);
          const ringDist = Math.abs(swDist - sw.radius);
          if (ringDist < 60) {
            const shockPush = (1 - ringDist / 60) * sw.strength;
            const shockAngle = Math.atan2(swDy, swDx);
            fx += Math.cos(shockAngle) * shockPush;
            fy += Math.sin(shockAngle) * shockPush;
          }
        }

        // Spring physics returning to original position
        const springK = 8.5;
        const damping = 0.82;

        const springDx = p.originX - p.x;
        const springDy = p.originY - p.y;

        p.vx = (p.vx + springDx * springK * dt + fx * 1.5) * damping;
        p.vy = (p.vy + springDy * springK * dt + fy * 1.5) * damping;

        p.x += p.vx * dt * 15;
        p.y += p.vy * dt * 15;

        // Draw grid node
        const isNearPointer = dist < pointer.radius * 0.85;
        const pointSize = isNearPointer ? 2.5 : 1.2;

        ctx.fillStyle = isNearPointer ? pointColorNear : pointColorDefault;

        if (isNearPointer) {
          ctx.shadowColor = isDark ? "#38bdf8" : "#0284c7";
          ctx.shadowBlur = 6;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, pointSize, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby points to form subtle high-tech grid matrix near cursor
        if (isNearPointer && dist < pointer.radius * 0.5) {
          const lineAlpha = (1 - dist / (pointer.radius * 0.5)) * (isDark ? 0.25 : 0.38);
          ctx.strokeStyle = isDark
            ? `rgba(56, 189, 248, ${lineAlpha})`
            : `rgba(2, 132, 199, ${lineAlpha})`;
          ctx.lineWidth = 0.85;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + (p.originX - p.x) * 0.5, p.y + (p.originY - p.y) * 0.5);
          ctx.stroke();
        }
      }

      ctx.shadowBlur = 0;

      // 4. Update & Draw Anti-Gravity Floating Particles (Zero-G Quantum Dust)
      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];

        // Drift upwards (defying gravity)
        pt.x += pt.vx;
        pt.y += pt.vy;

        // Subtle brownian motion
        pt.vx += (Math.random() - 0.5) * 0.05;
        pt.vy -= Math.random() * 0.02;

        // Pointer repulsion
        const pdx = pt.x - pointer.x;
        const pdy = pt.y - pointer.y;
        const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

        if (pdist < pointer.radius * 0.7 && pdist > 0) {
          const repulse = (1 - pdist / (pointer.radius * 0.7)) * 2.5;
          pt.vx += (pdx / pdist) * repulse;
          pt.vy += (pdy / pdist) * repulse - 0.8; // extra zero-g kick
        }

        // Drag friction
        pt.vx *= 0.97;
        pt.vy *= 0.97;

        // Keep upward drift minimum
        if (pt.vy > -0.2) pt.vy = -0.3;

        // Wrap around edges seamlessly
        if (pt.y < -20) {
          pt.y = height + 10;
          pt.x = Math.random() * width;
        }
        if (pt.x < -20) pt.x = width + 10;
        if (pt.x > width + 20) pt.x = -10;

        // Render particle with soft glow
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = pt.baseAlpha;
        ctx.fill();

        // Constellation links between close floating particles
        for (let j = i + 1; j < particles.length; j++) {
          const pt2 = particles[j];
          const dist2 = Math.hypot(pt.x - pt2.x, pt.y - pt2.y);
          if (dist2 < 75) {
            const linkAlpha = (1 - dist2 / 75) * 0.18;
            ctx.strokeStyle = isDark
              ? `rgba(129, 140, 248, ${linkAlpha})`
              : `rgba(79, 70, 229, ${linkAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(pt.x, pt.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown as EventListener);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("anti-gravity-pulse", handleCustomPulse);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Animated Ambient Nebulae */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-indigo-500/10 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-emerald-500/10 bg-emerald-500/10 rounded-full blur-3xl" />

      {/* High-Performance Reactive Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85"
      />
    </div>
  );
}
