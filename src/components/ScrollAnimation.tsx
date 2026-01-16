"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();

    /* ----------------------------------
       DESKTOP (GSAP + ScrollTrigger)
    ---------------------------------- */
    mm.add("(min-width: 769px)", () => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".reveal-stagger").forEach((container) => {
        const items = Array.from(container.children) as HTMLElement[];
        if (!items.length) return;

        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    /* ----------------------------------
       MOBILE (IntersectionObserver)
    ---------------------------------- */
    mm.add("(max-width: 768px)", () => {
      const elements = document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-stagger > *"
      );

      elements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLElement;

            if (entry.isIntersecting) {
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              });
            } else {
              gsap.to(el, {
                opacity: 0,
                y: 24,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });
        },
        {
          threshold: 0.25,
        }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    });

    return () => mm.revert();
  }, [pathname]);

  return null;
}
