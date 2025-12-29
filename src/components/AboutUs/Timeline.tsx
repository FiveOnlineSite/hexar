"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

 useLayoutEffect(() => {
  const ctx = gsap.context(() => {

    const totalCards = 3;
const scrollPerCard = window.innerHeight * 0.9;

    gsap.set(".card1", { xPercent: 0, scale: 1, zIndex: 3 });
    gsap.set(".card2", { xPercent: 100, scale: 0.95, zIndex: 2, opacity: 0 });
    gsap.set(".card3", { xPercent: 120, scale: 0.9, zIndex: 1, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalCards * scrollPerCard}`,
        pin: true,
        pinSpacing:  true,
        scrub: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(".card2", {
      xPercent: 0,
      scale: 1,
      opacity: 1,
      zIndex: 3,
    })
      .to(
        ".card1",
        {
          xPercent: -12,
          scale: 0.92,
          zIndex: 2,
        },
        "<"
      )
      .to(".card3", {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        zIndex: 3,
      })
      .to(
        ".card2",
        {
          xPercent: -12,
          scale: 0.92,
          zIndex: 2,
        },
        "<"
      );
      
   ScrollTrigger.refresh();
  }, sectionRef);


  return () => ctx.revert(); // ✅ kills timeline + ScrollTrigger safely
}, []);

  return (
    <section ref={sectionRef} className="our-timeline-sectionbg-[#0A0A0A] w-full flex items-center justify-center overflow-visible py-16" style={{ height: "100vh" }} >
      
        <div className="relative w-[75vw] h-[450px] overflow-visible">
        <div className="card1 absolute inset-0 bg-[#0A0A0A] border border-white rounded-2xl flex p-10 justify-between items-center shadow-[0px_16px_20px_0px_#D500001A]">
      <div className="lg:w-[60%] w-full">
        <h2 className="text-white lg:text-[40px] md:text-[35px] text-[25px] font-bold mb-4">1</h2>
        <p className="text-white lg:text-[20px] md:text-[18px] text-[16px]">Hexar Studios expanded globally...</p>
        <p className="text-white lg:text-[20px] md:text-[18px] text-[16px] mb-2">Hexar Studios expanded globally...</p>
      </div>
      <div className="lg:w-[30%] w-full">
         <img src="./images/timeline.png" alt="timeline" className="w-full lg:h-[380px] md:h-[300px] h-[250px] object-contain" />
      </div>
    </div>

    <div className="card2 absolute inset-0 bg-[#0A0A0A] border border-white rounded-2xl flex p-10 justify-between items-center shadow-[0px_16px_20px_0px_#D500001A]">
      <div className="lg:w-[60%] w-full">
        <h2 className="text-white lg:text-[40px] md:text-[35px] text-[25px] font-bold mb-4">2</h2>
        <p className="text-white lg:text-[20px] md:text-[18px] text-[16px]">Hexar Studios expanded globally...</p>
        <p className="text-white lg:text-[20px] md:text-[18px] text-[16px] mb-2">Hexar Studios expanded globally...</p>
      </div>
      <div className="lg:w-[30%] w-full">
         <img src="./images/timeline.png" alt="timeline" className="w-full lg:h-[380px] md:h-[300px] h-[250px] object-contain" />
      </div>
    </div>

    <div className="card3 absolute inset-0 bg-[#0A0A0A] border border-white rounded-2xl flex p-10 justify-between items-center shadow-[0px_16px_20px_0px_#D500001A]">
      <div className="lg:w-[60%] w-full">
        <h2 className="text-white lg:text-[40px] md:text-[35px] text-[25px] font-bold mb-4">3</h2>
        <p className="text-white lg:text-[20px] md:text-[18px] text-[16px]">Hexar Studios expanded globally...</p>
        <p className="text-white lg:text-[20px] md:text-[18px] text-[16px] mb-2">Hexar Studios expanded globally...</p>
      </div>
      <div className="lg:w-[30%] w-full">
         <img src="./images/timeline.png" alt="timeline" className="w-full lg:h-[380px] md:h-[300px] h-[250px] object-contain" />
      </div>
    </div>
        </div>
      
    </section>
  );
}

