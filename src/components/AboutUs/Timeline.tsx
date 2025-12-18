"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const cards = Array.from(track.children) as HTMLDivElement[];

    let currentIndex = 0;
    let animating = false;

    const CARD_WIDTH = cards[0].getBoundingClientRect().width;
    const PEEK = 48;     // visible part of next card
    const OFFSET = 22;   // depth offset for stacked cards

    // 🔹 INITIAL STATE
    cards.forEach((card, i) => {
      gsap.set(card, {
        x: i === 0 ? 0 : CARD_WIDTH - PEEK,
        zIndex: cards.length - i,
      });
    });

    // 🔹 STACK NEXT CARD
    const stackNext = () => {
      if (animating || currentIndex >= cards.length - 1) return;
      animating = true;

      const next = currentIndex + 1;

      gsap.set(cards[next], {
        zIndex: 100 + next, // always on top
      });

      gsap.to(cards[next], {
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(cards.slice(0, next), {
        x: (i) => -i * OFFSET,
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => {
          currentIndex = next;
          animating = false;
        },
      });
    };

    // 🔹 UNSTACK CARD
    const unstack = () => {
      if (animating || currentIndex <= 0) return;
      animating = true;

      const current = currentIndex;

      gsap.to(cards[current], {
        x: CARD_WIDTH - PEEK,
        duration: 0.5,
        ease: "power3.inOut",
      });

      gsap.set(cards[current], {
        zIndex: cards.length - current,
      });

      gsap.to(cards.slice(0, current), {
        x: (i) => -i * OFFSET,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          currentIndex--;
          animating = false;
        },
      });
    };

    // 🔹 OBSERVER (handles stacking ONLY while pinned)
    const observer = Observer.create({
      type: "wheel,touch",
      wheelSpeed: -1,
      tolerance: 10,
      preventDefault: true,

      onUp: () => {
        if (!animating) stackNext();
      },

      onDown: () => {
        if (!animating) unstack();
      },
    });

    observer.disable();

    // 🔹 PIN SECTION (scroll is released automatically after)
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=300",
      pin: true,

      onEnter: () => observer.enable(),
      onEnterBack: () => observer.enable(),

      onLeave: () => observer.disable(),
      onLeaveBack: () => observer.disable(),
    });

    return () => {
      observer.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-16">
      <div className="h-screen bg-black flex items-center">
        <div
          ref={trackRef}
          className="relative px-16"
          style={{
            height: "420px",
            transform: "translateY(-60px) translateX(40px)",
          }}
        >
          <Card
            title="1963 – The Beginning"
            text="The merger of two creative houses laid the foundation of Hexar Studios."
          />

          <Card
            title="1975 – Expansion"
            text="Hexar Studios expanded globally and introduced new production technologies."
          />

          <Card
            title="1990 – Innovation Era"
            text="Breakthrough innovation in VFX pipelines and character design systems."
          />
        </div>
      </div>
    </section>
  );
}

// 🔹 CARD COMPONENT
function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="absolute top-0 left-0 min-w-[70vw] bg-[#0A0A0A] border border-white rounded-2xl p-10 flex justify-between items-center">
      <div className="w-[60%]">
        <h2 className="text-white text-[42px] font-bold mb-6">{title}</h2>
        <p className="text-white/80 text-[16px] leading-relaxed">{text}</p>
      </div>
      <img src="/images/timeline.png" className="h-[375px]" />
    </div>
  );
}
