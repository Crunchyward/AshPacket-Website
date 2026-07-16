export function HeroVisual() {
  const racks = [
    { id: "RACK-A", leds: [true, true, true, false, true, true] },
    { id: "RACK-B", leds: [true, true, false, true, true, true] },
    { id: "RACK-C", leds: [true, false, true, true, true, false] },
  ];

  const nodes = [
    { name: "edge-fw-01", role: "Firewall", load: 28 },
    { name: "app-node-02", role: "App host", load: 61 },
    { name: "nas-backup", role: "Storage", load: 44 },
  ];

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-plane" />
      <div className="hero-scan" />

      {/* Dominant rack / ops plane — full-bleed right side */}
      <div className="absolute inset-y-0 right-0 hidden w-[55%] lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-ink-950 via-ink-950/40 to-transparent" />
        <div className="absolute inset-y-10 right-8 left-8 flex gap-4 opacity-90">
          {racks.map((rack, ri) => (
            <div
              key={rack.id}
              className="flex flex-1 flex-col gap-1.5 rounded-sm border border-white/10 bg-ink-900/70 p-2"
              style={{ transform: `translateY(${ri * 12}px)` }}
            >
              <div className="mb-1 flex items-center justify-between px-1">
                <span className="font-mono text-[9px] tracking-widest text-ink-500">
                  {rack.id}
                </span>
                <span className="rack-led h-1.5 w-1.5 rounded-full bg-signal" style={{ animationDelay: `${ri * 0.4}s` }} />
              </div>
              {rack.leds.map((on, i) => (
                <div
                  key={`${rack.id}-${i}`}
                  className="relative h-7 overflow-hidden rounded-[2px] border border-white/6 bg-ink-950/80"
                >
                  <div
                    className={`absolute left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${
                      on ? "bg-signal rack-led" : "bg-ink-700"
                    }`}
                    style={{ animationDelay: `${i * 0.25 + ri * 0.15}s` }}
                  />
                  <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-white/8" />
                  {on && (
                    <div
                      className="rack-bar absolute inset-y-2 left-8 right-3 opacity-40"
                      style={{ width: `${35 + ((i * 17 + ri * 11) % 45)}%` }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Terminal readout overlay — part of the visual plane, not a floating badge */}
        <div className="absolute bottom-16 left-10 right-16 panel rounded-lg p-4">
          <div className="mb-3 flex items-center justify-between border-b border-white/8 pb-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
              ashpacketctl status
            </p>
            <span className="font-mono text-[10px] text-signal">LIVE</span>
          </div>
          <div className="space-y-2">
            {nodes.map((node) => (
              <div key={node.name} className="flex items-center gap-3">
                <span className="status-dot h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <span className="w-28 font-mono text-[11px] text-ink-200">{node.name}</span>
                <span className="flex-1 font-mono text-[10px] text-ink-500">{node.role}</span>
                <div className="h-1 w-16 overflow-hidden rounded-full bg-ink-800">
                  <div className="h-full bg-signal" style={{ width: `${node.load}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sweep-line absolute top-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-signal/50 to-transparent" />
      </div>

      {/* Mobile / tablet atmosphere — simplified rack silhouette */}
      <div className="absolute inset-x-0 bottom-0 h-48 opacity-40 lg:hidden">
        <div className="mx-auto flex h-full max-w-md gap-2 px-6 pb-4">
          {racks.map((rack) => (
            <div
              key={`m-${rack.id}`}
              className="flex flex-1 flex-col justify-end gap-1 border border-white/8 bg-ink-900/50 p-1.5"
            >
              {rack.leds.slice(0, 4).map((on, i) => (
                <div
                  key={i}
                  className={`h-3 border border-white/5 ${on ? "bg-signal/20" : "bg-ink-950/60"}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
