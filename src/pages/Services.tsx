import { Link } from "react-router";
import { SERVICES } from "../lib/business";
import { Icon, Section } from "../components/ui";
import { CTABand, PageHero } from "../components/sections";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Considered beauty, from head to toe"
        sub="Explore the salon's main service categories, from hair and skin to nails, makeup and bridal care."
      />

      <Section className="pb-20 lg:pb-28">
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group grid sm:grid-cols-2 rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-500"
            >
              <div className={`aspect-[4/3] sm:aspect-auto overflow-hidden bg-champagne ${i % 2 ? "sm:order-2" : ""}`}>
                <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7 flex flex-col justify-center">
                <span className="text-[0.68rem] uppercase tracking-[0.2em] text-rose">{s.category}</span>
                <h3 className="font-serif text-2xl lg:text-3xl text-charcoal mt-2">{s.name}</h3>
                <p className="text-sm text-stone mt-3 leading-relaxed">{s.blurb}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {s.items.map((it) => (
                    <span key={it} className="text-[0.68rem] rounded-full bg-blush/60 text-rose-deep px-2.5 py-1">
                      {it}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-5">
                  <span className="text-xs text-stone">Pricing available on request</span>
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-charcoal group-hover:text-rose">
                    Book <Icon name="arrow" className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-stone">
          Contact the salon for the current full menu, timings and pricing details.
        </p>
      </Section>

      <CTABand heading="Not sure what you need?" sub="Message us on WhatsApp and we'll help you choose the right service." />
    </>
  );
}
