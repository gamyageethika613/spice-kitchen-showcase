import { useEffect, useState } from "react";

const OPEN_MINUTES = 11 * 60;
const CLOSE_MINUTES = 23 * 60;

function getLondonMinutes(now = new Date()) {
  const londonTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(now);

  const [hour, minute] = londonTime.split(":").map(Number);
  return hour * 60 + minute;
}

export function getLondonTimeStatus(now = new Date()) {
  const currentMinutes = getLondonMinutes(now);
  const isOpen = currentMinutes >= OPEN_MINUTES && currentMinutes < CLOSE_MINUTES;
  return isOpen ? "Open � Closes 11 PM" : "Closed � Opens 11 AM";
}

export function useLondonTimeStatus() {
  const [status, setStatus] = useState(() => getLondonTimeStatus());

  useEffect(() => {
    const id = window.setInterval(() => {
      setStatus(getLondonTimeStatus());
    }, 60_000);

    return () => window.clearInterval(id);
  }, []);

  return status;
}
