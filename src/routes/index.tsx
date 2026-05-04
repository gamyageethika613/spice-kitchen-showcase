import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { MenuSection } from "@/components/site/MenuSection";
import { GallerySection } from "@/components/site/GallerySection";
import { LocationSection } from "@/components/site/LocationSection";
import { Footer } from "@/components/site/Footer";
import { PlateProvider } from "@/components/site/PlateContext";
import { MyPlateButton, MyPlateDrawer } from "@/components/site/MyPlate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karthikeya Spice Kitchen — South Indian Restaurant in Luton" },
      { name: "description", content: "Authentic South Indian food & Indian street food in Luton. View our menu of biryanis, curries & starters. 8 Gordon Street, Luton LU1 2QP. Call 01582 750184." },
      { property: "og:title", content: "Karthikeya Spice Kitchen — Luton" },
      { property: "og:description", content: "Bold Spices. Real Flavours. Made Fresh. Served with Love." },
      { property: "og:type", content: "restaurant" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PlateProvider>
      <div className="bg-background text-foreground min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <MenuSection />
          <GallerySection />
          <LocationSection />
        </main>
        <Footer />
        <MyPlateButton />
        <MyPlateDrawer />
      </div>
    </PlateProvider>
  );
}
