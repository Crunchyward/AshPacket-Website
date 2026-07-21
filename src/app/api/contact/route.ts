import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
  website?: string; // honeypot
};

const TOPIC_LABELS: Record<string, string> = {
  "managed-it-starter": "Managed IT plan: Starter",
  "managed-it-pro": "Managed IT plan: Pro",
  "managed-it-managed": "Managed IT plan: Managed",
  sysadmin: "System administration",
  builds: "Custom PC / server build",
  "break-fix": "Break / fix support",
  other: "Something else",
};

function splitName(fullName: string): { firstName: string; lastName?: string } {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "Website visitor" };
  if (parts.length === 1) return { firstName: parts[0] };
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const freescoutUrl = process.env.FREESCOUT_URL?.replace(/\/$/, "");
  const apiKey = process.env.FREESCOUT_API_KEY;
  const mailboxId = Number(process.env.FREESCOUT_MAILBOX_ID ?? "1");

  if (!freescoutUrl || !apiKey || !Number.isFinite(mailboxId) || mailboxId < 1) {
    return NextResponse.json(
      {
        error:
          "FreeScout is not configured. Set FREESCOUT_URL, FREESCOUT_API_KEY, and FREESCOUT_MAILBOX_ID.",
      },
      { status: 503 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields; humans leave this empty.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim().toLowerCase() ?? "";
  const topic = body.topic?.trim() ?? "other";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const topicLabel = TOPIC_LABELS[topic] ?? topic;
  const { firstName, lastName } = splitName(name);
  const subject = `[Website] ${topicLabel}`;
  const threadText = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Topic: ${topicLabel}`,
    "",
    message,
  ].join("\n");

  const customer: Record<string, string> = { email, firstName };
  if (lastName) customer.lastName = lastName;

  const payload = {
    type: "email",
    mailboxId,
    subject,
    status: "active",
    customer,
    threads: [
      {
        type: "customer",
        text: threadText,
        customer: { email },
      },
    ],
  };

  try {
    const response = await fetch(`${freescoutUrl}/api/conversations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-FreeScout-API-Key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("FreeScout create conversation failed", response.status, detail);
      return NextResponse.json(
        { error: "Could not create support ticket. Please email support@ashpacket.net." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("FreeScout request error", error);
    return NextResponse.json(
      { error: "Could not reach FreeScout. Please email support@ashpacket.net." },
      { status: 502 },
    );
  }
}
