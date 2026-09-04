import { BUSINESS, IMAGES, whatsappHref } from "../lib/business";
import { AnchorButton, Eyebrow, Icon, LinkButton, Section } from "../components/ui";
import { CTABand, PageHero } from "../components/sections";

const HIGHLIGHTS = [
  {
    title: "Current Offer",
    body: "Enjoy the anniversary facial offer and reach out directly for availability before slots fill up.",
  },
  {
    title: "Personal Guidance",
    body: "Not sure what to book? Message the salon on WhatsApp for quick help choosing the right service.",
  },
  {
    title: "Easy Booking",
    body: "Reserve your visit online in under a minute, then follow up by phone or WhatsApp if you need assistance.",
  },
];

export default function Offers() {
  return (
    <>
      <PageHero
        eyebrow="Offers & Packages"
        title="Current offers"
        sub={`${BUSINESS.anniversary} — a thank-you to the guests who've grown with us.`}
      />

      {/* Featured promotion */}
      <Section className="pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-charcoal text-ivory">
          <img src={IMAGES.products} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
          <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-rose/25 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 items-center gap-8 p-8 sm:p-14">
            <div>
              <span className="inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.24em] text-gold">
                <Icon name="sparkle" className="w-4 h-4" /> {BUSINESS.anniversary}
              </span>
              <h2 className="mt-5 font-serif leading-none">
                <span className="block text-7xl sm:text-8xl text-blush">50% OFF</span>
                <span className="block text-2xl sm:text-3xl mt-2 tracking-wide">on all facials</span>
              </h2>
              <p className="mt-5 text-ivory/75 max-w-sm leading-relaxed">
                Treat your skin to a glow facial at half price during our anniversary
                celebration. Limited-time offer — book your slot today.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton to="/book" variant="outlineLight" size="md">
                  Book Appointment
                </LinkButton>
                <AnchorButton href={whatsappHref("Hi EVLAS ELITE, I'd like to claim the 50% off facials offer.")} target="_blank" variant="whatsapp" size="md">
                  <Icon name="whatsapp" className="w-4 h-4" /> Claim on WhatsApp
                </AnchorButton>
              </div>
            </div>
            <div className="hidden lg:block justify-self-end">
              <div className="w-44 h-44 rounded-full border border-gold/40 flex flex-col items-center justify-center text-center">
                <span className="font-serif text-4xl text-gold">30</span>
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-ivory/70 mt-1">Years of<br />Beauty</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-16">
        <div className="rounded-xl border border-rose/20 bg-blush/30 px-6 py-4 flex items-center gap-3 text-sm text-rose-deep">
          <Icon name="sparkle" className="w-5 h-5 shrink-0" />
          For the latest packages, bridal enquiries or custom combinations, contact the salon directly on WhatsApp or by phone.
        </div>
      </Section>

      <Section className="pb-20 lg:pb-28">
        <div className="grid sm:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="rounded-2xl bg-card border border-border p-8 flex flex-col">
              <span className="self-start text-[0.62rem] uppercase tracking-[0.2em] text-rose bg-blush px-2.5 py-1 rounded-full">
                EVLAS ELITE
              </span>
              <h3 className="font-serif text-2xl text-charcoal mt-5">{item.title}</h3>
              <p className="mt-4 text-sm text-stone leading-relaxed flex-1">{item.body}</p>
              <LinkButton to="/book" variant="outline" size="sm" className="mt-6">Enquire &amp; Book</LinkButton>
            </div>
          ))}
        </div>
      </Section>

      <CTABand heading="Ready to book?" />
    </>
  );
}
