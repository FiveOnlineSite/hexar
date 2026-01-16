"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 🔥 Mobile viewport fix
ScrollTrigger.config({
  ignoreMobileResize: true,
});

export default function ScrollAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SIMPLE REVEAL
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",   // ✅ SAFE
              end: "top 50%",     // ✅ SAFE
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      // STAGGERED REVEAL
      gsap.utils.toArray<HTMLElement>(".reveal-stagger").forEach((container) => {
        if (!container.children.length) return;

        gsap.fromTo(
          container.children,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 90%",
              end: "top 55%",
              scrub: 0.6,
            },
          }
        );
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
