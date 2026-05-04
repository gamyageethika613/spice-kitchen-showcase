import { Logo } from "./Logo";
import { RESTAURANT } from "@/data/menu";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 py-14 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-cream/60 italic max-w-xs">
            Bold Spices. Real Flavours. Made Fresh. Served with Love.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            {["Home","Menu","About","Gallery","Location"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Visit</h4>
          <p className="text-sm text-cream/70">{RESTAURANT.addressLines.join(", ")}</p>
          <a href={RESTAURANT.phoneLink} className="block mt-2 text-sm text-cream/70 hover:text-gold transition">{RESTAURANT.phone}</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gold/10 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} {RESTAURANT.name} · Luton, UK
      </div>
    </footer>
  );
}
