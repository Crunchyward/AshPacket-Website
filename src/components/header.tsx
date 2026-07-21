"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "/#builds", label: "Builds" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

const serviceSubLinks = [
  { href: "/#services", label: "Overview", desc: "MSP, sysadmin, builds, break/fix" },
  { href: "/#plans", label: "Managed IT Plans", desc: "Starter, Pro, and Managed retainers" },
  { href: "/projects", label: "One-time Projects", desc: "Fixed-price setups, migrations, and hardenings" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      } else {
        setServicesOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/8 bg-ink-950/95 shadow-lg shadow-black/25 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" aria-label="AshPacket LLC home" onClick={close} className="min-w-0 shrink">
          <Logo className="h-7 w-auto max-w-[11.5rem] sm:h-9 sm:max-w-none" priority />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm text-ink-300 transition-colors hover:bg-white/5 hover:text-white"
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              Services
              <ChevronIcon open={servicesOpen} />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-lg border border-white/10 bg-ink-950/95 p-1.5 shadow-xl shadow-black/40 backdrop-blur-xl"
              >
                {serviceSubLinks.map((link) => (
                  <Link
                    key={link.href}
                    role="menuitem"
                    href={link.href}
                    className="block rounded-md px-3.5 py-3 transition-colors hover:bg-white/5"
                    onClick={close}
                  >
                    <span className="block text-sm font-medium text-white">{link.label}</span>
                    <span className="mt-0.5 block text-xs text-ink-400">{link.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm text-ink-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn-brand ml-2 rounded-lg px-5 py-2 text-sm font-semibold"
          >
            Get support
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-ink-200 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 top-[calc(3.75rem+env(safe-area-inset-top))] z-40 bg-ink-950/70 backdrop-blur-sm md:hidden"
          aria-hidden
          onClick={close}
        />
      )}

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/6 bg-ink-950 transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-[min(36rem,calc(100dvh-3.75rem-env(safe-area-inset-top)))] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="relative z-50 mx-auto flex max-h-[min(36rem,calc(100dvh-3.75rem-env(safe-area-inset-top)))] max-w-7xl flex-col gap-1 overflow-y-auto overscroll-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6">
          <p className="px-4 pb-1 pt-1 font-mono text-[10px] uppercase tracking-widest text-ink-500">
            Services
          </p>
          {serviceSubLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3.5 text-base font-medium text-ink-200 transition-colors hover:bg-white/5 hover:text-white"
              onClick={close}
            >
              {link.label}
              <span className="mt-0.5 block text-sm font-normal text-ink-500">{link.desc}</span>
            </Link>
          ))}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3.5 text-base font-medium text-ink-200 transition-colors hover:bg-white/5 hover:text-white"
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="btn-brand mt-2 min-h-11 rounded-lg px-4 py-3.5 text-center text-base font-semibold"
            onClick={close}
          >
            Get support
          </Link>
        </nav>
      </div>
    </header>
  );
}
