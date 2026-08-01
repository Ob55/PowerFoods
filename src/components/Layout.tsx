import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ShieldCheck, GraduationCap } from "lucide-react";
import { products, disclaimer } from "@/data/products";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

// Short labels for the nav pills (course names are long).
const NAV_LABELS: Record<string, string> = {
  "oval-shape": "Oval",
  "square-shape": "Square",
  "problem-nails": "Problem Nails",
  stamping: "Stamping",
  bundle: "Bundle",
};
const navLabel = (slug: string, name: string) => NAV_LABELS[slug] ?? name;

/** Thin progress bar that tracks scroll position. */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand via-cyanx to-brand"
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300",
        scrolled ? "shadow-soft" : ""
      )}
    >
      {/* Main bar */}
      <div className="border-b border-navy/5">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <Link to="/" aria-label="Home">
            <Logo />
          </Link>

          <button
            className="text-navy lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Course bar (desktop), pill nav with icons */}
      <nav className="hidden border-b border-navy/5 bg-sky-50/70 backdrop-blur lg:block">
        <div className="container-x flex items-center justify-center gap-2 overflow-x-auto py-2.5">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <NavLink
                key={p.slug}
                to={`/course/${p.slug}`}
                className={({ isActive }) =>
                  cn(
                    "group flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "bg-navy text-white shadow-soft"
                      : "text-navy-soft/70 hover:bg-white hover:text-navy"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={cn(
                        "h-4 w-4 transition-colors",
                        isActive ? "text-white" : "text-brand"
                      )}
                    />
                    {navLabel(p.slug, p.name)}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-navy/5 bg-white lg:hidden">
          <div className="container-x flex flex-col py-4">
            <p className="pb-2 text-xs font-bold uppercase tracking-wide text-navy-soft/40">
              Courses
            </p>
            <div className="grid grid-cols-2 gap-2">
              {products.map((p) => {
                const Icon = p.icon;
                return (
                  <Link
                    key={p.slug}
                    to={`/course/${p.slug}`}
                    className="flex items-center gap-2 rounded-xl bg-sky-50 px-3 py-2.5 text-sm font-semibold text-navy-soft"
                  >
                    <Icon className="h-4 w-4 text-brand" />
                    {navLabel(p.slug, p.name)}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-8 bg-navy text-white/80">
      <div className="h-1 w-full bg-gradient-to-r from-brand via-cyanx to-brand" />

      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr]">
        {/* Brand */}
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            On-demand Russian manicure and nail-art courses from an award-winning
            educator. Lifetime access, certificate included.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 text-sm text-white/60">
            <span className="flex items-center gap-2.5"><GraduationCap className="h-4 w-4 text-cyanx" />Certificate of completion</span>
            <span className="flex items-center gap-2.5"><ShieldCheck className="h-4 w-4 text-cyanx" />60-day money-back guarantee</span>
          </div>
        </div>

        {/* Courses */}
        <div>
          <p className="mb-4 font-display font-bold text-white">Courses</p>
          <ul className="space-y-2.5 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link to={`/course/${p.slug}`} className="text-white/65 transition-colors hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">© {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-xs text-white/45">VEL Academy is the provider of the courses.</p>
        </div>
        <div className="container-x pb-8">
          <p className="text-xs leading-relaxed text-white/40">{disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
