import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PageShell, EarthBadge } from "@/components/ui-bits";

export const Route = createFileRoute("/replay")({
  head: () => ({
    meta: [
      { title: "Replay Today — GhostCarbon" },
      { name: "description", content: "Watch your day morph into its low-carbon twin, swap by swap." },
    ],
  }),
  component: ReplayPage,
});

const swaps = [
  { from: "Uber", to: "Metro", fromIcon: "🚕", toIcon: "🚇", saving: "2.0kg", note: "23 minutes longer. A book gets read." },
  { from: "Food Delivery", to: "Pickup", fromIcon: "🍕", toIcon: "🥡", saving: "1.1kg", note: "A walk around the block. Sun on your face." },
  { from: "Streaming", to: "Downloaded", fromIcon: "📺", toIcon: "⬇", saving: "0.07kg", note: "Same show. Quieter servers." },
];

function ReplayPage() {
  const [playing, setPlaying] = useState(false);
  return (
    <PageShell eyebrow="Screen 03 · The main event">
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="text-display text-[clamp(2.8rem,7vw,6rem)]">Replay <span className="italic font-light" style={{ color: "#04abe4" }}>today.</span></h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">Press play and watch your day rewrite itself into its lower-carbon twin.</p>

          <motion.button
            onClick={() => setPlaying((p) => !p)}
            whileTap={{ scale: 0.97 }}
            className="group relative mt-10 inline-flex items-center gap-4 rounded-full px-10 py-6 text-base font-semibold text-primary-foreground"
            style={{ background: "linear-gradient(135deg,#14647c 0%,#04abe4 100%)", boxShadow: "0 20px 60px -16px rgba(4,171,228,0.55)" }}
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
              {playing ? "❚❚" : "▶"}
            </span>
            {playing ? "Replaying…" : "REPLAY TODAY"}
          </motion.button>

          <div className="mt-16 grid grid-cols-2 gap-6 rounded-[2rem] glass p-8">
            <Totals label="Earth A" value="7.4" tint="#c46566" />
            <Totals label="Earth B" value="4.1" tint="#3a8a72" />
            <div className="col-span-2 mt-2 flex items-center justify-between rounded-2xl bg-mist/20 px-5 py-4">
              <span className="text-sm font-medium text-ocean">Net saving today</span>
              <span className="text-display text-2xl" style={{ color: "#1f6b5a" }}>44% lower</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {swaps.map((s, i) => (
            <SwapCard key={s.from} s={s} delay={i * 0.18} playing={playing} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function Totals({ label, value, tint }: { label: string; value: string; tint: string }) {
  return (
    <div>
      <div className="text-eyebrow">{label}</div>
      <div className="mt-2 text-display text-5xl" style={{ color: tint }}>{value}<span className="text-xl text-muted-foreground"> kg</span></div>
    </div>
  );
}

function SwapCard({ s, delay, playing }: { s: typeof swaps[number]; delay: number; playing: boolean }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass relative overflow-hidden rounded-[1.8rem] p-7"
    >
      <div className="flex items-center justify-between">
        <EarthBadge side="A" />
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Saving</span>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <span className="text-4xl">{s.fromIcon}</span>
        <div>
          <div className="text-display text-2xl">{s.from}</div>
          <div className="text-xs text-muted-foreground">Original choice</div>
        </div>
      </div>

      <div className="relative my-5 h-12">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={playing ? { y: [0, 6, 0] } : {}}
          transition={{ duration: 1.4, repeat: playing ? Infinity : 0 }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 6 V34 M20 34 L12 26 M20 34 L28 26" stroke="#04abe4" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>

      <div className="flex items-center justify-between">
        <EarthBadge side="B" />
        <div className="text-display text-2xl" style={{ color: "#1f6b5a" }}>−{s.saving}</div>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <span className="text-4xl">{s.toIcon}</span>
        <div>
          <div className="text-display text-2xl">{s.to}</div>
          <div className="text-xs text-muted-foreground">{s.note}</div>
        </div>
      </div>

      <AnimatePresence>
        {playing && (
          <motion.div
            key="glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 rounded-[1.8rem]"
            style={{ boxShadow: "inset 0 0 60px rgba(134,200,180,0.35)" }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
