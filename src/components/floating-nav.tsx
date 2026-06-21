import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";

const items = [
  { to: "/", label: "Home" },
  { to: "/replay", label: "Replay" },
  { to: "/ghost-twin", label: "Ghost Twin" },
  { to: "/parallel-earth", label: "Parallel Earth" },
  { to: "/insights", label: "Insights" },
  { to: "/profile", label: "Profile" },
] as const;

export function FloatingNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="glass flex items-center gap-1 rounded-full px-2 py-2">
        <Link to="/" className="flex items-center gap-2 px-3">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-blue animate-pulse-glow" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-blue" />
          </span>
          <span className="text-[13px] font-semibold tracking-tight text-ocean">GhostCarbon</span>
        </Link>
        <div className="mx-1 h-5 w-px bg-border" />
        <ul className="flex items-center gap-0.5">
          {items.slice(1).map((it) => {
            const active = pathname === it.to;
            return (
              <li key={it.to}>
                <Link
                  to={it.to}
                  className={`relative rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors duration-300 ${active ? "text-ocean" : "text-taupe hover:text-ocean"}`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{ background: "linear-gradient(135deg, rgba(4,171,228,0.18), rgba(134,200,180,0.25))" }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
