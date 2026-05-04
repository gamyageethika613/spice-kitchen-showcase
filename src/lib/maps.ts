export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Karthikeya%20Spice%20Kitchen%208%20Gordon%20Street%20Luton%20LU1%202QP";

export const openMaps = () => {
  if (typeof window !== "undefined") {
    window.open(MAPS_URL, "_blank", "noopener,noreferrer");
  }
};
