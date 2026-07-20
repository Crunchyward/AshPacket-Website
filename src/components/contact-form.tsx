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
      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-6 py-10 text-center">
        <p className="text-lg font-semibold text-white">Message sent</p>
        <p className="mt-2 text-sm text-ink-300">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-white sm:text-sm placeholder:text-ink-500 focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal";

  return (
    <form onSubmit={handleSubmit} className="text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-200">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-ink-200">
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          defaultValue="managed-it-pro"
          className={`${fieldClass} appearance-none`}
        >
          <option value="managed-it-starter">Managed IT plan: Starter</option>
          <option value="managed-it-pro">Managed IT plan: Pro</option>
          <option value="managed-it-managed">Managed IT plan: Managed</option>
          <option value="sysadmin">System administration</option>
          <option value="builds">Custom PC / server build</option>
          <option value="break-fix">Break / fix support</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-200">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="Outage, managed support, or a build brief, whatever you need."
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
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
        className="btn-brand mt-6 w-full rounded-lg px-8 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
