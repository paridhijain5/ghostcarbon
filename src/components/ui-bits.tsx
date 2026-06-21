import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ children, eyebrow, title, subtitle }: { children: ReactNode; eyebrow?: string; title?: string; subtitle?: string }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pt-32 pb-24 md:px-10">
      {(eyebrow || title) && (
        <motion.header
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-4xl"
        >
          {eyebrow && <p className="text-eyebrow mb-5">{eyebrow}</p>}
          {title && <h1 className="text-display text-[clamp(2.5rem,6vw,5.5rem)]">{title}</h1>}
          {subtitle && <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>}
        </motion.header>
      )}
      {children}
    </div>
  );
}

export function EarthBadge({ side, className = "" }: { side: "A" | "B"; className?: string }) {
  const isA = side === "A";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider uppercase ${className}`}
      style={{
        background: isA ? "color-mix(in oklab, #f9a3a4 18%, white)" : "color-mix(in oklab, #86c8b4 22%, white)",
        color: isA ? "#a04a4b" : "#1f6b5a",
      }}>
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: isA ? "#f9a3a4" : "#86c8b4" }} />
      Earth {side}
    </span>
  );
}

export function ActivityCard({ icon, label, value, side, delay = 0 }: { icon: string; label: string; value: string; side: "A" | "B"; delay?: number }) {
  const isA = side === "A";
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="glass group relative flex items-center justify-between rounded-3xl p-5"
    >
      <div className="flex items-center gap-4">
        <div
          className="grid h-12 w-12 place-items-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110"
          style={{ background: isA ? "color-mix(in oklab, #f9a3a4 20%, white)" : "color-mix(in oklab, #86c8b4 22%, white)" }}
        >
          {icon}
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-taupe/70">{isA ? "Real" : "Alternate"}</div>
          <div className="text-base font-semibold text-ocean">{label}</div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-xl font-bold tracking-tight" style={{ color: isA ? "#c46566" : "#3a8a72" }}>{value}</div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">CO₂</div>
      </div>
    </motion.div>
  );
}
