import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { MenuItem } from "@/data/menu";

type PlateCtx = {
  items: MenuItem[];
  add: (item: MenuItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  has: (id: string) => boolean;
  open: boolean;
  setOpen: (v: boolean) => void;
  total: number;
};

const Ctx = createContext<PlateCtx | null>(null);

export function PlateProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<PlateCtx>(() => ({
    items,
    open,
    setOpen,
    add: (item) => setItems((p) => (p.find((i) => i.id === item.id) ? p : [...p, item])),
    remove: (id) => setItems((p) => p.filter((i) => i.id !== id)),
    clear: () => setItems([]),
    has: (id) => items.some((i) => i.id === id),
    total: items.reduce((s, i) => s + i.price, 0),
  }), [items, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function usePlate() {
  const c = useContext(Ctx);
  if (!c) throw new Error("usePlate outside provider");
  return c;
}
