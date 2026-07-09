"use client";

import { useState } from "react";

// Create a free form at https://formspree.io, then replace YOUR_FORM_ID
// with the ID from your form's endpoint URL.
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-10 text-center">
        <p className="text-lg font-semibold text-white">Message sent</p>
        <p className="mt-2 text-sm text-navy-300">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-200">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white sm:text-sm placeholder:text-navy-500 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white sm:text-sm placeholder:text-navy-500 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-200">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white sm:text-sm placeholder:text-navy-500 focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple"
          placeholder="Tell us what's going on: an outage, a project, or ongoing support."
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          Something went wrong sending your message. Please try again, or email
          us directly at{" "}
          <a href="mailto:hello@ashpacket.com" className="underline underline-offset-2">
            hello@ashpacket.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-brand mt-6 w-full rounded-xl px-8 py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
