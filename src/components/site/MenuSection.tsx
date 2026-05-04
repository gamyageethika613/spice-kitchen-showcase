import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Plus, Check } from "lucide-react";
import { MENU, type MenuItem } from "@/data/menu";
import { usePlate } from "./PlateContext";

function VegBadge({ veg }: { veg: boolean }) {
  return (
    <span className={`inline-flex items-center justify-center w-4 h-4 border-[1.5px] ${veg ? "border-emerald-500" : "border-red-600"}`} aria-label={veg ? "Veg" : "Non-veg"}>
      <span className={`w-1.5 h-1.5 rounded-full ${veg ? "bg-emerald-500" : "bg-red-600"}`} />
    </span>
  );
}

function SpiceMeter({ level = 0 }: { level?: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: 3 }).map((_, i) => (
        <Flame key={i} size={11} className={i < level ? "text-saffron fill-saffron" : "text-gold/20"} />
      ))}
    </span>
  );
}

function DishRow({ item }: { item: MenuItem }) {
  const { add, has } = usePlate();
  const added = has(item.id);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4 }}
      className="group py-4 border-b border-dashed border-gold/15 last:border-0"
    >
      <div className="flex items-baseline gap-3">
        <VegBadge veg={item.veg} />
        <h4 className="font-serif text-lg sm:text-xl text-cream group-hover:text-gold transition-colors">{item.name}</h4>
        <span className="flex-1 border-b border-dotted border-gold/25 translate-y-[-4px]" />
        <span className="font-serif text-lg text-gold whitespace-nowrap">£{item.price.toFixed(2)}</span>
      </div>
      <div className="flex items-start justify-between gap-4 mt-1.5 pl-7">
        <p className="text-sm text-cream/60 italic flex-1">{item.desc}</p>
        <div className="flex items-center gap-3 shrink-0">
          <SpiceMeter level={item.spice} />
          <button
            onClick={() => add(item)}
            disabled={added}
            className={`text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border transition flex items-center gap-1 ${
              added
                ? "border-emerald-500/50 text-emerald-400 cursor-default"
                : "border-gold/40 text-gold/80 hover:bg-gold/10 hover:text-gold"
            }`}
          >
            {added ? <><Check size={11} /> Saved</> : <><Plus size={11} /> My Plate</>}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(MENU[0].id);
  const cat = MENU.find((c) => c.id === active)!;
  return (
    <section id="menu" className="relative py-24 sm:py-32 px-6 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Our Menu</p>
          <h2 className="font-serif text-4xl sm:text-6xl text-gradient-gold mb-4">A Feast for the Senses</h2>
          <div className="gold-divider w-40 mx-auto" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
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
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="ornate-border glass p-6 sm:p-12 shadow-deep"
          >
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl sm:text-4xl text-gradient-gold">{cat.title}</h3>
              {cat.subtitle && <p className="text-sm italic text-cream/60 mt-2">{cat.subtitle}</p>}
              <div className="gold-divider w-24 mx-auto mt-4" />
            </div>
            <div>
              {cat.items.map((it) => <DishRow key={it.id} item={it} />)}
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-xs text-cream/40 mt-8 italic">
          Prices in GBP. Please inform our team of any allergies — many dishes can be adjusted to your spice preference.
        </p>
      </div>
    </section>
  );
}
