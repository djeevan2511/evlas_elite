import { Link } from "react-router";
import type { ReactNode } from "react";

import logoPng from "../assets/evlas-logo.png";
import logoWebp from "../assets/evlas-logo.webp";

/* ---------- Brand logo ---------- */

// Authentic EVLAS ELITE emblem badge with man and woman silhouettes in brushed champagne gold
export function BrandMark({
  className = "h-11 w-auto",
  alt = "EVLAS ELITE",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <picture className="shrink-0 inline-flex items-center justify-center">
      <source srcSet={logoWebp} type="image/webp" />
      <img
        src={logoPng}
        alt={alt}
        width={897}
        height={537}
        className={`object-contain select-none transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(35,32,29,0.12)] ${className}`}
        loading="eager"
        decoding="async"
      />
    </picture>
  );
}

/* ---------- Icons (inline, minimal) ---------- */

export function Star({ className = "", filled = true }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={filled ? 0 : 1.5}>
      <path d="M12 2.5l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.95z" />
    </svg>
  );
}

export function Icon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    phone: <path d="M2.5 4.5c0-1 .8-2 2-2h2.2c.5 0 .9.3 1 .8l.9 3.4c.1.4 0 .8-.3 1.1L6.8 9.4a13 13 0 006.8 6.8l1.6-1.5c.3-.3.7-.4 1.1-.3l3.4.9c.5.1.8.5.8 1V18c0 1.2-1 2-2 2C10.6 20 3.5 12.9 3.5 4.5z" />,
    whatsapp: <path d="M12 2.5A9.5 9.5 0 002.9 15.9L2 21.5l5.8-1.5A9.5 9.5 0 1012 2.5zm0 2a7.5 7.5 0 11-3.9 13.9l-.4-.2-3 .8.8-2.9-.2-.4A7.5 7.5 0 0112 4.5zm-2.9 3.6c-.2 0-.5 0-.7.4-.2.4-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3l-1.6-.8c-.2-.1-.4-.1-.6.1l-.6.8c-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5.3-.5c.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.6-.4z" />,
    pin: <path d="M12 2.5c-3.9 0-7 3-7 6.8 0 4.7 6.1 11.4 6.4 11.7.3.3.9.3 1.2 0 .3-.3 6.4-7 6.4-11.7 0-3.8-3.1-6.8-7-6.8zm0 9.5a2.7 2.7 0 110-5.4 2.7 2.7 0 010 5.4z" />,
    clock: <><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M12 7v5.2l3.4 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></>,
    arrow: <path d="M4 12h15m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
    close: <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />,
    check: <path d="M4 12.5l5 5 11-11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    chevronL: <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    chevronR: <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    menu: <path d="M3 6h18M3 12h18M3 18h18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />,
    calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M3.5 9.5h17M8 3v4M16 3v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></>,
    sparkle: <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z" />,
  };
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/* ---------- Rating ---------- */

export function StarRating({ value, size = "w-4 h-4", className = "" }: { value: number; size?: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-gold ${className}`} aria-label={`${value} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`${size} ${i < Math.round(value) ? "opacity-100" : "opacity-25"}`} />
      ))}
    </span>
  );
}

/* ---------- Buttons ---------- */

type BtnProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "whatsapp" | "light" | "outlineLight" | "ghostLight";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const btnBase =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-50 disabled:pointer-events-none";

const btnSizes = {
  sm: "text-[0.72rem] px-4 py-2 uppercase",
  md: "text-[0.78rem] px-6 py-3 uppercase",
  lg: "text-[0.82rem] px-8 py-4 uppercase",
};

const btnVariants = {
  primary: "bg-charcoal text-ivory hover:bg-rose-deep",
  outline: "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  ghost: "text-charcoal hover:text-rose",
  whatsapp: "bg-[#1f8a54] text-white hover:bg-[#177043]",
  // For placing on dark backgrounds — no color-override className needed.
  light: "bg-ivory text-charcoal hover:bg-blush",
  outlineLight: "border border-ivory/50 text-ivory hover:bg-ivory hover:text-charcoal",
  ghostLight: "text-ivory hover:text-blush",
};

function classes(variant: BtnProps["variant"] = "primary", size: BtnProps["size"] = "md", className = "") {
  return `${btnBase} ${btnSizes[size]} ${btnVariants[variant]} ${className}`;
}

export function LinkButton({
  to,
  children,
  variant,
  size,
  className,
}: BtnProps & { to: string }) {
  return (
    <Link to={to} className={classes(variant, size, className)}>
      {children}
    </Link>
  );
}

export function AnchorButton({
  href,
  children,
  variant,
  size,
  className,
  target,
  download,
}: BtnProps & { href: string; target?: string; download?: string }) {
  return (
    <a href={href} target={target} download={download} rel={target ? "noreferrer" : undefined} className={classes(variant, size, className)}>
      {children}
    </a>
  );
}

export function Button({
  children,
  variant,
  size,
  className,
  onClick,
  type = "button",
  disabled,
}: BtnProps & { onClick?: () => void; type?: "button" | "submit"; disabled?: boolean }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes(variant, size, className)}>
      {children}
    </button>
  );
}

/* ---------- Layout helpers ---------- */

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-rose ${className}`}>
      <span className="w-6 h-px bg-rose/50" />
      {children}
    </span>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  );
}

export function WomenOwnedBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[0.68rem] uppercase tracking-[0.2em] ${className}`}>
      <Icon name="sparkle" className="w-3.5 h-3.5 text-gold" />
      Women-owned
    </span>
  );
}
