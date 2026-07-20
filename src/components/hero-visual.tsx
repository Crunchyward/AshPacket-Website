function RackColumn({
  id,
  units,
  offset = 0,
  delay = 0,
}: {
  id: string;
  units: { on: boolean; fill: number }[];
  offset?: number;
  delay?: number;
}) {
  return (
    <div
      className="flex flex-1 flex-col rounded-sm border border-white/10 bg-ink-900/75 p-1.5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.35)]"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <div className="mb-1.5 flex items-center justify-between px-1 py-0.5">
        <span className="font-mono text-[9px] tracking-widest text-ink-500">{id}</span>
        <span
          className="rack-led h-1.5 w-1.5 rounded-full bg-signal"
          style={{ animationDelay: `${delay}s` }}
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-[3px]">
        {units.map((unit, i) => (
          <div
            key={`${id}-${i}`}
            className="relative min-h-0 flex-1 overflow-hidden rounded-[2px] border border-white/[0.06] bg-ink-950/90"
          >
            <div
              className={`absolute left-1.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${
                unit.on ? "bg-signal rack-led" : "bg-ink-700"
              }`}
              style={{ animationDelay: `${i * 0.18 + delay}s` }}
            />
            <div className="absolute inset-y-[35%] left-5 right-2 rounded-full bg-white/[0.04]" />
            {unit.on && (
              <div
                className="rack-bar absolute inset-y-[35%] left-5 rounded-full opacity-55"
                style={{ width: `${unit.fill}%` }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroVisual() {
  const racks = [
    {
      id: "RACK-A",
      offset: 0,
      units: [
        { on: true, fill: 72 },
        { on: true, fill: 48 },
        { on: true, fill: 88 },
        { on: false, fill: 0 },
        { on: true, fill: 36 },
        { on: true, fill: 64 },
        { on: true, fill: 52 },
        { on: true, fill: 41 },
        { on: false, fill: 0 },
        { on: true, fill: 77 },
        { on: true, fill: 29 },
        { on: true, fill: 58 },
      ],
    },
    {
      id: "RACK-B",
      offset: 18,
      units: [
        { on: true, fill: 55 },
        { on: true, fill: 80 },
        { on: false, fill: 0 },
        { on: true, fill: 43 },
        { on: true, fill: 67 },
        { on: true, fill: 91 },
        { on: true, fill: 33 },
        { on: false, fill: 0 },
        { on: true, fill: 61 },
        { on: true, fill: 74 },
        { on: true, fill: 46 },
        { on: true, fill: 38 },
      ],
    },
    {
      id: "RACK-C",
      offset: 8,
      units: [
        { on: true, fill: 40 },
        { on: false, fill: 0 },
        { on: true, fill: 69 },
        { on: true, fill: 84 },
        { on: true, fill: 51 },
        { on: true, fill: 27 },
        { on: false, fill: 0 },
        { on: true, fill: 63 },
        { on: true, fill: 78 },
        { on: true, fill: 45 },
        { on: true, fill: 56 },
        { on: true, fill: 70 },
      ],
    },
  ];

  const nodes = [
    { name: "edge-fw-01", role: "Firewall", load: 28 },
    { name: "app-node-02", role: "App host", load: 61 },
    { name: "nas-backup", role: "Storage", load: 44 },
    { name: "build-lab", role: "Imaging", load: 19 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-plane" />
      <div className="hero-scan" />

      {/* Dominant rack / ops plane: full-bleed right side */}
      <div className="absolute inset-y-0 right-0 hidden w-[56%] lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-ink-950 via-ink-950/50 to-transparent" />
        <div className="absolute bottom-36 top-24 right-8 left-6 flex gap-3">
          {racks.map((rack, ri) => (
            <RackColumn
              key={rack.id}
              id={rack.id}
              units={rack.units}
              offset={rack.offset}
              delay={ri * 0.35}
            />
          ))}
        </div>

        <div className="absolute bottom-12 left-8 right-14 panel rounded-lg p-4">
          <div className="mb-3 flex items-center justify-between border-b border-white/8 pb-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
              ashpacketctl status
            </p>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-signal">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-signal" />
              LIVE
            </span>
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
                <span className="w-8 text-right font-mono text-[10px] text-ink-500">
                  {node.load}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="sweep-line absolute top-[28%] h-px w-2/5 bg-gradient-to-r from-transparent via-signal/55 to-transparent" />
      </div>

      {/* Mobile atmosphere: short rack strip tucked under content */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 lg:hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto flex h-16 max-w-lg gap-1.5 px-5 pb-2 opacity-45 sm:h-24 sm:opacity-55">
          {racks.map((rack, ri) => (
            <div
              key={`m-${rack.id}`}
              className="flex flex-1 flex-col gap-0.5 border border-white/10 bg-ink-900/60 p-1"
            >
              <div className="mb-0.5 flex justify-end">
                <span
                  className="rack-led h-1 w-1 rounded-full bg-signal"
                  style={{ animationDelay: `${ri * 0.3}s` }}
                />
              </div>
              {rack.units.slice(0, 5).map((unit, i) => (
                <div
                  key={i}
                  className={`relative h-full min-h-[4px] flex-1 border border-white/5 ${
                    unit.on ? "bg-ink-950" : "bg-ink-950/40"
                  }`}
                >
                  {unit.on && (
                    <div
                      className="absolute inset-y-[30%] left-1 right-1 rounded-full bg-signal/35"
                      style={{ width: `${Math.max(unit.fill - 20, 25)}%` }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
