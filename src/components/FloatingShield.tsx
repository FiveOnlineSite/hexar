"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingShield() {
  useEffect(() => {
    const shield = document.getElementById("floating-shield");
    if (!shield) return;

    // Hide initially
    gsap.set(shield, { opacity: 0 });

    const sections = [...document.querySelectorAll("[data-shield-section]")];
    if (!sections.length) return;

    sections.forEach((section, index) => {
      const isLeft = index % 2 === 0;

      const x = isLeft ? "-20vw" : "20vw";
      const y = -5 + index * 6; // diagonal drift per section

      ScrollTrigger.create({
        trigger: section,
        start: "top 30%", // shield appears ONLY when About enters
        end: "top 40%",
        onEnter: () => {
          gsap.to(shield, {
            opacity: 0.35,
            x,
            y: `${y}vh`,
            duration: 1.2,
            ease: "power3.out",
          });
        },
        onEnterBack: () => {
          gsap.to(shield, {
            opacity: 0.35,
            x,
            y: `${y}vh`,
            duration: 1.2,
            ease: "power3.out",
          });
        }
      });
    });

    // HIDE SHIELD BEFORE ABOUT (scrolling up)
    ScrollTrigger.create({
      trigger: "#section-1",
      start: "top 30%",
      onLeaveBack: () => gsap.to(shield, { opacity: 0 }),
    });

    // HIDE SHIELD BEFORE FOOTER
    ScrollTrigger.create({
      trigger: "footer",
      start: "top bottom",
      onEnter: () => gsap.to(shield, { opacity: 0 }),
    });

    ScrollTrigger.refresh();
  }, []);

  return null;
}
