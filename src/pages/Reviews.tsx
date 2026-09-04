import { BUSINESS, REVIEWS, directionsHref } from "../lib/business";
import { AnchorButton, Icon, Section, StarRating } from "../components/ui";
import { CTABand, PageHero } from "../components/sections";

export default function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Loved by our guests"
        sub={`A ${BUSINESS.rating}-star rating across ${BUSINESS.reviewCount} Google reviews.`}
      />

      <Section className="pb-16">
        <div className="rounded-3xl bg-charcoal text-ivory px-8 py-12 sm:px-14 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <span className="font-serif text-6xl">{BUSINESS.rating}</span>
              <div>
                <StarRating value={BUSINESS.rating} size="w-5 h-5" />
                <p className="text-ivory/60 text-sm mt-1">{BUSINESS.reviewCount} Google Reviews</p>
              </div>
            </div>
          </div>
          <AnchorButton href={directionsHref} target="_blank" variant="outlineLight" size="md">
            View on Google <Icon name="arrow" className="w-4 h-4" />
          </AnchorButton>
        </div>
      </Section>

      <Section className="pb-20 lg:pb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border p-7 flex flex-col">
              <div className="flex items-center justify-between">
                <StarRating value={r.stars} />
                <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-70" aria-label="Google">
                  <path fill="#4285F4" d="M22 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.6a4.8 4.8 0 01-2 3.1v2.6h3.3c1.9-1.8 3.1-4.4 3.1-7.6z" />
                  <path fill="#34A853" d="M12 22c2.7 0 5-1 6.6-2.4l-3.3-2.6c-.9.6-2 1-3.3 1-2.6 0-4.7-1.7-5.5-4H3.1v2.6A10 10 0 0012 22z" />
                  <path fill="#FBBC05" d="M6.5 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 000 9.2z" />
                  <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 003.1 7.4L6.5 10c.8-2.3 2.9-4 5.5-4z" />
                </svg>
              </div>
              <p className="mt-4 text-ink/80 leading-relaxed text-sm flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-blush text-rose flex items-center justify-center font-serif">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm text-charcoal font-medium">{r.name}</p>
                  <p className="text-[0.7rem] text-stone uppercase tracking-[0.14em]">Verified · Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-stone">
          A selection of guest reviews. Connect the live Google feed to display all {BUSINESS.reviewCount}.
        </p>
      </Section>

      <CTABand heading="Join our happy guests" />
    </>
  );
}
