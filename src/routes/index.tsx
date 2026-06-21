import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ActivityCard, EarthBadge } from "@/components/ui-bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GhostCarbon — See Your Invisible Carbon Shadow" },
      { name: "description", content: "GhostCarbon creates a parallel low-carbon version of your day and lets you replay what could have been." },
      { property: "og:title", content: "GhostCarbon: Parallel Earth" },
      { property: "og:description", content: "Replay your life. Reduce what you never saw." },
    ],
  }),
  component: Home,
});

const earthA = [
  { icon: "🚕", label: "Uber", value: "2.3kg" },
  { icon: "🍕", label: "Food delivery", value: "1.8kg" },
  { icon: "📺", label: "Netflix", value: "0.15kg" },
  { icon: "🤖", label: "AI usage", value: "0.03kg" },
];
const earthB = [
  { icon: "🚇", label: "Metro", value: "0.3kg" },
  { icon: "🥡", label: "Pickup", value: "0.8kg" },
  { icon: "⬇", label: "Downloaded", value: "0.08kg" },
  { icon: "⚡", label: "Efficient AI", value: "0.02kg" },
];

const timeline = [
  { time: "08:00", icon: "☕", title: "Coffee", note: "Single-origin, oat milk. The morning ritual carries a small shadow.", co2: "0.21 kg" },
  { time: "09:00", icon: "🚕", title: "Uber across town", note: "A 14-minute ride. Comfortable. Quiet. Carbon-loud.", co2: "2.30 kg" },
  { time: "13:00", icon: "🍕", title: "Lunch delivery", note: "Two-mile detour for a single bag. Convenience compounds.", co2: "1.80 kg" },
  { time: "20:00", icon: "📺", title: "Streaming", note: "Three episodes, 4K. Cloud servers hum somewhere far away.", co2: "0.15 kg" },
  { time: "23:00", icon: "🤖", title: "AI prompts", note: "Forty-two questions. Each one a tiny tug on a turbine.", co2: "0.03 kg" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-36 pb-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3">
            <span className="text-eyebrow">A storytelling experience</span>
            <span className="h-px w-12 bg-border" />
            <span className="text-[11px] font-medium tracking-wider text-muted-foreground">v 1.0 · multiverse</span>
          </div>
          <h1 className="text-display mt-8 text-[clamp(3rem,8.5vw,8rem)]">
            See your <span className="italic font-light" style={{ color: "#04abe4" }}>invisible</span>
            <br />
            carbon shadow.
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-muted-foreground md:text-2xl">
            GhostCarbon creates a parallel low-carbon version of your day and lets you
            <span className="text-ocean font-medium"> replay what could have been.</span>
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/replay" className="group inline-flex items-center gap-2 rounded-full bg-ocean px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02]" style={{ boxShadow: "0 16px 40px -12px rgba(20,100,124,0.45)" }}>
              Replay today
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link to="/parallel-earth" className="rounded-full border border-border bg-card/60 px-7 py-4 text-sm font-medium text-ocean backdrop-blur transition hover:bg-card">
              Explore Parallel Earth
            </Link>
          </div>
        </motion.div>

        {/* SPLIT HERO */}
        <div className="relative mt-24 grid gap-6 md:grid-cols-2 md:gap-10">
          <ConnectingLines />
          <SplitColumn side="A" title="Earth A" subtitle="Your real day" data={earthA} total="7.4kg" />
          <SplitColumn side="B" title="Earth B" subtitle="An alternative reality" data={earthB} total="4.1kg" />
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-12 text-center text-sm text-muted-foreground">
          Two worlds. One choice apart. <span className="font-medium text-ocean">44% lower emissions</span> when small swaps stack.
        </motion.p>
      </section>

      {/* CARBON STORY */}
      <section className="relative mx-auto w-full max-w-4xl px-6 pt-24 pb-32 md:px-10">
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-eyebrow">Screen 02 · Today's chapter</p>
          <h2 className="text-display mt-5 text-[clamp(2.2rem,5vw,4rem)]">Your carbon story, by the hour.</h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">No charts. No dashboards. Just the quiet weight of a day, read like a magazine.</p>
        </motion.div>

        <div className="relative mt-16 pl-8 md:pl-14">
          <div className="absolute left-1.5 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-coral/60 to-transparent" />
          {timeline.map((t, i) => (
            <motion.article
              key={t.time}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative mb-14 last:mb-0"
            >
              <span className="absolute -left-[1.85rem] top-2 grid h-4 w-4 place-items-center md:-left-[3.4rem]">
                <span className="absolute h-4 w-4 rounded-full opacity-50 animate-pulse-glow" style={{ background: "#f9a3a4" }} />
                <span className="relative h-2.5 w-2.5 rounded-full bg-coral" />
              </span>
              <div className="flex items-baseline gap-4">
                <time className="font-mono text-sm font-medium tracking-wider text-taupe/80">{t.time}</time>
                <span className="text-2xl">{t.icon}</span>
                <h3 className="text-display text-2xl md:text-3xl">{t.title}</h3>
              </div>
              <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-muted-foreground md:text-lg">{t.note}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-coral/15 px-3 py-1 text-xs font-medium text-[#a04a4b]">
                <span className="h-1 w-1 rounded-full bg-coral" />
                carbon shadow · {t.co2}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* GHOST MESSAGE TEASER */}
      <section className="mx-auto w-full max-w-3xl px-6 pb-32">
        <motion.div initial={{ scale: 0.96, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="glass relative overflow-hidden rounded-[2.5rem] p-10 md:p-14">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-50 blur-3xl" style={{ background: "#86c8b4" }} />
          <p className="text-eyebrow">A message from Earth B</p>
          <p className="text-display mt-6 text-2xl leading-snug md:text-4xl">
            "Hi from Earth B 👋 You skipped two Uber rides this week. <span style={{ color: "#1f6b5a" }}>We saved 4.3kg together.</span>"
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full" style={{ background: "linear-gradient(135deg,#86c8b4,#04abe4)" }} />
            <div>
              <div className="text-sm font-semibold text-ocean">Your Ghost Twin</div>
              <div className="text-xs text-muted-foreground">delivered Friday, 09:14</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function SplitColumn({ side, title, subtitle, data, total }: { side: "A" | "B"; title: string; subtitle: string; data: typeof earthA; total: string }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: side === "A" ? 0 : 0.15 }}
      className="relative"
    >
      <div className="mb-6 flex items-end justify-between">
        <div>
          <EarthBadge side={side} />
          <h3 className="text-display mt-3 text-4xl md:text-5xl">{side === "A" ? "🌍" : "✨"} {title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">total</div>
          <div className="text-2xl font-bold" style={{ color: side === "A" ? "#c46566" : "#3a8a72" }}>{total}</div>
        </div>
      </div>
      <div className="space-y-3">
        {data.map((d, i) => (
          <ActivityCard key={d.label} {...d} side={side} delay={i * 0.08} />
        ))}
      </div>
    </motion.div>
  );
}

function ConnectingLines() {
  return (
    <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" preserveAspectRatio="none" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="conn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f9a3a4" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#04abe4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#86c8b4" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {[20, 38, 56, 74].map((y, i) => (
        <motion.path
          key={y}
          d={`M 48 ${y} Q 50 ${y + 2}, 52 ${y}`}
          stroke="url(#conn)"
          strokeWidth="0.3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 + i * 0.15 }}
        />
      ))}
    </svg>
  );
}
