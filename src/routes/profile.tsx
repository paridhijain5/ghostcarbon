import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/ui-bits";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — GhostCarbon" },
      { name: "description", content: "Your multiverse settings." },
    ],
  }),
  component: Profile,
});

const prefs = [
  { label: "Daily replay digest", value: "Every evening · 21:00", on: true },
  { label: "Ghost messages", value: "Weekly summary from Earth B", on: true },
  { label: "Strict twin", value: "Optimise aggressively", on: false },
  { label: "Quiet mornings", value: "No nudges before 09:00", on: true },
];

function Profile() {
  return (
    <PageShell eyebrow="You · across worlds">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.4fr]">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="glass rounded-[2.5rem] p-10">
          <div className="relative mx-auto h-32 w-32">
            <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(135deg,#f9a3a4,#04abe4,#86c8b4)", boxShadow: "0 20px 50px -10px rgba(4,171,228,0.45)" }} />
            <div className="absolute inset-1.5 grid place-items-center rounded-full bg-background text-3xl">🌗</div>
          </div>
          <div className="mt-6 text-center">
            <h1 className="text-display text-3xl">Aanya M.</h1>
            <p className="mt-1 text-sm text-muted-foreground">Bengaluru · joined Jun 2026</p>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-3 text-center">
            {[
              { v: "187", l: "days replayed" },
              { v: "412kg", l: "saved" },
              { v: "44%", l: "lower" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-muted/60 px-3 py-4">
                <dt className="text-display text-xl text-ocean">{s.v}</dt>
                <dd className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <div>
          <h2 className="text-display text-[clamp(2.2rem,5vw,3.5rem)]">Tune your <span className="italic font-light" style={{ color: "#04abe4" }}>twin.</span></h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground">Settings shape how Earth B speaks to you. Keep it gentle. Keep it honest.</p>

          <div className="mt-10 space-y-3">
            {prefs.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass flex items-center justify-between rounded-2xl px-6 py-5"
              >
                <div>
                  <div className="text-base font-semibold text-ocean">{p.label}</div>
                  <div className="text-sm text-muted-foreground">{p.value}</div>
                </div>
                <button className="relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300" style={{ background: p.on ? "#86c8b4" : "#e3dfd6" }}>
                  <span className="block h-5 w-5 rounded-full bg-white shadow transition-transform duration-300" style={{ transform: p.on ? "translateX(22px)" : "translateX(3px)" }} />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-10 rounded-[2rem] p-10" style={{ background: "linear-gradient(135deg,#14647c,#04abe4)", color: "white" }}>
            <p className="text-[11px] uppercase tracking-[0.3em] opacity-80">A note from Earth B</p>
            <p className="text-display mt-4 text-2xl md:text-3xl">"Thanks for tuning in. We'll keep the lights low and the messages soft."</p>
          </motion.div>
        </div>
      </div>
    </PageShell>
  );
}
