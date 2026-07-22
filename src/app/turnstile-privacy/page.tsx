import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections";
import { siteUrl } from "@/lib/site";

const description =
  "Turnstile Privacy Addendum for AshPacket LLC visitors. Supplemental privacy information from Cloudflare for bot detection Signals.";

export const metadata: Metadata = {
  title: "Turnstile Privacy Addendum | AshPacket LLC",
  description,
  openGraph: {
    title: "Turnstile Privacy Addendum | AshPacket LLC",
    description,
    type: "website",
    url: `${siteUrl}/turnstile-privacy`,
    siteName: "AshPacket LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnstile Privacy Addendum | AshPacket LLC",
    description,
  },
};

export default function TurnstilePrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <article className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Turnstile Privacy Addendum
          </h1>
          <p className="mt-3 text-sm text-ink-400">
            Last updated: June 18, 2025
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink-300">
            This page reproduces Cloudflare&apos;s Turnstile Privacy Addendum for
            visitors to AshPacket LLC. The official source is maintained by
            Cloudflare at{" "}
            <a
              href="https://www.cloudflare.com/turnstile-privacy-policy/"
              className="text-signal transition-colors hover:text-signal-bright"
              target="_blank"
              rel="noopener noreferrer"
            >
              cloudflare.com/turnstile-privacy-policy
            </a>
            .
          </p>

          <div className="mt-12 space-y-10 text-base leading-relaxed text-ink-200">
            <section>
              <h2 className="text-xl font-semibold text-white">
                1. Introduction
              </h2>
              <p className="mt-4">
                Turnstile, developed by Cloudflare, Inc. (Cloudflare), is a
                pro-privacy website security tool that processes minimal Signals
                (as defined below) solely to protect web properties against
                malicious activity by distinguishing human users from bots and
                blocking bot traffic.
              </p>
              <p className="mt-4">
                Cloudflare does not control whether a website chooses to use
                Turnstile; instead, we make Turnstile available to any website
                that is looking for a way to detect and block bot traffic.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                2. Scope of this Addendum
              </h2>
              <p className="mt-4">
                This Turnstile Addendum is supplemental to Cloudflare&apos;s{" "}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  className="text-signal transition-colors hover:text-signal-bright"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  main Privacy Policy
                </a>
                . It provides additional information specific to your use and
                interaction with Turnstile. This Addendum also applies to the
                personal data processed using Cloudflare&apos;s Challenge
                Platform, and any reference to &ldquo;Turnstile&rdquo; in this
                addendum applies equally to the Challenge Platform.
              </p>
              <p className="mt-4">
                The Cloudflare Privacy Policy continues to apply to your use and
                interaction with Turnstile, except where this Turnstile Addendum
                provides more specific information. In those cases, the more
                specific information will apply instead.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                3. Information We Collect
              </h2>
              <p className="mt-4">
                Cloudflare Turnstile processes a variety of client-side signals
                (&ldquo;Signals&rdquo;) such as client IP address, TLS
                Fingerprint, User-Agent Header and Sitekey and associated
                origin. Cloudflare does not have the ability to directly
                identify any individuals from any of the Signals Turnstile
                collects, including IP addresses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                4. How We Use Information We Collect
              </h2>

              <h3 className="mt-6 text-lg font-medium text-ink-50">
                (i) Bot detection and blocking
              </h3>
              <p className="mt-3">
                Turnstile is a tool to protect web properties by distinguishing
                human users from bots and blocking any detected bot traffic that
                could otherwise harm the safety and security of that property.
              </p>
              <p className="mt-4">
                It does so by evaluating the Signals listed above specific to
                both the website visitor and the website visited. The purpose of
                collecting these Signals is not to identify, profile or target
                any individuals but solely to detect and block bots. The Signals
                collected by Turnstile are strictly necessary for this purpose
                (i.e. detecting and blocking bots to enable visitors to enjoy a
                safe and secure experience when visiting websites that have
                implemented Turnstile).
              </p>
              <p className="mt-4">
                Cloudflare is a data processor of Signals that we process to
                provide the Turnstile service to our customers, that is,
                securing our customers&apos; websites. This means that we process
                Signals for this purpose on behalf of, and pursuant to
                instructions issued by, our website operator customers (who are
                the data controllers of any data processed for this purpose). If
                you have questions, or wish to exercise any data protection
                rights, regarding Cloudflare&apos;s processing of Turnstile data
                to provide our service, please contact the relevant website
                operator.
              </p>

              <h3 className="mt-6 text-lg font-medium text-ink-50">
                (ii) Improving Turnstile&apos;s bot detection capabilities
              </h3>
              <p className="mt-3">
                Cloudflare also processes the Signals described in this Privacy
                Notice to improve Turnstile. This is necessary to refine and
                improve our bot detection algorithms in order to respond to
                evolving bot threats, and to maintain the security of the web
                properties that website visitors choose to visit.
              </p>
              <p className="mt-4">
                Cloudflare is a data controller of Signals that we process to
                improve Turnstile&apos;s bot detection capabilities. This
                Turnstile Privacy Notice (in conjunction with Cloudflare&apos;s
                main Privacy Policy) governs our processing of Signals for this
                purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                5. Notice to EU and UK Residents
              </h2>
              <p className="mt-4">
                To the extent that the data described in the Turnstile Privacy
                Notice qualifies as personal data, then:
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-ink-200">
                <li>
                  When processing this personal data as a processor to protect
                  our customers&apos; websites, our customers, as controllers,
                  determine the lawful basis of this processing, and we process
                  this data under their instruction and on their behalf; and
                </li>
                <li>
                  When processing this personal data as a controller, we rely on
                  our legitimate interests in improving the effectiveness of
                  Turnstile&apos;s bot detection capabilities to process this
                  Turnstile data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">6. Cookies</h2>
              <p className="mt-4">
                The Signals collected by Turnstile are strictly necessary for
                the purpose of detecting and blocking bots to enable visitors to
                enjoy a safe and secure experience when visiting websites that
                have implemented Turnstile.
              </p>
              <p className="mt-4">
                For more information about the cookies used by Cloudflare,
                please check Cloudflare&apos;s{" "}
                <a
                  href="https://www.cloudflare.com/cookie-policy/"
                  className="text-signal transition-colors hover:text-signal-bright"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cookie Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://developers.cloudflare.com/turnstile/"
                  className="text-signal transition-colors hover:text-signal-bright"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Turnstile Developer Docs
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                Contact for Privacy Concerns
              </h2>
              <p className="mt-4">
                If you have questions or concerns about this Turnstile Privacy
                Notice or your personal data processed through Turnstile, please
                contact Cloudflare&apos;s Data Protection Officer at{" "}
                <a
                  href="mailto:dpo@cloudflare.com"
                  className="text-signal transition-colors hover:text-signal-bright"
                >
                  dpo@cloudflare.com
                </a>
                .
              </p>
              <p className="mt-4">
                For questions about how AshPacket LLC uses Turnstile on this
                site, contact{" "}
                <a
                  href="mailto:support@ashpacket.net"
                  className="text-signal transition-colors hover:text-signal-bright"
                >
                  support@ashpacket.net
                </a>
                .
              </p>
            </section>
          </div>

          <p className="mt-14 text-sm text-ink-500">
            <Link
              href="/"
              className="text-ink-400 transition-colors hover:text-white"
            >
              &larr; Back to home
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
