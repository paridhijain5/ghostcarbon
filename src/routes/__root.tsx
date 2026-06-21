import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { FloatingNav } from "../components/floating-nav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-eyebrow">404 · Lost in the multiverse</p>
        <h1 className="text-display mt-4 text-5xl">This Earth doesn't exist</h1>
        <a href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-ocean px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">Return to Earth A</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-2xl">A glitch between worlds</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try invalidating the timeline.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-ocean px-6 py-3 text-sm text-primary-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GhostCarbon: Parallel Earth — Replay your life" },
      { name: "description", content: "GhostCarbon shows you a parallel low-carbon version of your day. Replay what could have been." },
      { property: "og:title", content: "GhostCarbon: Parallel Earth" },
      { property: "og:description", content: "Replay your life. Reduce what you never saw." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen grain">
        <BackgroundOrbs />
        <FloatingNav />
        <main className="relative">
          <Outlet />
        </main>
      </div>
    </QueryClientProvider>
  );
}

function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-float" style={{ background: "radial-gradient(circle, #f9a3a4 0%, transparent 70%)" }} />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-35 blur-3xl animate-float" style={{ background: "radial-gradient(circle, #86c8b4 0%, transparent 70%)", animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl animate-float" style={{ background: "radial-gradient(circle, #04abe4 0%, transparent 70%)", animationDelay: "4s" }} />
    </div>
  );
}
