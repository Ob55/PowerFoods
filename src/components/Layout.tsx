import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  ShieldCheck,
  Leaf,
  BookOpen,
} from "lucide-react";
import { categories } from "@/data/categories";
import { disclaimer } from "@/data/product";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navLabel = (slug: string, name: string) =>
  slug === "beauty" ? "Beauty" : name;

const resourceLinks = [
  { label: "The Encyclopedia", to: "/encyclopedia" },
  { label: "What's Inside", to: "/encyclopedia#whats-inside" },
  { label: "FAQ", to: "/encyclopedia#faq" },
  { label: "Bonus Guide", to: "/bonus" },
  { label: "Natural Remedies Library", to: "/resources/natural-remedies" },
  { label: "About the System", to: "/encyclopedia#about" },
];

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
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-forest-500 via-ember-500 to-ember-400"
    />
  );
}

function ResourcesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-semibold text-ink/70 transition-colors hover:text-forest-700"
      >
        Resources
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-3 w-60 overflow-hidden rounded-2xl bg-white p-2 shadow-soft ring-1 ring-black/5">
          {resourceLinks.map((r) => (
            <Link
              key={r.label}
              to={r.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-ink/75 transition-colors hover:bg-cream hover:text-forest-700"
            >
              {r.label}
            </Link>
          ))}
        </div>
      )}
    </div>
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
        "sticky top-0 z-50 bg-cream/95 backdrop-blur transition-shadow duration-300",
        scrolled ? "shadow-soft" : ""
      )}
    >
      {/* Main bar */}
      <div className="border-b border-black/5">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <Link to="/" aria-label="Power Foods home">
            <Logo />
          </Link>

          <div className="flex items-center gap-5">
            <div className="hidden md:block">
              <ResourcesDropdown />
            </div>
            <Link
              to="/search"
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-white hover:text-forest-700"
            >
              <Search className="h-5 w-5" />
            </Link>
            <button
              className="text-forest-800 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Category bar (desktop) — pill nav with icons */}
      <nav className="hidden border-b border-black/5 bg-white/70 backdrop-blur lg:block">
        <div className="container-x flex items-center justify-end gap-2 overflow-x-auto py-2.5">
          {categories.map((c) => {
            const Icon = c.icon;
            const accent = c.theme?.accentText ?? "text-forest-700";
            return (
              <NavLink
                key={c.slug}
                to={`/category/${c.slug}`}
                className={({ isActive }) =>
                  cn(
                    "group flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "bg-forest-800 text-white shadow-soft"
                      : "text-ink/70 hover:bg-cream hover:text-forest-800"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={cn(
                        "h-4 w-4 transition-colors",
                        isActive ? "text-white" : accent
                      )}
                    />
                    {navLabel(c.slug, c.name)}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-black/5 bg-cream lg:hidden">
          <div className="container-x flex flex-col py-4">
            <p className="pb-2 text-xs font-bold uppercase tracking-wide text-ink/40">Resource Centers</p>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((c) => {
                const Icon = c.icon;
                const accent = c.theme?.accentText ?? "text-forest-700";
                return (
                  <Link
                    key={c.slug}
                    to={`/category/${c.slug}`}
                    className="flex items-center gap-2 rounded-xl bg-cream px-3 py-2.5 text-sm font-semibold text-ink/75"
                  >
                    <Icon className={cn("h-4 w-4", accent)} />
                    {navLabel(c.slug, c.name)}
                  </Link>
                );
              })}
            </div>
            <p className="pb-2 pt-5 text-xs font-bold uppercase tracking-wide text-ink/40">Resources</p>
            {resourceLinks.map((r) => (
              <Link key={r.label} to={r.to} className="py-1.5 text-sm text-ink/70">
                {r.label}
              </Link>
            ))}
            <Link to="/search" className="mt-4 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-forest-700 shadow-soft">
              <Search className="h-4 w-4" /> Search the publication
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-8 bg-forest-900 text-cream/80">
      <div className="h-1 w-full bg-gradient-to-r from-forest-500 via-ember-500 to-ember-400" />

      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            A natural wellness publication — evidence-informed nutrition, fitness,
            and healthy-living guides for a healthier everyday life.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 text-sm text-cream/60">
            <span className="flex items-center gap-2.5"><Leaf className="h-4 w-4 text-forest-300" />Natural, food-first guidance</span>
            <span className="flex items-center gap-2.5"><ShieldCheck className="h-4 w-4 text-forest-300" />Educational, not medical advice</span>
            <span className="flex items-center gap-2.5"><BookOpen className="h-4 w-4 text-forest-300" />Featured resource: the Encyclopedia</span>
          </div>
        </div>

        {/* Wellness Topics */}
        <div>
          <p className="mb-4 font-display font-bold text-white">Wellness Topics</p>
          <ul className="space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/category/${c.slug}`} className="text-cream/65 transition-colors hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p className="mb-4 font-display font-bold text-white">Resources</p>
          <ul className="space-y-2.5 text-sm">
            {resourceLinks.map((r) => (
              <li key={r.label}>
                <Link to={r.to} className="text-cream/65 transition-colors hover:text-white">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <p className="mb-4 font-display font-bold text-white">Explore</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="text-cream/65 transition-colors hover:text-white">Home</Link></li>
            <li><Link to="/search" className="text-cream/65 transition-colors hover:text-white">Search</Link></li>
            <li><Link to="/resources/natural-remedies" className="text-cream/65 transition-colors hover:text-white">Natural Remedies</Link></li>
            <li><a href="/#newsletter" className="text-cream/65 transition-colors hover:text-white">Newsletter</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/45">© {new Date().getFullYear()} Power Foods. All rights reserved.</p>
          <p className="text-xs text-cream/45">Digistore24 is the retailer of the featured product.</p>
        </div>
        <div className="container-x pb-8">
          <p className="text-xs leading-relaxed text-cream/40">{disclaimer}</p>
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
