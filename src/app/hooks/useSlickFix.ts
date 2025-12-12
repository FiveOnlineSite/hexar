"use client";

import { useEffect } from "react";

export default function useSlickFix() {
  useEffect(() => {
    const trigger = () => {
      window.dispatchEvent(new Event("resize"));
    };

    // Fire multiple times because mobile browsers adjust viewport late
    setTimeout(trigger, 50);
    setTimeout(trigger, 200);
    setTimeout(trigger, 600);
    setTimeout(trigger, 1200);

    window.addEventListener("orientationchange", trigger);

    return () => window.removeEventListener("orientationchange", trigger);
  }, []);
}
