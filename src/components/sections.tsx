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
      "Proactive server management, user accounts, backups, and monitoring — keeping your infrastructure healthy before problems start.",
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
      "End-to-end IT support — workstations, networking, email, cloud tools, and vendor coordination under one trusted partner.",
    highlights: ["Network & Wi-Fi", "Workstation setup", "Vendor management"],
  },
];

const values = [
  {
    icon: UserIcon,
    title: "Direct access",
    description: "Work with the same engineer every time — no ticket queues or offshore call centers.",
  },
  {
    icon: ClockIcon,
    title: "Fast response",
    description: "When downtime costs money, we prioritize getting you back online first.",
  },
  {
    icon: ShieldIcon,
    title: "Security-minded",
    description: "Every recommendation balances reliability, security, and what actually fits your business.",
  },
];

const steps = [
  { num: "01", title: "Assess", desc: "We learn your environment, pain points, and priorities." },
  { num: "02", title: "Plan", desc: "A clear scope — whether it's a one-time fix or ongoing support." },
  { num: "03", title: "Deliver", desc: "Hands-on execution with transparent communication throughout." },
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
              break/fix support, and full-service IT consulting — so you can focus
              on growth, not outages.
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
                Explore services
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
            From day-to-day administration to emergency repairs — practical,
            hands-on IT for small and mid-size businesses.
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
                  IT support that actually feels like a partner
                </h2>
                <p className="mt-4 leading-relaxed text-navy-400">
                  We&apos;re not a faceless help desk. AshPacket is built on
                  real-world systems experience — working directly with your team
                  to solve problems and keep your technology dependable.
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
            Simple process, serious results
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
              Tell us what you need — ongoing support, an emergency fix, or a
              one-time project. We&apos;ll respond promptly.
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
