import { useEffect, useState } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";

// Initialize scroll animations
export const initScrollAnimations = (): void => {
  sal({
    threshold: 0.1,
    once: true,
    root: null,
  });
};

// Text rotation animation
export const useTextRotation = <T>(
  items: T[],
  interval: number = 3000
): { visibleIndex: number } => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [items.length, interval]);

  return { visibleIndex };
};
