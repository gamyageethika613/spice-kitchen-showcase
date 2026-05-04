import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, X, Trash2, Phone, Navigation, Info, Plus, Minus } from "lucide-react";
import { usePlate } from "./PlateContext";
import { RESTAURANT } from "@/data/menu";

export function MyPlateButton() {
  const { count, setOpen } = usePlate();
  return (
    <motion.button
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.5 }}
      onClick={() => setOpen(true)}
      className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold animate-glow hover:scale-105 transition"
      aria-label="Open My Plate"
    >
      <UtensilsCrossed size={18} />
      <span className="hidden sm:inline text-sm uppercase tracking-wider">My Plate</span>
      <span className="ml-1 inline-flex items-center justify-center min-w-6 h-6 px-1.5 rounded-full bg-background/30 text-xs font-semibold">
        {items.length}
      </span>
    </motion.button>
  );
}

export function MyPlateDrawer() {
  const { items, open, setOpen, remove, clear, total } = usePlate();
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] bg-card border-l border-gold/30 flex flex-col shadow-deep"
          >
            <header className="flex items-center justify-between p-5 border-b border-gold/20">
              <div>
                <h3 className="font-serif text-2xl text-gradient-gold">My Plate</h3>
                <p className="text-xs text-cream/50 uppercase tracking-[0.2em]">Your favourites</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-cream/70 hover:text-gold p-1" aria-label="Close">
                <X size={22} />
              </button>
            </header>

            <div className="flex items-start gap-3 m-5 p-4 rounded-lg border border-gold/30 bg-gold/5">
              <Info size={18} className="text-gold shrink-0 mt-0.5" />
              <p className="text-xs text-cream/70 leading-relaxed">
                My Plate is only a favourites shortlist to help you remember dishes.
                Please order at the counter or call the restaurant.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-4">
              {items.length === 0 ? (
                <div className="text-center py-16 text-cream/50">
                  <UtensilsCrossed size={40} className="mx-auto text-gold/40 mb-4" />
                  <p className="font-serif text-lg text-cream/70">Your plate is empty</p>
                  <p className="text-xs mt-2">Browse the menu and tap “My Plate” on dishes you love.</p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {items.map((it) => (
                    <motion.li
                      key={it.id}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                      className="flex items-center justify-between gap-3 p-3 rounded-lg border border-gold/15 bg-background/40"
                    >
                      <div className="min-w-0">
                        <p className="font-serif text-cream truncate">{it.name}</p>
                        <p className="text-xs text-gold">£{it.price.toFixed(2)}</p>
                      </div>
                      <button onClick={() => remove(it.id)} className="text-cream/50 hover:text-destructive p-1.5 rounded" aria-label="Remove">
                        <Trash2 size={16} />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-5 py-3 border-t border-gold/20 flex items-center justify-between">
                <span className="text-sm text-cream/70">Estimated total</span>
                <span className="font-serif text-xl text-gold">£{total.toFixed(2)}</span>
              </div>
            )}

            <footer className="p-5 border-t border-gold/20 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <a href={RESTAURANT.phoneLink}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium hover:scale-[1.02] transition">
                  <Phone size={14} /> Call
                </a>
                <a href={RESTAURANT.mapsUrl} target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-gold/60 text-gold text-sm hover:bg-gold/10 transition">
                  <Navigation size={14} /> Directions
                </a>
              </div>
              {items.length > 0 && (
                <button onClick={clear}
                  className="w-full text-xs uppercase tracking-[0.2em] text-cream/50 hover:text-destructive transition py-2">
                  Clear plate
                </button>
              )}
            </footer>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
