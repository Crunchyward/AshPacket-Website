"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      className="h-6 w-6"
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

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-700/60 bg-navy-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#" aria-label="AshPacket LLC home" onClick={close}>
          <Logo className="h-8 w-auto sm:h-9" priority />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-navy-300 md:flex">
          {navLinks.slice(0, 2).map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-brand rounded-full px-4 py-2 font-medium text-white"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-navy-200 transition-colors hover:bg-navy-800 hover:text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-navy-700/60 bg-navy-950/95 backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
          open
            ? "visible max-h-80 opacity-100"
            : "invisible max-h-0 overflow-hidden opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-base font-medium text-navy-200 transition-colors hover:bg-navy-800 hover:text-white"
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
