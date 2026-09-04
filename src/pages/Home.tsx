import { Link } from "react-router";
import {
  BUSINESS,
  IMAGES,
  SERVICES,
  callHref,
  directionsHref,
  whatsappHref,
} from "../lib/business";
import {
  AnchorButton,
  Eyebrow,
  Icon,
  LinkButton,
  Section,
  StarRating,
  WomenOwnedBadge,
} from "../components/ui";
import {
  CTABand,
  HoursCard,
  MapBlock,
  PopularTimes,
} from "../components/sections";

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden">
      <img
        src={IMAGES.heroInterior}
        alt="Interior of EVLAS ELITE beauty salon"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/40" />
      <div className="relative w-full px-5 sm:px-8 lg:px-12 pb-16 lg:pb-24 pt-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.24em] text-blush mb-5">
              <Icon name="sparkle" className="w-4 h-4 text-gold" /> {BUSINESS.anniversary}
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-ivory/90 mb-6">
              <span className="flex items-center gap-2">
                <StarRating value={BUSINESS.rating} />
                <span className="text-sm">{BUSINESS.rating}</span>
              </span>
              <span className="w-px h-4 bg-ivory/30" />
              <span className="text-sm">{BUSINESS.reviewCount} Google Reviews</span>
              <span className="w-px h-4 bg-ivory/30 hidden sm:block" />
              <WomenOwnedBadge className="text-ivory/90 hidden sm:inline-flex" />
            </div>

            <h1 className="font-serif text-ivory text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Beauty, <em className="not-italic text-blush">refined.</em>
            </h1>
            <p className="mt-6 text-lg text-ivory/85 max-w-lg leading-relaxed">
              Hair, skin, nails, makeup and bridal — a considered beauty experience
              in Khajaguda, Hyderabad, cared for by our team.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <LinkButton to="/book" variant="light" size="lg">
                Book an Appointment
              </LinkButton>
              <AnchorButton href={whatsappHref()} target="_blank" variant="whatsapp" size="lg">
                <Icon name="whatsapp" className="w-4 h-4" /> WhatsApp Us
              </AnchorButton>
              <AnchorButton href={callHref} variant="ghostLight" size="lg">
                <Icon name="phone" className="w-4 h-4" /> Call Now
              </AnchorButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Snapshot() {
  const items = [
    { icon: "sparkle", label: "Rating", value: `${BUSINESS.rating} ★`, sub: `${BUSINESS.reviewCount} reviews`, href: "/reviews", internal: true },
    { icon: "clock", label: "Today", value: "9 am – 9 pm", sub: "Open today", href: callHref },
    { icon: "pin", label: "Location", value: "Khajaguda", sub: "Hyderabad · Directions", href: directionsHref, external: true },
    { icon: "phone", label: "Call", value: BUSINESS.phoneDisplay, sub: "Tap to call", href: callHref },
  ];
  return (
    <Section className="-mt-10 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-[0_20px_60px_-30px_rgba(35,32,29,0.4)]">
        {items.map((it) => {
          const inner = (
            <div className="bg-card hover:bg-blush/40 transition-colors p-6 h-full flex flex-col gap-2">
              <Icon name={it.icon} className="w-5 h-5 text-rose" />
              <span className="text-[0.68rem] uppercase tracking-[0.2em] text-stone">{it.label}</span>
              <span className="font-serif text-xl text-charcoal">{it.value}</span>
              <span className="text-xs text-stone">{it.sub}</span>
            </div>
          );
          return it.internal ? (
            <Link key={it.label} to={it.href}>{inner}</Link>
          ) : (
            <a key={it.label} href={it.href} target={it.external ? "_blank" : undefined} rel={it.external ? "noreferrer" : undefined}>
              {inner}
            </a>
          );
        })}
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section className="py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-champagne">
            <img src={IMAGES.interiorReception} alt="Salon reception" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:right-6 bg-ivory rounded-xl shadow-xl border border-border px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl text-charcoal">{BUSINESS.rating}</span>
              <StarRating value={BUSINESS.rating} />
            </div>
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-stone mt-1">{BUSINESS.reviewCount} reviews</p>
          </div>
        </div>
        <div>
          <Eyebrow>About the salon</Eyebrow>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal mt-5 leading-tight">
            Beauty designed around you
          </h2>
          <p className="mt-6 text-ink/80 leading-relaxed">
            EVLAS ELITE is a women-owned beauty saloon in Khajaguda, Hyderabad,
            trusted by hundreds of guests with a {BUSINESS.rating}-star reputation on Google.
            Every visit is personal — thoughtful service in a calm, welcoming space.
          </p>
          <p className="mt-4 text-stone leading-relaxed text-sm">
            From styling and facials to nails, makeup and bridal preparation,
            the focus here is simple: attentive service, a calm atmosphere and
            beauty care that feels polished, personal and easy to return to.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton to="/about" variant="primary" size="md">About EVLAS ELITE</LinkButton>
            <WomenOwnedBadge className="text-charcoal self-center sm:hidden" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function ServicesPreview() {
  return (
    <Section className="py-20 lg:py-28 bg-champagne/40 rounded-none">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <Eyebrow>What we offer</Eyebrow>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal mt-5">Our services</h2>
        </div>
        <LinkButton to="/services" variant="outline" size="sm">
          View all services <Icon name="arrow" className="w-4 h-4" />
        </LinkButton>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden bg-champagne">
              <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <span className="text-[0.68rem] uppercase tracking-[0.2em] text-rose">{s.category}</span>
              <h3 className="font-serif text-2xl text-charcoal mt-2">{s.name}</h3>
              <p className="text-sm text-stone mt-2 leading-relaxed">{s.blurb}</p>
              <span className="inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-[0.18em] text-charcoal group-hover:text-rose transition-colors">
                Explore <Icon name="arrow" className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function GalleryStrip() {
  const shots = [IMAGES.hairCut, IMAGES.bridal1, IMAGES.nails1, IMAGES.hairCurl, IMAGES.bridal2];
  return (
    <Section className="py-20 lg:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <Eyebrow>Our work & space</Eyebrow>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal mt-5">A look inside</h2>
        </div>
        <LinkButton to="/gallery" variant="outline" size="sm">
          Open gallery <Icon name="arrow" className="w-4 h-4" />
        </LinkButton>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
        {shots.map((src, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-xl bg-champagne ${i === 0 ? "row-span-2 col-span-2" : ""}`}
          >
            <img src={src} alt="Salon work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function PlanVisit() {
  return (
    <Section className="py-10 lg:py-16">
      <Eyebrow>Plan your visit</Eyebrow>
      <h2 className="font-serif text-4xl sm:text-5xl text-charcoal mt-5 mb-12">
        When to find us
      </h2>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2"><PopularTimes /></div>
        <HoursCard />
      </div>
    </Section>
  );
}

function FindUs() {
  return (
    <Section className="py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow>Find us</Eyebrow>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal mt-5 leading-tight">
            In the heart of Khajaguda
          </h2>
          <p className="mt-6 text-ink/80 leading-relaxed max-w-md">
            Easy to reach, with a calm interior made for a relaxed visit. Tap
            below for directions, or reach us on WhatsApp or a call.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AnchorButton href={directionsHref} target="_blank" variant="primary" size="md">
              <Icon name="pin" className="w-4 h-4" /> Get Directions
            </AnchorButton>
            <AnchorButton href={callHref} variant="outline" size="md">
              <Icon name="phone" className="w-4 h-4" /> {BUSINESS.phoneDisplay}
            </AnchorButton>
          </div>
        </div>
        <MapBlock />
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Snapshot />
      <About />
      <ServicesPreview />
      <GalleryStrip />
      <PlanVisit />
      <FindUs />
      <CTABand
        heading="Ready when you are"
        sub="Book your appointment online in under a minute, or message us on WhatsApp for a quick chat."
      />
    </>
  );
}
