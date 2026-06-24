"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { CONTACT, DRAKE_BELL_EVENT } from "@/lib/site";

type DrakeBellContextValue = { open: () => void };

const DrakeBellContext = createContext<DrakeBellContextValue | null>(null);

/**
 * Provides a single shared Drake Bell × Kara Silvestri modal used by both the
 * Homepage and Music page CTAs. Renders the modal once at the app root.
 */
export function DrakeBellProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Lock scroll + allow Escape to close while the modal is open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <DrakeBellContext.Provider value={{ open }}>
      {children}
      {isOpen && <DrakeBellModal onClose={close} />}
    </DrakeBellContext.Provider>
  );
}

export function useDrakeBell() {
  const ctx = useContext(DrakeBellContext);
  if (!ctx) {
    throw new Error("useDrakeBell must be used within a DrakeBellProvider");
  }
  return ctx;
}

function DrakeBellModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Drake Bell × Kara Silvestri"
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 px-4 pb-6 pt-24 backdrop-blur-md sm:px-8 sm:pb-10 sm:pt-28 animate-[fadeIn_.3s_ease]"
      onClick={onClose}
    >
      <div
        className="relative my-auto max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[#070b0c] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl font-thin text-white/80 transition hover:bg-black hover:text-white"
        >
          ×
        </button>

        <div className="grid grid-cols-1 gap-8 p-6 sm:p-10 md:grid-cols-2 md:gap-12">
          <div className="w-full overflow-hidden rounded-xl bg-black/40">
            {/* Plain img so the flyer is shown in full and never cropped. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/DBxKS.jpg"
              alt="Drake Bell × Kara Silvestri event flyer"
              className="block h-auto w-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-extralight leading-tight tracking-wide sm:text-3xl md:text-4xl">
              Join me for a Night of Music &amp; Celebration
            </h2>

            <div className="mt-6 space-y-5 text-sm font-normal leading-relaxed text-white/80 sm:text-base">
              <p>
                I&apos;m so excited to share that I&apos;ll be opening for Drake
                Bell on{" "}
                <strong className="font-semibold text-white">
                  {DRAKE_BELL_EVENT.date}
                </strong>{" "}
                at{" "}
                <strong className="font-semibold text-white">
                  {DRAKE_BELL_EVENT.venue}
                </strong>
                .
              </p>
              <p>
                Creating art and music has always brought me back to
                myself—through the light, the dark, and everything in between.
                These songs and stories have become reflections of my world, and
                I&apos;m honored to share this chapter with the people who
                continue to support and inspire me.
              </p>
              <p>
                To reserve yours, please send payment via{" "}
                <strong className="font-semibold text-white">
                  Venmo {CONTACT.venmoHandle}
                </strong>{" "}
                and include the email address you&apos;d like your tickets sent
                to in the payment description. Thank you for your support and I
                can&apos;t wait to share this night with you.
              </p>
            </div>

            <a
              href={CONTACT.venmo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/85 sm:w-auto"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
    </div>
  );
}

/**
 * Fixed bottom-right image button that opens the modal. Used on Home & Music.
 */
export function DrakeBellCTA() {
  const { open } = useDrakeBell();
  return (
    <button
      type="button"
      onClick={open}
      aria-label="Drake Bell × Kara Silvestri — open details"
      className="cta-pulse group fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full border border-white/15 bg-black/50 py-2 pl-2 pr-5 shadow-xl backdrop-blur-md transition-colors hover:border-white/40 hover:bg-black/70 sm:bottom-6 sm:right-6"
    >
      <span className="relative block h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/20 sm:h-14 sm:w-14">
        <Image
          src="/assets/DBxKS.jpg"
          alt=""
          fill
          sizes="56px"
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </span>
      <span className="text-left leading-tight">
        <span className="block text-[0.6rem] uppercase tracking-[0.2em] text-white">
          Live July 29th, 2026
        </span>
        <span className="block text-xs font-medium uppercase tracking-[0.12em] text-white sm:text-sm">
          Drake Bell <span className="text-white/50">×</span> Kara
        </span>
      </span>
    </button>
  );
}
