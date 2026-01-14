"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  const pathname = usePathname(); // 🔥 detect route change

  useEffect(() => {
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
            start: "top 100%",
            end: "top 10%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

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
            start: "top 85%",
            end: "top 35%",
            scrub: 0.6,
          },
        }
      );
    });

    // 🔥 VERY IMPORTANT
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]); // 👈 rerun on every route change

  return null;
}
