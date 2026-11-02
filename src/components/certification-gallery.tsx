"use client";

import { useCallback, useEffect, useState } from "react";

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

export function CertificationGallery({ certs }: { certs: Certification[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close]);

  const active = activeIndex === null ? null : certs[activeIndex];

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((cert, i) => (
          <div
            key={cert.title}
            className="border border-[var(--color-border)] rounded-xl p-4 bg-white hover:border-[var(--color-primary)]/40 hover:shadow-lg transition-all duration-300"
          >
            {cert.image ? (
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="block w-full group cursor-zoom-in"
                aria-label={`View ${cert.title} certificate`}
              >
                <div className="h-44 rounded-lg bg-[var(--color-bg-pale-blue)] overflow-hidden flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.imageAlt ?? cert.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </button>
            ) : null}
            <p className="text-sm font-semibold text-[var(--color-text-heading)] mt-4 mb-1">{cert.title}</p>
            <p className="text-sm text-[var(--color-text-muted)] mb-3">
              {cert.issuer} &middot; {cert.date}
            </p>
            <a
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[var(--color-primary)]"
            >
              Verify credential &rarr;
            </a>
          </div>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={close}
          role="presentation"
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              autoFocus
              className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
              aria-label="Close certificate preview"
            >
              &times;
            </button>
            <div className="flex items-center justify-center bg-[var(--color-bg-pale-blue)] p-4 md:p-6 min-h-0">
              <img
                src={active.image ?? ""}
                alt={active.imageAlt ?? active.title}
                className="max-w-full max-h-[60vh] object-contain"
              />
            </div>
            <div className="p-5 md:p-6 border-t border-[var(--color-border)]">
              <p className="text-base font-semibold text-[var(--color-text-heading)]">{active.title}</p>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">
                {active.issuer} &middot; {active.date}
              </p>
              <a
                href={active.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-medium text-[var(--color-primary)]"
              >
                Verify credential &rarr;
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CertificationGallery;
