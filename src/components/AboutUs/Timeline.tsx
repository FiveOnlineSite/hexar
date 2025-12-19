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
      
      // ADJUST THESE FOR SPACING
      const STACK_LEFT = -5;    // Increased negative move to push stack further left
      const PEEK_RIGHT = 100;   // Moved further right (was 94) to create margin
      const SCALE_SIDE = 0.95;  // Scale down side cards to create visual gap

      // 1. Setup initial state
      gsap.set(cards, {
        // Card 0 is center, Card 1 is peeking, others hidden
        xPercent: (i) => (i === 0 ? 0 : i === 1 ? PEEK_RIGHT : 150),
        scale: (i) => (i === 0 ? 1 : SCALE_SIDE),
        zIndex: (i) => i,
        willChange: "transform",
      });

      // 2. Create Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${(totalCards - 1) * 100}%`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / (totalCards - 1),
            duration: 0.2,
            delay: 0,
            ease: "power1.inOut",
          },
        },
      });

      // 3. Build the Sequence
      cards.forEach((card, i) => {
        if (i === 0) return;

        // ANIMATION FOR CURRENT CARD (Coming to center)
        tl.to(card, {
          xPercent: 0,
          scale: 1,
          ease: "none",
        }, i);

        // ANIMATION FOR PREVIOUS CARDS (Moving to left stack)
        tl.to(cards.slice(0, i), {
          xPercent: (index) => (i - index) * STACK_LEFT,
          scale: SCALE_SIDE,
          ease: "none",
        }, i);

        // ANIMATION FOR NEXT CARD (Moving to right peek)
        if (i < totalCards - 1) {
          tl.fromTo(cards[i + 1], 
            { xPercent: 150, scale: SCALE_SIDE }, 
            { xPercent: PEEK_RIGHT, scale: SCALE_SIDE, ease: "none" }, 
            i
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0A0A0A] h-screen w-full flex items-center justify-center overflow-hidden">
      <div ref={trackRef} className="relative w-[75vw] h-[450px]">
        <Card title="1963- “The Beginning”" text1="The merger of two creative houses, Head Hoppers Studios and Ares Visual Effects Studio, laid the foundation of Hexar Studios. Combined legacy of creative talent, production pipelines and technical infrastructure." text2="Unified vision to deliver 3D-art & VFX solutions under one roof." />
        <Card title="1963- “The Beginning”" text1="Hexar Studios expanded globally..." text2="Scaling pipelines..." />
        <Card title="1963- “The Beginning”" text1="Breakthrough innovation..." text2="Industry-leading..." />
        <Card title="1963- “The Beginning”" text1="Digital transformation..." text2="Future-ready..." />
      </div>
    </section>
  );
}

function Card({ title, text1, text2 }: { title: string; text1: string; text2: string }) {
  return (
    <div className="absolute inset-0 bg-[#0A0A0A] border border-white rounded-2xl p-10 flex justify-between items-center shadow-[0px_16px_20px_0px_#D500001A]">
      <div className="w-[60%]">
        <h2 className="text-white text-4xl font-bold mb-4">{title}</h2>
        <p className="text-white/70 text-lg">{text1}</p>
        <p className="text-white/70 text-lg mb-2">{text2}</p>
      </div>
      <div className="w-[30%]">
         <img src="./images/timeline.png" alt="timeline" className="w-full h-[380px] object-contain" />
      </div>
    </div>
  );
}