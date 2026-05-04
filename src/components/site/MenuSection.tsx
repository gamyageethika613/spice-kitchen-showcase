import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Leaf, Drumstick, Plus, Minus, Sparkles } from "lucide-react";
import { MENU, type MenuItem } from "@/data/menu";
import { usePlate } from "./PlateContext";
import curriesImg from "@/assets/gallery-curries.jpg";
import biryaniImg from "@/assets/gallery-biryani.jpg";
import startersImg from "@/assets/gallery-starters.jpg";
import heroImg from "@/assets/hero-spices.jpg";

type VisualItem = MenuItem & { category: string };

function SpiceMeter({ level = 0 }: { level?: number }) {
  return (
    <span className="inline-flex items-center gap-1" aria-label={`Spice level ${level} out of 3`}>
      {Array.from({ length: 3 }).map((_, i) => (
        <Flame
          key={i}
          size={12}
          className={i < level ? "text-saffron fill-saffron" : "text-gold/20"}
        />
      ))}
    </span>
  );
}

function DishCard({ item }: { item: VisualItem }) {
  const { add, inc, dec, qtyOf } = usePlate();
  const qty = qtyOf(item.id);
  const [imageSrc, setImageSrc] = useState(item.image);
  const [fallbackStep, setFallbackStep] = useState(0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.35 }}
      className="group h-full overflow-hidden rounded-xl border border-gold/35 glass hover:border-gold/70 hover:shadow-gold transition-all duration-300 flex flex-col"
    >
      <div className="relative h-28 overflow-hidden rounded-t-xl">
        <img
          src={imageSrc}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 20vw"
          onError={() => {
            if (fallbackStep === 0) {
              setImageSrc(
                `https://loremflickr.com/900/600/${encodeURIComponent(item.name)},indian-food?lock=${item.id}-fallback`,
              );
              setFallbackStep(1);
              return;
            }
            const localFallbacks = [curriesImg, biryaniImg, startersImg, heroImg];
            const hash = item.id.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
            setImageSrc(localFallbacks[hash % localFallbacks.length]);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent group-hover:shadow-[inset_0_0_40px_rgba(245,166,35,0.45)] transition-all duration-300" />
      </div>

      <div className="p-3.5 flex-1 flex flex-col">
        <div className="mb-2.5 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.18em] text-gold/80 truncate">
              {item.category}
            </p>
            <h4 className="font-serif text-lg text-cream leading-tight line-clamp-2 min-h-11">
              {item.name}
            </h4>
          </div>
          <span className="font-serif text-base text-gold whitespace-nowrap">
            GBP {item.price.toFixed(2)}
          </span>
        </div>

        <p className="text-xs text-cream/75 leading-relaxed line-clamp-2 min-h-9">{item.desc}</p>

        <div className="mt-3 flex items-center justify-between gap-2 text-[11px] text-cream/80">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 px-2 py-0.5">
            {item.veg ? (
              <Leaf size={11} className="text-emerald-400" />
            ) : (
              <Drumstick size={11} className="text-red-400" />
            )}
            <span>{item.veg ? "Veg" : "Non-veg"}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 px-2 py-0.5">
            <Sparkles size={11} className="text-gold" />
            <SpiceMeter level={item.spice} />
          </div>
        </div>

        <div className="mt-auto pt-3">
          {qty === 0 ? (
            <button
              onClick={() => add(item)}
              className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-gold px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:brightness-110"
            >
              <Plus size={14} /> Add to My Plate
            </button>
          ) : (
            <div className="flex items-center justify-between rounded-full border border-gold/50 bg-gold/10 px-2 py-0.5">
              <button
                onClick={() => dec(item.id)}
                className="h-7 w-7 rounded-full text-gold hover:bg-gold/20 inline-flex items-center justify-center"
              >
                <Minus size={13} />
              </button>
              <span className="font-serif text-base text-gold">{qty}</span>
              <button
                onClick={() => inc(item.id)}
                className="h-7 w-7 rounded-full text-gold hover:bg-gold/20 inline-flex items-center justify-center"
              >
                <Plus size={13} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const cat = MENU.find((c) => c.id === active) ?? MENU[0];

  const items = useMemo<VisualItem[]>(
    () => cat.items.map((it) => ({ ...it, category: cat.title })),
    [cat],
  );

  return (
    <section
      id="menu"
      className="scroll-mt-24 relative py-20 sm:py-24 px-5 sm:px-6 bg-gradient-to-b from-background via-background/95 to-background"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Menu</p>
          <h2 className="font-serif text-4xl sm:text-6xl text-gradient-gold mb-4">
            Curated Signature Dishes
          </h2>
          <div className="gold-divider w-40 mx-auto" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {MENU.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm uppercase tracking-[0.15em] border transition ${
                active === c.id
                  ? "bg-gradient-gold text-primary-foreground border-transparent shadow-gold"
                  : "border-gold/30 text-cream/70 hover:text-gold hover:border-gold/60"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl sm:text-4xl text-gradient-gold">{cat.title}</h3>
              {cat.subtitle ? (
                <p className="text-sm italic text-cream/65 mt-2">{cat.subtitle}</p>
              ) : null}
              <div className="gold-divider w-24 mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 items-stretch">
              {items.map((it) => (
                <DishCard key={it.id} item={it} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-xs text-cream/50 mt-8 italic">
          Prices in GBP. Please inform our team of any allergies. Dishes can be adjusted to your
          spice preference.
        </p>
      </div>
    </section>
  );
}
