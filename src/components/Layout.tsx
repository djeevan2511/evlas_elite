import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { BUSINESS, callHref, whatsappHref, directionsHref } from "../lib/business";
import { Icon, LinkButton, AnchorButton, BrandMark } from "./ui";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/offers", label: "Offers" },
  { to: "/contact", label: "Contact" },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !overHero || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-ivory/90 backdrop-blur-md border-b border-border shadow-[0_1px_20px_rgba(35,32,29,0.04)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4 h-[68px] lg:h-[76px]">
          <Link to="/" className="flex items-center gap-3 leading-none shrink-0 group">
            <BrandMark className="h-10 lg:h-12 w-auto group-hover:scale-105" />
            <span className="flex flex-col">
              <span className={`font-serif text-xl lg:text-2xl tracking-tight transition-colors duration-300 ${solid ? "text-charcoal" : "text-ivory"}`}>
                EVLAS ELITE
              </span>
              <span className={`text-[0.56rem] uppercase tracking-[0.3em] mt-1 transition-colors duration-300 ${solid ? "text-stone" : "text-ivory/70"}`}>
                A Beauty Saloon
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 lg:gap-8 xl:gap-11">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-[0.78rem] tracking-wide whitespace-nowrap transition-colors ${
                    solid ? "text-ink hover:text-rose" : "text-ivory/85 hover:text-ivory"
                  } ${isActive ? (solid ? "!text-rose" : "!text-ivory font-medium") : ""}`
                }
                end={n.to === "/"}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block shrink-0">
            <LinkButton to="/book" variant={solid ? "primary" : "outlineLight"} size="sm">
              Book Appointment
            </LinkButton>
          </div>

          <button
            className={`lg:hidden p-2 -mr-2 ${solid ? "text-charcoal" : "text-ivory"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-border animate-fade-in">
          <nav className="px-5 py-4 flex flex-col">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `py-3 border-b border-border/60 text-base ${isActive ? "text-rose" : "text-ink"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <LinkButton to="/book" variant="primary" size="md" className="mt-4 w-full">
              Book Appointment
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileBar() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-ivory/95 backdrop-blur-md border-t border-border">
      <div className="grid grid-cols-3 divide-x divide-border">
        <Link to="/book" className="flex flex-col items-center gap-1 py-3 text-charcoal">
          <Icon name="calendar" className="w-5 h-5 text-rose" />
          <span className="text-[0.62rem] uppercase tracking-[0.15em]">Book</span>
        </Link>
        <a href={whatsappHref()} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 py-3 text-charcoal">
          <Icon name="whatsapp" className="w-5 h-5 text-[#1f8a54]" />
          <span className="text-[0.62rem] uppercase tracking-[0.15em]">WhatsApp</span>
        </a>
        <a href={callHref} className="flex flex-col items-center gap-1 py-3 text-charcoal">
          <Icon name="phone" className="w-5 h-5 text-gold" />
          <span className="text-[0.62rem] uppercase tracking-[0.15em]">Call</span>
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80 pb-24 lg:pb-0">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3.5">
              <BrandMark className="h-14 lg:h-16 w-auto" />
              <div>
                <h3 className="font-serif text-3xl text-ivory leading-none">EVLAS ELITE</h3>
                <p className="text-[0.6rem] uppercase tracking-[0.34em] text-ivory/50 mt-2">A Beauty Saloon</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed max-w-xs text-ivory/70">
              A refined beauty experience in Khajaguda, Hyderabad. Book your visit and let us take care of the rest.
            </p>
            <LinkButton to="/book" variant="outlineLight" size="sm" className="mt-6">
              Book Appointment
            </LinkButton>
          </div>

          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-ivory/40 mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-ivory transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.24em] text-ivory/40 mb-5">Visit</p>
            <address className="not-italic text-sm leading-relaxed text-ivory/70 space-y-1">
              <p>{BUSINESS.address.line1}</p>
              <p>{BUSINESS.address.line2}</p>
              <p>{BUSINESS.address.line3}</p>
            </address>
            <div className="mt-5 space-y-2 text-sm">
              <a href={callHref} className="flex items-center gap-2 hover:text-ivory">
                <Icon name="phone" className="w-4 h-4 text-gold" /> {BUSINESS.phoneDisplay}
              </a>
              <a href={whatsappHref()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-ivory">
                <Icon name="whatsapp" className="w-4 h-4 text-[#3ec97e]" /> WhatsApp
              </a>
              <a href={directionsHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-ivory">
                <Icon name="pin" className="w-4 h-4 text-rose" /> Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.72rem] text-ivory/40">
          <p>© {new Date().getFullYear()} EVLAS ELITE A Beauty Saloon. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">Khajaguda · Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="min-h-full flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
