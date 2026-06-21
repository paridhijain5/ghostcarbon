import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/ui-bits";

export const Route = createFileRoute("/ghost-twin")({
  head: () => ({
    meta: [
      { title: "Ghost Twin — GhostCarbon" },
      { name: "description", content: "Meet the parallel-you. The version that lived a year on Earth B." },
    ],
  }),
  component: GhostTwin,
});

const stats = [
  { value: "720", unit: "kg CO₂", label: "saved", color: "#04abe4" },
  { value: "₹18,400", unit: "", label: "money saved", color: "#9bb763" },
  { value: "36", unit: "trees", label: "equivalent", color: "#86c8b4" },
];

const messages = [
  { txt: "You skipped two Uber rides this week. We saved 4.3kg together.", time: "Fri 09:14" },
  { txt: "Friday was our cleanest day yet.", time: "Sat 07:02" },
  { txt: "Three weeks of pickup over delivery. The walk is starting to feel like the point.", time: "Sun 18:45" },
];

function GhostTwin() {
  return (
    <PageShell eyebrow="Screen 05 · Your parallel-you">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h1 className="text-display text-[clamp(2.5rem,6.5vw,5.5rem)]">Meet your <span className="italic font-light" style={{ color: "#86c8b4" }}>ghost twin.</span></h1>
          <p className="mt-6 max-w-md text-xl text-muted-foreground">
            "What if I lived like Earth B for one year?"
          </p>
          <p className="mt-4 max-w-md text-base text-muted-foreground">A quiet AI lives the alternate version. Here's what they made of it.</p>
        </div>

        <div className="relative aspect-square w-full max-w-[560px] justify-self-center">
          <OrbitalTwin />
        </div>
      </div>

      <div className="mt-24 grid gap-5 md:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="glass rounded-[2rem] p-10"
          >
            <div className="text-eyebrow">over one year</div>
            <div className="mt-5 text-display text-6xl" style={{ color: s.color }}>{s.value}</div>
            <div className="mt-2 text-sm font-medium text-ocean">{s.unit && `${s.unit} · `}{s.label}</div>
          </motion.div>
        ))}
      </div>

      <section className="mt-24">
        <p className="text-eyebrow">Ghost messages</p>
        <h2 className="text-display mt-4 text-4xl md:text-5xl">Notes from Earth B.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {messages.map((m, i) => (
            <motion.div
              key={m.time}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass rounded-3xl p-7"
            >
              <div className="text-3xl">✉</div>
              <p className="mt-4 text-[17px] leading-relaxed text-ocean">{m.txt}</p>
              <div className="mt-6 text-[11px] uppercase tracking-wider text-muted-foreground">{m.time}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function OrbitalTwin() {
  return (
    <div className="relative h-full w-full">
      {[1, 2, 3].map((r) => (
        <motion.div
          key={r}
          className="absolute inset-0 rounded-full border"
          style={{
            borderColor: "rgba(4,171,228,0.18)",
            margin: `${r * 28}px`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30 + r * 10, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full" style={{ background: r === 1 ? "#f9a3a4" : r === 2 ? "#04abe4" : "#86c8b4" }} />
        </motion.div>
      ))}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-[22%] rounded-full grain"
        style={{
          background: "radial-gradient(circle at 30% 30%, #86c8b4 0%, #04abe4 50%, #14647c 100%)",
          boxShadow: "0 30px 80px -20px rgba(4,171,228,0.55), inset 0 0 60px rgba(255,255,255,0.4)",
        }}
      />
      <div className="absolute inset-[22%] grid place-items-center">
        <div className="text-center text-white">
          <div className="text-[10px] uppercase tracking-[0.3em] opacity-80">Twin</div>
          <div className="text-display mt-2 text-4xl">Earth B</div>
          <div className="mt-2 text-xs opacity-80">an alternate you</div>
        </div>
      </div>
    </div>
  );
}
