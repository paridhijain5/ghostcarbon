import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageShell } from "@/components/ui-bits";

export const Route = createFileRoute("/parallel-earth")({
  head: () => ({
    meta: [
      { title: "Parallel Earth — GhostCarbon" },
      { name: "description", content: "Two futures, diverging by a degree. Slide through the years." },
    ],
  }),
  component: ParallelEarth,
});

function ParallelEarth() {
  const [year, setYear] = useState(2026);
  const t = (year - 2026) / 4; // 0..1
  const earthA = (2.7 + t * 0.8).toFixed(2);
  const earthB = (1.4 - t * 0.5).toFixed(2);
  const gap = (Number(earthA) - Number(earthB)).toFixed(2);

  return (
    <PageShell eyebrow="Screen 06 · Cinematic divergence">
      <h1 className="text-display text-[clamp(2.8rem,7vw,6.5rem)] max-w-5xl">Two futures, <span className="italic font-light" style={{ color: "#04abe4" }}>one degree</span> apart.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Drag the years. Watch the paths bend further from each other — or closer, if Earth A learns from Earth B.</p>

      <div className="relative mt-16 overflow-hidden rounded-[2.5rem] glass p-8 md:p-12">
        <DivergenceSVG t={t} />

        <div className="relative grid gap-10 md:grid-cols-2">
          <WorldCard label="Earth A" sub="Current habits" value={earthA} tint="#f9a3a4" textTint="#c46566" />
          <WorldCard label="Earth B" sub="Alternative future" value={earthB} tint="#86c8b4" textTint="#1f6b5a" align="right" />
        </div>

        <div className="relative mt-12">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-muted-foreground">
            <span>2026</span>
            <span className="text-display text-3xl text-ocean normal-case tracking-tight">{year}</span>
            <span>2030</span>
          </div>
          <input
            type="range" min={2026} max={2030} step={1} value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="mt-4 w-full accent-[#04abe4]"
            style={{ height: 4 }}
          />
          <div className="mt-6 flex items-center justify-center gap-3 text-sm">
            <span className="text-muted-foreground">Gap between worlds</span>
            <span className="rounded-full bg-blue/15 px-3 py-1 font-semibold text-ocean">{gap} t CO₂ / year</span>
          </div>
        </div>
      </div>

      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 text-center text-lg text-muted-foreground">
        The future is not a line. It's a fork. <span className="text-ocean font-medium">Every habit picks a branch.</span>
      </motion.p>
    </PageShell>
  );
}

function WorldCard({ label, sub, value, tint, textTint, align = "left" }: { label: string; sub: string; value: string; tint: string; textTint: string; align?: "left" | "right" }) {
  return (
    <div className={align === "right" ? "text-right" : ""}>
      <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider" style={{ background: `color-mix(in oklab, ${tint} 22%, white)`, color: textTint }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: tint }} />
        {label}
      </div>
      <div className="mt-4 text-sm font-medium text-muted-foreground">{sub}</div>
      <div className="text-display mt-3 text-[clamp(3rem,7vw,5.5rem)]" style={{ color: textTint }}>{value}<span className="text-2xl text-muted-foreground"> t/yr</span></div>
    </div>
  );
}

function DivergenceSVG({ t }: { t: number }) {
  const spread = 30 + t * 60;
  return (
    <svg viewBox="0 0 800 220" className="pointer-events-none absolute inset-x-0 top-0 h-[220px] w-full opacity-70">
      <defs>
        <linearGradient id="gA" x1="0" x2="1"><stop offset="0%" stopColor="#f9a3a4" stopOpacity="0.1" /><stop offset="100%" stopColor="#f9a3a4" stopOpacity="0.9" /></linearGradient>
        <linearGradient id="gB" x1="0" x2="1"><stop offset="0%" stopColor="#86c8b4" stopOpacity="0.1" /><stop offset="100%" stopColor="#86c8b4" stopOpacity="0.9" /></linearGradient>
      </defs>
      <motion.path d={`M 40 110 Q 400 110, 760 ${110 - spread}`} stroke="url(#gA)" strokeWidth="2.5" fill="none" initial={false} animate={{ d: `M 40 110 Q 400 110, 760 ${110 - spread}` }} transition={{ duration: 0.6 }} />
      <motion.path d={`M 40 110 Q 400 110, 760 ${110 + spread}`} stroke="url(#gB)" strokeWidth="2.5" fill="none" initial={false} animate={{ d: `M 40 110 Q 400 110, 760 ${110 + spread}` }} transition={{ duration: 0.6 }} />
      <circle cx="40" cy="110" r="6" fill="#14647c" />
    </svg>
  );
}
