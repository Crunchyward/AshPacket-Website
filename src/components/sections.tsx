import { HeroVisual } from "@/components/hero-visual";
import {
  ClockIcon,
  MailIcon,
  NetworkIcon,
  ServerIcon,
  ShieldIcon,
  UserIcon,
  WrenchIcon,
} from "@/components/icons";

const services = [
  {
    icon: ServerIcon,
    title: "System Administration",
    description:
      "Server management, user accounts, backups, and monitoring. We keep your systems maintained so problems get caught early.",
    highlights: ["Server & cloud admin", "Backup & recovery", "24/7 monitoring"],
  },
  {
    icon: WrenchIcon,
    title: "Break / Fix Support",
    description:
      "Fast response when things go wrong. We diagnose, repair, and resolve root causes so your team gets back to work quickly.",
    highlights: ["Rapid troubleshooting", "On-site & remote", "Root-cause fixes"],
  },
  {
    icon: NetworkIcon,
    title: "General IT Services",
    description:
      "Workstations, networking, email, cloud tools, and vendor coordination. One company for all of it.",
    highlights: ["Network & Wi-Fi", "Workstation setup", "Vendor management"],
  },
];

const values = [
  {
    icon: UserIcon,
    title: "Direct access",
    description: "Work with the same engineer every time. No ticket queues, no call centers.",
  },
  {
    icon: ClockIcon,
    title: "Fast response",
    description: "When downtime costs money, we prioritize getting you back online first.",
  },
  {
    icon: ShieldIcon,
    title: "Security-minded",
    description: "Recommendations weigh reliability, security, and what fits your budget.",
  },
];

const steps = [
  { num: "01", title: "Assess", desc: "We look at your setup and find out what's causing trouble." },
  { num: "02", title: "Plan", desc: "You get a clear scope, whether it's a one-time fix or ongoing support." },
  { num: "03", title: "Deliver", desc: "We do the work and keep you informed the whole way." },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-label animate-fade-up">IT Consulting · Sysadmin · Support</p>
            <h1 className="animate-fade-up-delay-1 mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Your IT infrastructure,{" "}
              <span className="text-gradient-brand">handled by experts.</span>
            </h1>
            <p className="animate-fade-up-delay-2 mt-6 max-w-lg text-base leading-relaxed text-navy-300 sm:text-lg">
              AshPacket LLC keeps businesses running with system administration,
              break/fix support, and IT consulting. You run the business. We
              keep the technology working.
            </p>

            <div className="animate-fade-up-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="btn-brand rounded-xl px-7 py-3.5 text-center text-sm font-semibold text-white"
              >
                Schedule a consultation
              </a>
              <a
                href="#services"
                className="btn-ghost rounded-xl px-7 py-3.5 text-center text-sm font-semibold text-navy-200"
              >
                View services
              </a>
            </div>

            <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-2">
              {["Sysadmin", "Break/Fix", "Networking", "Cloud"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-navy-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-label">Services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything your business needs to stay online
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-400 sm:text-lg">
            Day-to-day administration, emergency repairs, and everything in
            between, for small and mid-size businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 sm:p-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-purple/10 blur-2xl transition-all group-hover:bg-brand-purple/20"
              />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/30 to-brand-pink/20 text-brand-pink-light ring-1 ring-white/10">
                  <service.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 font-mono text-[10px] tracking-widest text-navy-500">
                  0{i + 1}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-400">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/6 pt-5">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-navy-300">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-brand-pink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="gradient-border">
          <div className="gradient-border-inner px-6 py-12 sm:px-10 sm:py-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <p className="section-label">Why AshPacket</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Work with an engineer, not a help desk
                </h2>
                <p className="mt-4 leading-relaxed text-navy-400">
                  AshPacket is built on years of hands-on systems work. We deal
                  directly with your team, fix what breaks, and keep your
                  technology dependable.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-1">
                {values.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-xl border border-white/6 bg-white/[0.02] p-4 sm:p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-purple/15 text-brand-pink-light">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
        <div className="text-center">
          <p className="section-label">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What working with us looks like
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center">
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-px w-[calc(100%-5rem)] bg-gradient-to-r from-brand-purple/40 to-transparent md:block"
                />
              )}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple/25 to-brand-pink/15 ring-1 ring-white/10">
                <span className="font-mono text-lg font-bold text-gradient-brand">
                  {step.num}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-navy-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Specialty", value: "Sysadmin" },
            { label: "Response", value: "Same-day" },
            { label: "Coverage", value: "Full-stack IT" },
            { label: "Approach", value: "Hands-on" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-card rounded-xl p-5 text-center"
            >
              <dt className="font-mono text-[10px] uppercase tracking-widest text-navy-500">
                {item.label}
              </dt>
              <dd className="mt-2 text-lg font-semibold text-white">{item.value}</dd>
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
      "Mostly small and mid-size businesses, from solo operations to companies with dozens of employees. If you don't have a full-time IT department, we fill that role.",
  },
  {
    question: "Do you offer remote support, on-site, or both?",
    answer:
      "Both. Many issues can be resolved remotely within the same day. For hardware problems, network installs, or anything that needs hands on equipment, we come to you.",
  },
  {
    question: "What happens when something breaks outside business hours?",
    answer:
      "Reach out anyway. Emergencies don't keep a schedule, and we triage urgent outages as they come in. We'll let you know right away what we can do and when.",
  },
  {
    question: "Do I need an ongoing contract, or can I call you for one-time fixes?",
    answer:
      "No contract required. We handle one-time break/fix jobs all the time. Ongoing system administration keeps problems from happening in the first place, and many clients move to regular support after a one-off fix.",
  },
  {
    question: "What technologies do you support?",
    answer:
      "Windows and Linux servers, workstations and laptops, networking and Wi-Fi, email and cloud platforms like Microsoft 365 and Google Workspace, backups, and most business software. If it plugs in or connects to the internet, we can probably help.",
  },
  {
    question: "How quickly do you respond?",
    answer:
      "Same-day response for most requests. Urgent outages get priority. You work directly with an engineer, not a ticket queue.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="section-label">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Common questions
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-navy-400">
            Quick answers about how we work. Don&apos;t see yours?{" "}
            <a href="#contact" className="text-brand-pink-light underline-offset-4 hover:underline">
              Just ask.
            </a>
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item glass-card group rounded-2xl">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-semibold text-white sm:text-base">
                  {faq.question}
                </span>
                <span
                  aria-hidden
                  className="faq-chevron flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-navy-300 transition-transform duration-300"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="border-t border-white/6 pt-4 text-sm leading-relaxed text-navy-300">
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
        <div className="gradient-border">
          <div className="gradient-border-inner px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple/30 to-brand-pink/20 text-brand-pink-light ring-1 ring-white/10">
              <MailIcon className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-navy-400">
              Tell us what you need: ongoing support, an emergency fix, or a
              one-time project. We&apos;ll get back to you quickly.
            </p>
            <a
              href="mailto:hello@ashpacket.com"
              className="btn-brand mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white"
            >
              <MailIcon className="h-4 w-4" />
              hello@ashpacket.com
            </a>
            <p className="mt-4 font-mono text-xs text-navy-500">
              Remote &amp; on-site support available
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
            <p className="mt-1 text-sm text-navy-500">
              IT Consulting &amp; Support
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-navy-400">
            <a href="#services" className="transition-colors hover:text-white">
              Services
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
          <p className="text-center text-xs text-navy-600 md:text-right">
            &copy; {new Date().getFullYear()} AshPacket LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
