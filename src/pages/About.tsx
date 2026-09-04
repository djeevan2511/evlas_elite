import { BUSINESS, IMAGES } from "../lib/business";
import { Eyebrow, Icon, Section, StarRating, WomenOwnedBadge } from "../components/ui";
import { CTABand, PageHero } from "../components/sections";

const VALUES = [
  { icon: "sparkle", title: "Personal care", body: "Every appointment is tailored to you — never rushed, never one-size-fits-all." },
  { icon: "check", title: "Trusted by many", body: `A ${BUSINESS.rating}-star reputation across ${BUSINESS.reviewCount} Google reviews.` },
  { icon: "clock", title: "Easy to book", body: "Reserve online, on WhatsApp, or with a quick call — whatever suits you." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About EVLAS ELITE"
        title="Beauty designed around you"
        sub="A women-owned beauty saloon in Khajaguda, Hyderabad, built on personal care and a warm, welcoming space."
      />

      <Section className="pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-5 leading-tight">
              A calm space for looking &amp; feeling your best
            </h2>
            <p className="mt-6 text-ink/80 leading-relaxed">
              EVLAS ELITE has become a trusted name for beauty in Khajaguda, with
              hundreds of guests returning for hair, skin, makeup and bridal care.
            </p>
            <p className="mt-4 text-stone leading-relaxed text-sm">
              Guests come for the full range of beauty services, and stay for the
              warmth of the team, the thoughtful pace of each appointment and the
              confidence that comes from feeling well looked after.
            </p>
            <div className="mt-8">
              <WomenOwnedBadge className="text-charcoal" />
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img src={IMAGES.hairBlow} alt="Hair styling" className="rounded-2xl aspect-[3/4] object-cover bg-champagne mt-8" />
            <img src={IMAGES.products} alt="Salon products" className="rounded-2xl aspect-[3/4] object-cover bg-champagne" />
          </div>
        </div>
      </Section>

      <Section className="pb-20 lg:pb-28">
        <div className="grid sm:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl bg-card border border-border p-8">
              <div className="w-11 h-11 rounded-full bg-blush flex items-center justify-center text-rose">
                <Icon name={v.icon} className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mt-5">{v.title}</h3>
              <p className="text-sm text-stone mt-2 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-4">
        <div className="rounded-3xl bg-charcoal text-ivory px-8 py-12 sm:px-14 sm:py-16 flex flex-wrap items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-serif text-5xl">{BUSINESS.rating}</span>
              <StarRating value={BUSINESS.rating} size="w-5 h-5" />
            </div>
            <p className="text-ivory/60 text-sm mt-2 uppercase tracking-[0.18em]">{BUSINESS.reviewCount} Google Reviews</p>
          </div>
          <p className="font-serif text-2xl sm:text-3xl max-w-md leading-snug text-ivory/90">
            A reputation earned one guest at a time.
          </p>
        </div>
      </Section>

      <CTABand heading="Come see us in Khajaguda" sub="We'd love to welcome you. Book a visit at a time that works for you." />
    </>
  );
}
