import { useState, useEffect, useCallback } from "react";
import { GALLERY, GALLERY_CATS } from "../lib/business";
import { Icon } from "../components/ui";
import { CTABand, PageHero } from "../components/sections";

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = GALLERY.filter((g) => cat === "All" || g.cat === cat);

  const move = useCallback(
    (dir: number) => {
      setActive((cur) => {
        if (cur === null) return cur;
        return (cur + dir + filtered.length) % filtered.length;
      });
    },
    [filtered.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, move]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our work & our space"
        sub="A glimpse of EVLAS ELITE. Demo images shown here can be replaced with the salon's own photography."
      />

      <section className="px-5 sm:px-8 lg:px-12 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap gap-2 mb-10">
            {GALLERY_CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] transition-colors ${
                  cat === c ? "bg-charcoal text-ivory" : "bg-card border border-border text-ink hover:border-charcoal"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {filtered.map((g, i) => (
              <button
                key={g.src}
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-xl bg-champagne relative"
              >
                <img src={g.src} alt={g.alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/25 transition-colors flex items-end p-4">
                  <span className="text-[0.66rem] uppercase tracking-[0.18em] text-ivory opacity-0 group-hover:opacity-100 transition-opacity">
                    {g.cat}
                  </span>
                </span>
              </button>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-stone">
            Demo imagery. To be confirmed and replaced with EVLAS ELITE's own photos.
          </p>
        </div>
      </section>

      {active !== null && (
        <div className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center animate-fade-in" onClick={() => setActive(null)}>
          <button className="absolute top-5 right-5 text-ivory/80 hover:text-ivory p-2" onClick={() => setActive(null)} aria-label="Close">
            <Icon name="close" className="w-7 h-7" />
          </button>
          <button
            className="absolute left-3 sm:left-8 text-ivory/70 hover:text-ivory p-3"
            onClick={(e) => { e.stopPropagation(); move(-1); }}
            aria-label="Previous"
          >
            <Icon name="chevronL" className="w-8 h-8" />
          </button>
          <figure className="max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[active].src} alt={filtered[active].alt} className="max-w-[90vw] max-h-[78vh] object-contain rounded-lg" />
            <figcaption className="text-center text-ivory/70 text-sm mt-4">
              {filtered[active].alt} · {active + 1} / {filtered.length}
            </figcaption>
          </figure>
          <button
            className="absolute right-3 sm:right-8 text-ivory/70 hover:text-ivory p-3"
            onClick={(e) => { e.stopPropagation(); move(1); }}
            aria-label="Next"
          >
            <Icon name="chevronR" className="w-8 h-8" />
          </button>
        </div>
      )}

      <CTABand heading="Like what you see?" sub="Book your appointment and let us take care of the rest." />
    </>
  );
}
