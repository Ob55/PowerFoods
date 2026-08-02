import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { products, disclaimer } from "@/data/products";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";

// Minimal top-level navigation, no unnecessary items. Anchors resolve on the
// home page; from a course page they route home and scroll to the section.
const NAV_LINKS: { label: string; to: string }[] = [
  { label: "Courses", to: "/#courses" },
  { label: "Roadmap", to: "/#roadmap" },
  { label: "Results", to: "/#results" },
  { label: "FAQ", to: "/#faq" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-paper/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" aria-label="Home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <CTAButton to="/course/bundle" size="md" showArrow={false}>
            Get the Bundle
          </CTAButton>
        </nav>

        <button
          className="text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-input px-2 py-3 text-sm font-semibold text-ink/80"
              >
                {l.label}
              </Link>
            ))}
            <p className="px-2 pb-2 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Courses
            </p>
            <div className="grid grid-cols-2 gap-2">
              {products.map((p) => {
                const Icon = p.icon;
                return (
                  <Link
                    key={p.slug}
                    to={`/course/${p.slug}`}
                    className="flex items-center gap-2 rounded-input border border-line px-3 py-2.5 text-sm font-semibold text-ink"
                  >
                    <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                    {p.name.replace(/ in 50 Minutes| Masterclass| Secrets/gi, "")}
                  </Link>
                );
              })}
            </div>
            <div className="pt-4">
              <CTAButton to="/course/bundle" size="lg" className="w-full" showArrow={false}>
                Get the Complete Bundle
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Footer navigation that continues the educational experience (per HOMEPAGE.pdf §9).
const FOOTER_RESOURCES: { label: string; to: string }[] = [
  { label: "The learning journey", to: "/#roadmap" },
  { label: "Educational resources", to: "/#resources" },
  { label: "Student success", to: "/#results" },
  { label: "About the academy", to: "/#about" },
  { label: "Frequently asked questions", to: "/#faq" },
];

function Footer() {
  return (
    <footer className="border-t border-line bg-linen">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-graphite">
            A premium online academy for the Russian manicure, taught by an
            award-winning educator on real clients, structured lessons, lifetime
            access, and a certificate of completion.
          </p>
          <span className="mt-6 block rule-accent" />
          <p className="mt-6 max-w-sm text-sm font-medium leading-relaxed text-ink">
            Every great result begins with the fundamentals and one confident step at a time.
          </p>
        </div>

        <div>
          <p className="mb-4 font-display text-sm font-bold text-ink">Learning paths</p>
          <ul className="space-y-3 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/course/${p.slug}`}
                  className="text-graphite transition-colors hover:text-ink"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-display text-sm font-bold text-ink">Keep learning</p>
          <ul className="space-y-3 text-sm">
            {FOOTER_RESOURCES.map((r) => (
              <li key={r.to}>
                <Link to={r.to} className="text-graphite transition-colors hover:text-ink">
                  {r.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/course/bundle" className="text-graphite transition-colors hover:text-ink">
                Continue with the complete journey
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">© {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-xs text-muted">VEL Academy is the provider of the courses.</p>
        </div>
        <div className="container-x pb-8">
          <p className="max-w-reading text-xs leading-relaxed text-muted">{disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
