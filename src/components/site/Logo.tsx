import logo from "@/assets/logo-diya.png";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="Karthikeya Spice Kitchen logo"
        width={size}
        height={size}
        className="drop-shadow-[0_0_12px_oklch(0.78_0.13_85_/_0.6)]"
      />
      <div className="leading-tight">
        <div className="font-serif text-lg sm:text-xl text-gradient-gold font-semibold tracking-wide">
          Karthikeya
        </div>
        <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-cream/70">
          Spice Kitchen
        </div>
      </div>
    </div>
  );
}
