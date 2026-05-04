import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { MenuItem } from "@/data/menu";

export type PlateLine = MenuItem & { qty: number };

type PlateCtx = {
  items: PlateLine[];
  add: (item: MenuItem) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  has: (id: string) => boolean;
  qtyOf: (id: string) => number;
  open: boolean;
  setOpen: (v: boolean) => void;
  total: number;
  count: number;
};

const Ctx = createContext<PlateCtx | null>(null);

export function PlateProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<PlateLine[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<PlateCtx>(
    () => ({
      items,
      open,
      setOpen,
      add: (item) =>
        setItems((p) => {
          const found = p.find((i) => i.id === item.id);
          if (found) return p.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
          return [...p, { ...item, qty: 1 }];
        }),
      inc: (id) => setItems((p) => p.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))),
      dec: (id) =>
        setItems((p) =>
          p.flatMap((i) => (i.id === id ? (i.qty <= 1 ? [] : [{ ...i, qty: i.qty - 1 }]) : [i])),
        ),
      remove: (id) => setItems((p) => p.filter((i) => i.id !== id)),
      clear: () => setItems([]),
      has: (id) => items.some((i) => i.id === id),
      qtyOf: (id) => items.find((i) => i.id === id)?.qty ?? 0,
      total: items.reduce((s, i) => s + i.price * i.qty, 0),
      count: items.reduce((s, i) => s + i.qty, 0),
    }),
    [items, open],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function usePlate() {
  const c = useContext(Ctx);
  if (!c) throw new Error("usePlate outside provider");
  return c;
}
