import { Link, useParams } from "react-router";
import { SERVICES, getService, whatsappHref } from "../lib/business";
import { AnchorButton, Eyebrow, Icon, LinkButton, Section } from "../components/ui";
import { CTABand } from "../components/sections";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug ?? "");
  const related = SERVICES.filter((s) => s.slug !== service?.slug).slice(0, 3);

  if (!service) {
    return (
      <Section className="pt-40 pb-32 text-center">
        <h1 className="font-serif text-4xl text-charcoal">Service not found</h1>
        <LinkButton to="/services" variant="primary" size="md" className="mt-6">Back to services</LinkButton>
      </Section>
    );
  }

  const included = [
    ...service.items,
    "Consultation with our team",
    "Relaxed, unhurried session",
  ];

  return (
    <>
      <section className="relative pt-24 lg:pt-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-10">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-champagne">
              <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-stone hover:text-rose">
                <Icon name="chevronL" className="w-4 h-4" /> All services
              </Link>
              <Eyebrow className="mt-6">{service.category}</Eyebrow>
              <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mt-4 leading-tight">{service.name}</h1>
              <p className="mt-5 text-ink/80 leading-relaxed">{service.blurb}</p>
              <p className="mt-3 text-sm text-stone leading-relaxed">
                [Detailed description to be confirmed by the salon. Add what this
                service involves, techniques, and what guests can expect.]
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-[0.66rem] uppercase tracking-[0.18em] text-stone">Duration</p>
                  <p className="font-serif text-xl text-charcoal mt-1">— to confirm</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-[0.66rem] uppercase tracking-[0.18em] text-stone">From</p>
                  <p className="font-serif text-xl text-charcoal mt-1">₹ — to confirm</p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <LinkButton to="/book" variant="primary" size="md">Book Appointment</LinkButton>
                <AnchorButton
                  href={whatsappHref(`Hi EVLAS ELITE, I'd like to enquire about ${service.name}.`)}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                >
                  <Icon name="whatsapp" className="w-4 h-4" /> WhatsApp
                </AnchorButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-16 lg:py-24">
        <div className="rounded-2xl bg-blush/50 border border-border p-8 sm:p-10">
          <h2 className="font-serif text-2xl text-charcoal mb-6">What's included</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {included.map((it) => (
              <li key={it} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-rose text-ivory flex items-center justify-center shrink-0">
                  <Icon name="check" className="w-3 h-3" />
                </span>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="pb-8">
        <h2 className="font-serif text-3xl text-charcoal mb-8">Related services</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {related.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-champagne">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <span className="text-[0.66rem] uppercase tracking-[0.18em] text-rose">{s.category}</span>
                <h3 className="font-serif text-xl text-charcoal mt-1">{s.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand heading="Book your visit" />
    </>
  );
}
