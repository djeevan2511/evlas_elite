import { BUSINESS, callHref, directionsHref, whatsappHref } from "../lib/business";
import { AnchorButton, Icon, LinkButton, Section, StarRating, WomenOwnedBadge } from "../components/ui";
import { HoursCard, MapBlock, PageHero } from "../components/sections";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come visit, or reach out"
        sub="We're in Khajaguda, Hyderabad. Call, message on WhatsApp, or book online — whatever's easiest."
      />

      <Section className="pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="rounded-2xl bg-card border border-border p-8">
              <h2 className="font-serif text-3xl text-charcoal">{BUSINESS.fullName}</h2>
              <div className="flex items-center gap-3 mt-3">
                <span className="flex items-center gap-1.5">
                  <StarRating value={BUSINESS.rating} />
                  <span className="text-sm text-charcoal">{BUSINESS.rating}</span>
                </span>
                <span className="text-sm text-stone">· {BUSINESS.reviewCount} reviews</span>
                <span className="w-px h-4 bg-border" />
                <WomenOwnedBadge className="text-charcoal" />
              </div>

              <address className="not-italic text-ink/80 leading-relaxed mt-6">
                {BUSINESS.address.line1}
                <br />
                {BUSINESS.address.line2}
                <br />
                {BUSINESS.address.line3}
              </address>
              <a href={callHref} className="flex items-center gap-3 mt-6 text-charcoal hover:text-rose transition-colors">
                <span className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-rose">
                  <Icon name="phone" className="w-5 h-5" />
                </span>
                <span className="font-serif text-xl">{BUSINESS.phoneDisplay}</span>
              </a>

              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                <AnchorButton href={callHref} variant="primary" size="md">
                  <Icon name="phone" className="w-4 h-4" /> Call
                </AnchorButton>
                <AnchorButton href={whatsappHref()} target="_blank" variant="whatsapp" size="md">
                  <Icon name="whatsapp" className="w-4 h-4" /> WhatsApp
                </AnchorButton>
                <LinkButton to="/book" variant="outline" size="md">Book Appointment</LinkButton>
                <AnchorButton href={directionsHref} target="_blank" variant="outline" size="md">
                  <Icon name="pin" className="w-4 h-4" /> Directions
                </AnchorButton>
              </div>
            </div>

            <HoursCard />
          </div>

          <div className="lg:sticky lg:top-24 self-start">
            <MapBlock />
          </div>
        </div>
      </Section>
    </>
  );
}
