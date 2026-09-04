import { useEffect, useRef, useState } from "react";
import {
  BUSINESS,
  POPULAR_TIMES,
  WEEK,
  callHref,
  directionsHref,
  whatsappHref,
} from "../lib/business";
import { AnchorButton, Eyebrow, Icon, LinkButton, Section, StarRating } from "./ui";

function useInView<T extends HTMLElement>(): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, shown];
}

export function PageHero({
  eyebrow,
  title,
  sub,
  image,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  image?: string;
}) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </>
      )}
      <div className={`relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 ${image ? "text-ivory" : ""}`}>
        <Eyebrow className={image ? "!text-blush" : ""}>{eyebrow}</Eyebrow>
        <h1 className={`font-serif text-4xl sm:text-6xl mt-5 leading-tight ${image ? "text-ivory" : "text-charcoal"}`}>
          {title}
        </h1>
        {sub && <p className={`mt-5 max-w-xl leading-relaxed ${image ? "text-ivory/80" : "text-ink/75"}`}>{sub}</p>}
      </div>
    </section>
  );
}

export function PopularTimes() {
  const peak = Math.max(...POPULAR_TIMES.map((p) => p.v));
  const [ref, shown] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="rounded-2xl bg-card border border-border p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
        <h3 className="font-serif text-2xl text-charcoal">Popular visit times</h3>
        <span className="text-xs uppercase tracking-[0.16em] text-rose">Less busy than usual</span>
      </div>
      <p className="text-sm text-stone mb-6">Typical busy hours through the day.</p>
      <div className="flex items-stretch gap-1 sm:gap-1.5 h-36">
        {POPULAR_TIMES.map((p, i) => (
          <div key={p.h} className="flex-1 flex flex-col items-center gap-2 group">
            <div className="w-full flex-1 flex items-end">
              <div
                className={`w-full rounded-t-md transition-[height] duration-700 ease-out ${
                  p.v === peak ? "bg-rose" : "bg-champagne group-hover:bg-rose/60"
                }`}
                style={{ height: shown ? `${p.v}%` : "0%", transitionDelay: `${i * 40}ms` }}
              />
            </div>
            <span className="text-[0.5rem] sm:text-[0.58rem] text-stone whitespace-nowrap">{p.h.replace(" ", "")}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[0.72rem] text-stone/80 leading-relaxed">
        Illustrative schedule based on Google Maps activity information. Actual wait times may vary.
      </p>
    </div>
  );
}

export function HoursCard() {
  const todayIdx = (new Date().getDay() + 6) % 7; // Mon=0
  return (
    <div className="rounded-2xl bg-charcoal text-ivory p-6 sm:p-8">
      <div className="flex items-center gap-2 text-gold mb-4">
        <Icon name="clock" className="w-5 h-5" />
        <span className="text-xs uppercase tracking-[0.2em]">Opening Hours</span>
      </div>
      <p className="font-serif text-2xl mb-1">Today</p>
      <p className="text-sm text-ivory/70 mb-6">{BUSINESS.todayStatus}</p>
      <ul className="divide-y divide-ivory/10">
        {WEEK.map((d, i) => (
          <li
            key={d.day}
            className={`flex items-center justify-between py-2.5 text-sm ${
              i === todayIdx ? "text-ivory" : "text-ivory/60"
            }`}
          >
            <span className="flex items-center gap-2">
              {i === todayIdx && <span className="w-1.5 h-1.5 rounded-full bg-rose" />}
              {d.day}
            </span>
            <span className="tabular-nums">{d.hours}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-[0.72rem] text-ivory/50">{BUSINESS.hoursNote}</p>
      <AnchorButton href={callHref} variant="outlineLight" size="sm" className="mt-5 w-full">
        <Icon name="phone" className="w-4 h-4" /> Call Now
      </AnchorButton>
    </div>
  );
}

export function MapBlock() {
  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-card">
      <div className="relative h-64 sm:h-72 bg-[#e8e2d6]">
        {/* Stylised map mockup */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(176,144,79,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(176,144,79,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute left-8 top-0 bottom-0 w-6 bg-[#dcd3c4] -rotate-6" />
        <div className="absolute right-12 top-0 bottom-0 w-10 bg-[#dcd3c4] rotate-3" />
        <div className="absolute inset-x-0 top-1/2 h-8 bg-[#d3c9b8]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
          <div className="bg-rose text-ivory rounded-full p-2 shadow-lg">
            <Icon name="pin" className="w-5 h-5" />
          </div>
          <div className="w-1 h-3 bg-rose/60" />
        </div>
        <div className="absolute bottom-3 left-3 bg-ivory/90 backdrop-blur rounded-lg px-3 py-2 text-[0.7rem] text-charcoal shadow">
          {BUSINESS.address.short}
        </div>
      </div>
      <div className="p-6">
        <address className="not-italic text-sm leading-relaxed text-ink">
          {BUSINESS.address.line1}
          <br />
          {BUSINESS.address.line2}
          <br />
          {BUSINESS.address.line3}
        </address>
        <p className="mt-3 text-xs text-stone uppercase tracking-[0.15em]">
          Khajaguda · Hyderabad
        </p>
        <AnchorButton href={directionsHref} target="_blank" variant="primary" size="sm" className="mt-5">
          <Icon name="pin" className="w-4 h-4" /> Get Directions
        </AnchorButton>
      </div>
    </div>
  );
}

export function ContactActions() {
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      <AnchorButton href={callHref} variant="outline" size="sm">
        <Icon name="phone" className="w-4 h-4" /> Call
      </AnchorButton>
      <AnchorButton href={whatsappHref()} target="_blank" variant="whatsapp" size="sm">
        <Icon name="whatsapp" className="w-4 h-4" /> WhatsApp
      </AnchorButton>
      <AnchorButton href={directionsHref} target="_blank" variant="outline" size="sm">
        <Icon name="pin" className="w-4 h-4" /> Directions
      </AnchorButton>
    </div>
  );
}

export function ReviewsSummary() {
  return (
    <Section className="py-6">
      <div className="rounded-2xl bg-blush/60 border border-border px-6 py-6 sm:px-10 sm:py-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center">
        <div>
          <div className="flex items-center justify-center gap-2">
            <span className="font-serif text-4xl text-charcoal">{BUSINESS.rating}</span>
            <StarRating value={BUSINESS.rating} size="w-5 h-5" />
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-stone mt-2">
            {BUSINESS.reviewCount} Google Reviews
          </p>
        </div>
        <div className="h-10 w-px bg-border hidden sm:block" />
        <div>
          <p className="font-serif text-2xl text-charcoal">Women-owned</p>
          <p className="text-xs uppercase tracking-[0.18em] text-stone mt-2">Business</p>
        </div>
        <div className="h-10 w-px bg-border hidden sm:block" />
        <div>
          <p className="font-serif text-2xl text-charcoal">Khajaguda</p>
          <p className="text-xs uppercase tracking-[0.18em] text-stone mt-2">Hyderabad</p>
        </div>
      </div>
    </Section>
  );
}

export function CTABand({ heading, sub }: { heading: string; sub?: string }) {
  return (
    <Section className="py-20 lg:py-28">
      <div className="relative rounded-3xl overflow-hidden bg-charcoal text-ivory px-6 py-14 sm:px-14 sm:py-20 text-center">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-rose/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative">
          <Eyebrow className="!text-gold justify-center mb-5">Reserve your time</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-5xl leading-tight max-w-2xl mx-auto">{heading}</h2>
          {sub && <p className="mt-5 text-ivory/70 max-w-xl mx-auto">{sub}</p>}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <LinkButton to="/book" variant="outlineLight" size="lg">
              Book Appointment
            </LinkButton>
            <AnchorButton href={whatsappHref()} target="_blank" variant="whatsapp" size="lg">
              <Icon name="whatsapp" className="w-4 h-4" /> WhatsApp Us
            </AnchorButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
