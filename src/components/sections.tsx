import { Logo } from "@/components/logo";

const services = [
  {
    title: "System Administration",
    description:
      "Server management, user accounts, backups, monitoring, and day-to-day infrastructure upkeep — so your systems stay healthy and secure.",
  },
  {
    title: "Break / Fix Support",
    description:
      "When something breaks, we respond fast. Troubleshooting, repairs, and root-cause fixes to get your team back up and running.",
  },
  {
    title: "General IT Services",
    description:
      "Workstations, networking, email, cloud tools, and vendor coordination. Whatever IT challenge you face, we handle it.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(236,72,153,0.08),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="animate-fade-up mb-6 sm:mb-8">
          <Logo className="h-10 w-auto sm:h-12 md:h-14" priority />
        </div>
        <p className="animate-fade-up-delay-1 mb-4 font-mono text-xs uppercase tracking-widest text-brand-pink-light">
          IT Consulting
        </p>
        <h1 className="animate-fade-up-delay-1 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-6xl md:leading-[1.1]">
          Reliable IT support for businesses that can&apos;t afford downtime.
        </h1>
        <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-navy-300 sm:mt-6 sm:text-lg">
          AshPacket LLC provides system administration, break/fix support, and
          full-service IT consulting — keeping your infrastructure running smoothly
          so you can focus on your business.
        </p>
        <div className="animate-fade-up-delay-3 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#contact"
            className="btn-brand rounded-full px-6 py-3.5 text-center text-sm font-medium text-white sm:py-3"
          >
            Get IT support
          </a>
          <a
            href="#services"
            className="rounded-full border border-navy-600 px-6 py-3.5 text-center text-sm font-medium text-navy-200 transition-colors hover:border-brand-purple hover:text-white sm:py-3"
          >
            Our services
          </a>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="border-t border-navy-700/60 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          What we do
        </h2>
        <p className="mt-3 max-w-xl text-navy-400">
          Practical, hands-on IT services for small and mid-size businesses —
          from proactive admin to emergency repairs.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-navy-700 bg-navy-900/50 p-6 transition-colors hover:border-brand-purple/40 hover:bg-navy-900/80"
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink transition-all group-hover:w-12" />
              <h3 className="text-lg font-medium text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="border-t border-navy-700/60 py-16 sm:py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:gap-12 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            About AshPacket
          </h2>
          <p className="mt-4 leading-relaxed text-navy-300">
            AshPacket LLC is an IT consulting company built on real-world systems
            experience. We work directly with your team — no call centers, no
            runaround — to solve problems and keep your technology dependable.
          </p>
          <p className="mt-4 leading-relaxed text-navy-400">
            Whether you need ongoing system administration, urgent break/fix
            support, or help with a one-off IT project, we bring a straightforward,
            no-nonsense approach to every job.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-3 sm:gap-4">
          {[
            { label: "Specialty", value: "Sysadmin" },
            { label: "Response", value: "Fast" },
            { label: "Coverage", value: "Full-stack IT" },
            { label: "Approach", value: "Hands-on" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-navy-700 bg-navy-900/50 p-4 sm:p-5"
            >
              <dt className="font-mono text-xs uppercase tracking-wider text-navy-500">
                {item.label}
              </dt>
              <dd className="mt-1 text-base font-medium text-navy-100 sm:text-lg">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-navy-700/60 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Need IT help?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-navy-400">
          Whether it&apos;s a broken workstation or ongoing admin support, reach
          out and we&apos;ll get back to you quickly.
        </p>
        <a
          href="mailto:hello@ashpacket.com"
          className="btn-brand mt-8 inline-flex max-w-full rounded-full px-6 py-3.5 text-sm font-medium break-all text-white sm:px-8 sm:py-3 sm:break-normal"
        >
          hello@ashpacket.com
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-navy-700/60 py-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-navy-500 sm:px-6 md:flex-row md:text-left">
        <p>&copy; {new Date().getFullYear()} AshPacket LLC. All rights reserved.</p>
        <p className="font-mono text-xs text-navy-600">IT Consulting &amp; Support</p>
      </div>
    </footer>
  );
}
