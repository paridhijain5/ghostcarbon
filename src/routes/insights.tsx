import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/ui-bits";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — GhostCarbon" },
      { name: "description", content: "Two changes. That's it. And the week, told like a magazine." },
    ],
  }),
  component: Insights,
});

const topTwo = [
  { tag: "Commute", save: "2.1kg", action: "Switch Uber to Metro", color: "#04abe4" },
  { tag: "Delivery", save: "1.3kg", action: "Choose Pickup", color: "#9bb763" },
];

const week = [
  { day: "Monday", title: "Transport dominated emissions.", body: "Three rides. A late meeting. The city pulled hard on you today." },
  { day: "Wednesday", title: "Food delivery increased footprint.", body: "Two orders before noon. Convenience compounded faster than you noticed." },
  { day: "Saturday", title: "Lowest-carbon day.", body: "You walked. You cooked. You stayed. The day was quiet for the planet." },
];

function Insights() {
  return (
    <PageShell eyebrow="Screen 04 + 07">
      <h1 className="text-display text-[clamp(2.8rem,7vw,6rem)] max-w-4xl">Two changes. <span className="italic font-light text-muted-foreground">That's it.</span></h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">Less is honest. Here are the two swaps that bend your week most.</p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {topTwo.map((c, i) => (
          <motion.div
            key={c.tag}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="glass relative overflow-hidden rounded-[2.5rem] p-12"
          >
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-40 blur-3xl" style={{ background: c.color }} />
            <div className="text-eyebrow" style={{ color: c.color }}>{c.tag}</div>
            <div className="text-display mt-6 text-[clamp(3rem,7vw,5rem)]" style={{ color: c.color }}>Save {c.save}</div>
            <div className="mt-6 text-2xl font-medium text-ocean">{c.action}</div>
          </motion.div>
        ))}
      </div>

      {/* WRAPPED */}
      <section className="mt-28">
        <p className="text-eyebrow">Weekly story</p>
        <h2 className="text-display mt-4 text-[clamp(2.4rem,6vw,5rem)]">Your week, <span className="italic font-light" style={{ color: "#04abe4" }}>wrapped.</span></h2>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">Seven days, three chapters. No graphs. Just the shape of it.</p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {week.map((w, i) => (
            <motion.article
              key={w.day}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative overflow-hidden rounded-[2rem] p-10"
              style={{
                background: i === 0 ? "linear-gradient(160deg, #f9a3a4 0%, #fcd0d0 100%)" :
                            i === 1 ? "linear-gradient(160deg, #04abe4 0%, #9fdcef 100%)" :
                                      "linear-gradient(160deg, #86c8b4 0%, #d3ebde 100%)",
              }}
            >
              <div className="text-[11px] uppercase tracking-[0.3em] font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>{w.day}</div>
              <h3 className="text-display mt-6 text-3xl text-white">{w.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90">{w.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass mt-10 flex flex-wrap items-center justify-between gap-6 rounded-[2rem] p-10"
        >
          <div>
            <div className="text-eyebrow">Potential reduction</div>
            <div className="text-display mt-3 text-[clamp(3rem,6vw,5rem)]" style={{ color: "#1f6b5a" }}>38%</div>
          </div>
          <p className="max-w-md text-base text-muted-foreground">If your typical week shifted toward Earth B's defaults, this is the slope your year would take.</p>
        </motion.div>
      </section>
    </PageShell>
  );
}
