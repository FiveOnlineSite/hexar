"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

 useLayoutEffect(() => {
  const section = sectionRef.current;
  const track = trackRef.current;
  if (!section || !track) return;

  const ctx = gsap.context(() => {
    const cards = Array.from(track.children) as HTMLDivElement[];
    const totalCards = cards.length;

    ScrollTrigger.matchMedia({

      /* ================= DESKTOP ================= */
      "(min-width: 1024px)": () => {
        const STEP = 1;
        const STACK_LEFT = -5;
        const PEEK_RIGHT = 100;
        const SCALE_SIDE = 0.95;
        const SCROLL_PER_CARD = 350;
        const STACK_OFFSET = 40;
        
        gsap.set(cards, {
          xPercent: (i) => (i === 0 ? 0 : i === 1 ? PEEK_RIGHT : 150),
          scale: (i) => (i === 0 ? 1 : SCALE_SIDE),
          zIndex: (i) => i,
        });

        const tl = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: `+=${totalCards * 300}`,
    pin: true,
    scrub: 0.1,
    snap: {
      snapTo: 1 / (totalCards - 1),
      duration: 0.25,
      ease: "power2.out",
    },
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});

      cards.forEach((card, i) => {
  if (i === 0) return;

  const t = i;

  // ACTIVE CARD
  tl.to(
    card,
    {
      xPercent: 0,
      scale: 1,
      zIndex: totalCards + i,
      ease: "none",
    },
    t
  );

  // STACK ALL PREVIOUS CARDS
  tl.to(
    cards.slice(0, i),
    {
      xPercent: (index) => -(i - index) * Math.abs(STACK_LEFT),
      scale: SCALE_SIDE,
      zIndex: (index) => index,
      ease: "none",
    },
    t
  );

  // NEXT CARD PEEK
  if (i < totalCards - 1) {
    tl.fromTo(
      cards[i + 1],
      { xPercent: 150, scale: SCALE_SIDE },
      { xPercent: PEEK_RIGHT, scale: SCALE_SIDE, ease: "none" },
      t
    );
  }
});

      },

      /* ================= MOBILE / TABLET ================= */
      "(max-width: 1023px)": () => {
        const STACK_LEFT = -16;   // tighter for small screens
        const PEEK_RIGHT = 40;
        const SCALE_SIDE = 0.96;
        const SCROLL_PX = 300;

        gsap.set(cards, {
        xPercent: (i) => (i === 0 ? 0 : i === 1 ? PEEK_RIGHT : 150),
        scale: (i) => (i === 0 ? 1 : SCALE_SIDE),
        zIndex: (i) => totalCards - i,
        willChange: "transform",
        });

        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse",
        },
        });

        cards.forEach((card, i) => {
          if (i === 0) return;

          tl.to(card, { x: 0, scale: 1 }, i);
          tl.to(cards.slice(0, i), {
            xPercent: (index) => -(i - index) * Math.abs(STACK_LEFT),
            scale: SCALE_SIDE,
            ease: "none",
            }, i);


        });

        gsap.defaults({
  ease: "none",
});
      },
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section ref={sectionRef} className="min-h-screen our-timeline-section h-screen bg-[#0A0A0A] w-full flex items-center justify-center overflow-hidden">
      <div ref={trackRef} className="relative w-[75vw] h-[450px]">
        <Card title="1" text1="The merger of two creative houses, Head Hoppers Studios and Ares Visual Effects Studio, laid the foundation of Hexar Studios. Combined legacy of creative talent, production pipelines and technical infrastructure." text2="Unified vision to deliver 3D-art & VFX solutions under one roof." />
        <Card title="2" text1="Hexar Studios expanded globally..." text2="Scaling pipelines..." />
        <Card title="3" text1="Breakthrough innovation..." text2="Industry-leading..." />
        <Card title="4" text1="Digital transformation..." text2="Future-ready..." />
      </div>
    </section>
  );
}

function Card({ title, text1, text2 }: { title: string; text1: string; text2: string }) {
  return (
         <div className="absolute inset-0 bg-[#0A0A0A] border border-white rounded-2xl flex p-10 justify-between items-center shadow-[0px_16px_20px_0px_#D500001A]">
      <div className="lg:w-[60%] w-full">
        <h2 className="text-white lg:text-[40px] md:text-[35px] text-[25px] font-bold mb-4">{title}</h2>
        <p className="text-white lg:text-[20px] md:text-[18px] text-[16px]">{text1}</p>
        <p className="text-white lg:text-[20px] md:text-[18px] text-[16px] mb-2">{text2}</p>
      </div>
      <div className="lg:w-[30%] w-full">
         <img src="./images/timeline.png" alt="timeline" className="w-full lg:h-[380px] md:h-[300px] h-[250px] object-contain" />
      </div>
    </div>
   
  );
}

