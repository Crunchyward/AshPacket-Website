"use client";

import { useState } from "react";

function formatMoney(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

type SliderProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (value: number) => void;
};

function Slider({ id, label, value, min, max, step, display, onChange }: SliderProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-ink-200">
          {label}
        </label>
        <span className="font-mono text-sm font-semibold text-white">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="slider-brand mt-3 w-full cursor-pointer"
      />
      <div className="mt-1 flex justify-between font-mono text-[10px] text-ink-500">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

export function DowntimeCalculator() {
  const [employees, setEmployees] = useState(10);
  const [wage, setWage] = useState(30);
  const [hours, setHours] = useState(4);

  const costPerHour = employees * wage;
  const outageCost = costPerHour * hours;

  return (
    <section id="calculator" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-label">Downtime cost</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What does an outage cost you?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-400">
            Estimate wage loss alone when systems go dark, then decide whether
            proactive MSP coverage pays for itself.
          </p>
        </div>

        <div className="mt-12 max-w-4xl">
          <div className="panel rounded-xl p-5 sm:p-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div className="space-y-7">
                <Slider
                  id="employees"
                  label="Employees affected"
                  value={employees}
                  min={1}
                  max={100}
                  step={1}
                  display={String(employees)}
                  onChange={setEmployees}
                />
                <Slider
                  id="wage"
                  label="Average hourly pay"
                  value={wage}
                  min={15}
                  max={100}
                  step={5}
                  display={formatMoney(wage)}
                  onChange={setWage}
                />
                <Slider
                  id="hours"
                  label="Hours of downtime"
                  value={hours}
                  min={1}
                  max={40}
                  step={1}
                  display={`${hours} hr${hours === 1 ? "" : "s"}`}
                  onChange={setHours}
                />
              </div>

              <div aria-hidden className="hidden h-full w-px bg-white/8 lg:block" />

              <div className="text-center lg:text-left">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-500">
                  Estimated cost of this outage
                </p>
                <p className="mt-2 text-[2.25rem] font-semibold leading-none text-gradient-signal sm:text-5xl">
                  {formatMoney(outageCost)}
                </p>
                <p className="mt-3 text-sm text-ink-400">
                  {formatMoney(costPerHour)} in lost wages every hour
                </p>
                <a
                  href="#contact"
                  className="btn-brand mt-6 inline-block min-h-11 w-full rounded-lg px-7 py-3.5 text-sm font-semibold sm:w-auto sm:py-3"
                >
                  Protect uptime
                </a>
                <p className="mt-4 max-w-[18rem] text-xs leading-relaxed text-ink-500 lg:mx-0 mx-auto">
                  Wages only. Lost sales, missed deadlines, and recovery work
                  usually push the real number higher.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
