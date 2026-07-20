import { ContactForm } from "@/components/contact-form";
import { HeroVisual } from "@/components/hero-visual";
import {
  ClockIcon,
  CpuIcon,
  MailIcon,
  MonitorIcon,
  NetworkIcon,
  ServerIcon,
  ShieldIcon,
  UserIcon,
  WrenchIcon,
} from "@/components/icons";

const services = [
  {
    icon: NetworkIcon,
    code: "01",
    title: "Managed IT (MSP)",
    description:
      "Proactive monitoring, patching, backups, and day-to-day ops so your stack stays healthy before tickets pile up.",
    highlights: ["Endpoint & server monitoring", "Patch & backup cadence", "Vendor coordination"],
  },
  {
    icon: ServerIcon,
    code: "02",
    title: "System Administration",
    description:
      "Windows and Linux servers, Active Directory, identity, storage, and cloud platforms kept clean, documented, and recoverable.",
    highlights: ["Server & AD admin", "Cloud & hybrid ops", "Backup / DR drills"],
  },
  {
    icon: CpuIcon,
    code: "03",
    title: "Custom PC & Server Builds",
    description:
      "Workstations, NAS boxes, and rack servers built to spec: parts selection, assembly, burn-in, imaging, and handoff.",
    highlights: ["Workstation & gaming/pro builds", "Rack & tower servers", "Imaging & deployment"],
  },
  {
    icon: WrenchIcon,
    code: "04",
    title: "Break / Fix Support",
    description:
      "When something fails, you get an engineer, not a script. Remote or on-site diagnosis with root-cause remediation.",
    highlights: ["Same-day triage", "Remote & on-site", "Root-cause fixes"],
  },
];

const values = [
  {
    icon: UserIcon,
    title: "Direct engineer access",
    description: "Talk to the person doing the work. No ticket roulette, no offshore call tree.",
  },
  {
    icon: ClockIcon,
    title: "Ops-first response",
    description: "Outages get priority. We restore service first, then harden so it does not repeat.",
  },
  {
    icon: ShieldIcon,
    title: "Security-aware by default",
    description: "Backups, least privilege, and sane baselines, balanced against what your budget can sustain.",
  },
];

const steps = [
  { num: "01", title: "Assess", desc: "Inventory, pain points, and risk: what is live, what is fragile, what needs building." },
  { num: "02", title: "Plan", desc: "Clear scope for managed support, a one-off fix, or a full workstation/server build." },
  { num: "03", title: "Deliver", desc: "We implement, document, and leave you with systems you can trust day to day." },
];

const buildSpecs = [
  {
    icon: MonitorIcon,
    title: "Workstations",
    body: "Quiet office PCs, creator rigs, and CAD/engineering stations sized for the software you actually run.",
  },
  {
    icon: ServerIcon,
    title: "Servers & storage",
    body: "Tower or rack servers, Hyper-V/Proxmox hosts, and NAS/backup targets with proper cooling and power.",
  },
  {
    icon: CpuIcon,
    title: "Deploy ready",
    body: "BIOS tuned, OS imaged, agents installed, and burn-in completed before it ever hits your desk or rack.",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <HeroVisual />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-36 pt-28 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-28">
        <div className="max-w-2xl">
          <p className="animate-fade-up font-mono text-xs tracking-[0.28em] text-signal uppercase">
            AshPacket LLC
          </p>
          <h1 className="animate-fade-up-delay-1 mt-5 text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]">
            Infrastructure that{" "}
            <span className="text-gradient-signal">stays online.</span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-ink-300 sm:mt-6 sm:text-lg">
            Managed IT, hands-on system administration, and custom PC &amp; server
            builds, so your team ships work, not tickets.
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="btn-brand min-h-11 rounded-lg px-7 py-3.5 text-center text-sm font-semibold"
            >
              Talk to an engineer
            </a>
            <a
              href="#services"
              className="btn-ghost min-h-11 rounded-lg px-7 py-3.5 text-center text-sm font-semibold text-ink-200"
            >
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Starter",
    price: "$40",
    cadence: "/mo",
    summary: "Solid coverage for a single host or small stack that needs backups and light maintenance.",
    features: [
      "Up to 3TB backup storage",
      "Server updates 2x monthly",
      "Ticket support",
      "Basic uptime checks",
    ],
    cta: "Start with Starter",
    featured: false,
  },
  {
    name: "Pro",
    price: "$85",
    cadence: "/mo",
    summary: "Weekly care and monitoring for communities and businesses that cannot afford quiet failures.",
    features: [
      "Up to 6TB backup storage",
      "Weekly updates and patching",
      "Performance monitoring",
      "Priority tickets + Discord support",
      "Change log for major updates",
    ],
    cta: "Choose Pro",
    featured: true,
  },
  {
    name: "Managed",
    price: "$150",
    cadence: "/mo",
    summary: "Full remote administration when you want AshPacket running the server like an in-house admin.",
    features: [
      "Up to 10TB backup storage",
      "Full server management (updates, hardening, optimization)",
      "24-48hr response SLA",
      "Monthly health report",
      "Emergency restore assistance",
      "Security review cadence",
    ],
    cta: "Go Managed",
    featured: false,
  },
];

const planCoverage = [
  "Game servers and community hosts",
  "Small business Windows / Linux servers",
  "Backup, restore, and storage ops",
  "Updates, patching, and troubleshooting",
  "Security hardening and access hygiene",
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-label">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            MSP coverage, sysadmin depth, and hardware done right
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-400 sm:text-lg">
            From proactive managed support to emergency repair and purpose-built
            machines: one team for the full stack.
          </p>
        </div>

        <div className="mt-12">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-row group grid gap-4 px-2 py-7 sm:grid-cols-[auto_1fr_1.1fr] sm:items-start sm:gap-8 sm:px-4"
            >
              <div className="flex items-center gap-3 sm:block sm:w-28">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-signal/25 bg-signal/10 text-signal-bright">
                  <service.icon className="h-5 w-5" />
                </div>
                <p className="font-mono text-[11px] tracking-widest text-ink-500 sm:mt-3">
                  {service.code}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400 sm:text-[15px]">
                  {service.description}
                </p>
              </div>
              <ul className="space-y-2 sm:pt-1">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink-300">
                    <span className="h-px w-4 shrink-0 bg-signal/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="#plans"
            className="btn-brand inline-flex min-h-11 w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold sm:w-auto"
          >
            View Managed IT plans
          </a>
          <p className="text-sm text-ink-500">
            Retainers for game servers, communities, and small businesses.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Plans() {
  return (
    <section id="plans" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-label">Services / Managed IT Plans</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Managed IT &amp; system administration
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-400 sm:text-lg">
            Remote IT support for game servers, communities, and small businesses.
            Server setup and maintenance, backups, troubleshooting, and security,
            with one point of contact for all of it.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 border-y border-white/8 py-5 text-sm text-ink-300 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          {planCoverage.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <span className="h-1 w-1 shrink-0 rounded-full bg-signal" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-5 sm:p-7 ${
                plan.featured
                  ? "order-first border-signal/45 bg-signal/[0.06] lg:order-none"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {plan.featured && (
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  Most popular
                </p>
              )}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-3 flex flex-wrap items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-ink-500">{plan.cadence}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">{plan.summary}</p>
              <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/8 pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm text-ink-200">
                    <span className="mt-2 h-px w-3 shrink-0 bg-signal/80" />
                    <span className="min-w-0 break-words">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block min-h-11 rounded-lg px-5 py-3 text-center text-sm font-semibold ${
                  plan.featured
                    ? "btn-brand"
                    : "btn-ghost text-ink-100"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 border border-white/8 bg-white/[0.02] px-5 py-6 sm:grid-cols-2 sm:gap-4 sm:px-7">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-signal">
              Custom work
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              Custom projects and one-time work (migrations, rebuilds, security
              cleanups, new server standups) are quoted separately.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-signal">
              New client offer
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              New clients get 15% off month one on any Managed IT plan. Mention
              the offer when you reach out and we will apply it to your first invoice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Builds() {
  return (
    <section id="builds" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <p className="section-label">Custom builds</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Spec, assemble, burn-in, deploy
            </h2>
            <p className="mt-4 leading-relaxed text-ink-400">
              Need a quiet office PC, a render workstation, or a small business
              server that just works? We build to your workload, not a retail SKU.
            </p>
            <a
              href="#contact"
              className="btn-brand mt-8 inline-block rounded-lg px-6 py-3 text-sm font-semibold"
            >
              Request a build quote
            </a>
          </div>

          <div className="space-y-0 border-t border-white/8">
            {buildSpecs.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 border-b border-white/8 py-6"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-signal-bright">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="panel rounded-xl px-6 py-12 sm:px-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="section-label">Why AshPacket</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                An engineer on call, not a help desk script
              </h2>
              <p className="mt-4 leading-relaxed text-ink-400">
                AshPacket is built on years of hands-on systems work: servers,
                networks, endpoints, and the builds that power them. We plug into
                your business like an MSP, with the accountability of a senior
                admin.
              </p>
            </div>
            <div className="space-y-4">
              {values.map((item) => (
                <div key={item.title} className="flex gap-4 border-l-2 border-signal/40 pl-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center text-signal-bright">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-label">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From triage to steady-state ops
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-12 top-5 hidden h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-signal/40 to-transparent md:block"
                />
              )}
              <p className="font-mono text-sm font-semibold text-gradient-signal">{step.num}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/8 bg-white/8 sm:grid-cols-4">
          {[
            { label: "Focus", value: "MSP + Sysadmin" },
            { label: "Response", value: "Same-day" },
            { label: "Hardware", value: "Custom builds" },
            { label: "Coverage", value: "Remote & on-site" },
          ].map((item) => (
            <div key={item.label} className="bg-ink-950 px-5 py-6 text-center">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-500">
                {item.label}
              </dt>
              <dd className="mt-2 text-base font-semibold text-white sm:text-lg">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "What size businesses do you work with?",
    answer:
      "Mostly small and mid-size organizations, from solo operators to teams with dozens of seats. If you need MSP-style coverage without a full-time IT department, we fill that role.",
  },
  {
    question: "Do you offer remote support, on-site, or both?",
    answer:
      "Both. Most issues resolve remotely the same day. Hardware failures, network installs, rack work, and custom builds are handled on-site or in our build workflow.",
  },
  {
    question: "Can you build PCs or servers for us?",
    answer:
      "Yes. We spec and assemble workstations, creator/engineering rigs, NAS units, and small-business servers. Builds include burn-in, imaging, and deployment so machines arrive ready for production.",
  },
  {
    question: "What happens when something breaks outside business hours?",
    answer:
      "Reach out anyway. Urgent outages get triage as they come in. We will tell you immediately what we can do and when we can be hands-on.",
  },
  {
    question: "Do I need an ongoing contract?",
    answer:
      "No contract required for break/fix or one-off builds. Managed IT plans are month-to-month retainers you can start or stop as needed. Many clients begin with a one-off fix, then move onto Starter, Pro, or Managed.",
  },
  {
    question: "What is included in Managed IT plans?",
    answer:
      "Remote support for game servers, communities, and small businesses: setup and maintenance, backups, troubleshooting, and security. Starter is $40/mo, Pro is $85/mo, and Managed is $150/mo. Custom projects are quoted separately, and new clients get 15% off month one.",
  },
  {
    question: "What technologies do you support?",
    answer:
      "Windows and Linux servers, workstations and laptops, networking and Wi-Fi, Microsoft 365 / Google Workspace, backups, virtualization, game server hosts, and most business software. If it boots or routes packets, we can probably help.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="section-label">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Straight answers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-400">
            Quick notes on how we work. Missing something?{" "}
            <a href="#contact" className="text-signal-bright underline-offset-4 hover:underline">
              Ask us.
            </a>
          </p>
        </div>

        <div className="mt-12 space-y-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="faq-item group rounded-lg border border-white/8 bg-white/[0.02]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span className="min-w-0 text-left text-sm font-semibold text-white sm:text-base">
                  {faq.question}
                </span>
                <span
                  aria-hidden
                  className="faq-chevron flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-ink-300 transition-transform duration-300"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="border-t border-white/6 pt-4 text-sm leading-relaxed text-ink-300">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="panel rounded-xl px-4 py-10 sm:px-12 sm:py-16">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-signal/30 bg-signal/10 text-signal-bright">
                <MailIcon className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready when you are
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-400">
                Managed support, an outage, or a custom build. Tell us what you
                need and we will respond quickly.
              </p>
            </div>

            <div className="mt-10">
              <ContactForm />
            </div>

            <p className="mt-8 text-center text-sm text-ink-400">
              Prefer email?{" "}
              <a
                href="mailto:support@ashpacket.net"
                className="text-signal-bright underline-offset-4 hover:underline"
              >
                support@ashpacket.net
              </a>
            </p>
            <p className="mt-2 text-center font-mono text-xs text-ink-500">
              Remote &amp; on-site · MSP · Sysadmin · Builds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-white">AshPacket LLC</p>
            <p className="mt-1 text-sm text-ink-500">
              Managed IT · Sysadmin · Custom Builds
            </p>
          </div>
          <nav className="flex max-w-md flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-ink-400">
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
            <a href="#plans" className="transition-colors hover:text-white">
              Plans
            </a>
            <a href="#builds" className="transition-colors hover:text-white">
              Builds
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#faq" className="transition-colors hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </nav>
          <p className="text-center text-xs text-ink-600 md:text-right">
            &copy; {new Date().getFullYear()} AshPacket LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
