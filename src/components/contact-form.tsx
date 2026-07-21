"use client";

import { useState } from "react";
import { basePath } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_API_URL?.replace(/\/$/, "") ||
  `${basePath}/api/contact`;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMessage(null);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      topic: String(data.get("topic") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      const result = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;
      setErrorMessage(
        result?.error ??
          "Something went wrong sending your message. Please try again.",
      );
      setStatus("error");
    } catch {
      setErrorMessage(
        "Something went wrong sending your message. Please try again, or email us directly.",
      );
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
      {/* Honeypot for bots; keep hidden from real users */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

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
          {errorMessage}{" "}
          Email{" "}
          <a href="mailto:support@ashpacket.net" className="underline underline-offset-2">
            support@ashpacket.net
          </a>{" "}
          if it keeps failing.
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
