export function HeroVisual() {
  const servers = [
    { name: "prod-web-01", status: "Healthy", uptime: "99.98%", load: 34 },
    { name: "prod-db-01", status: "Healthy", uptime: "99.99%", load: 52 },
    { name: "backup-srv", status: "Syncing", uptime: "100%", load: 18 },
  ];

  return (
    <div className="animate-fade-up-delay-2 relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-purple/20 via-brand-pink/10 to-transparent blur-2xl"
      />
      <div className="glass-panel animate-float relative overflow-hidden rounded-2xl p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between border-b border-white/8 pb-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-navy-400">
              Infrastructure Monitor
            </p>
            <p className="mt-0.5 text-sm font-semibold text-white">AshPacket Dashboard</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[10px] text-emerald-300">All systems go</span>
          </div>
        </div>

        <div className="space-y-3">
          {servers.map((server) => (
            <div
              key={server.name}
              className="rounded-xl border border-white/6 bg-white/[0.03] p-3.5"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      server.status === "Healthy" ? "bg-emerald-400" : "bg-brand-amber"
                    }`}
                  />
                  <span className="font-mono text-xs text-navy-200">{server.name}</span>
                </div>
                <span className="font-mono text-[10px] text-navy-500">{server.uptime}</span>
              </div>
              <div className="mt-2.5 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-navy-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-pink"
                    style={{ width: `${server.load}%` }}
                  />
                </div>
                <span className="font-mono text-[10px] text-navy-400">{server.load}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/6 pt-4">
          {[
            { label: "Tickets", value: "0 open" },
            { label: "Backups", value: "OK" },
            { label: "Alerts", value: "None" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-white/[0.03] px-2 py-2 text-center">
              <p className="font-mono text-[9px] uppercase tracking-wider text-navy-500">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs font-medium text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
