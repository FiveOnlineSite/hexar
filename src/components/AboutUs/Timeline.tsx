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
        const STACK_LEFT = -5;
        const PEEK_RIGHT = 100;
        const SCALE_SIDE = 0.95;

        gsap.set(cards, {
          xPercent: (i) => (i === 0 ? 0 : i === 1 ? PEEK_RIGHT : 150),
          scale: (i) => (i === 0 ? 1 : SCALE_SIDE),
          zIndex: (i) => i,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${(totalCards - 1) * 100}%`,
            pin: true,
            scrub: true,
            snap: {
              snapTo: 1 / (totalCards - 1),
              duration: 0.2,
              ease: "power1.inOut",
            },
          },
        });

        cards.forEach((card, i) => {
          if (i === 0) return;

          tl.to(card, { xPercent: 0, scale: 1 }, i);
          tl.to(cards.slice(0, i), {
            xPercent: (index) => (i - index) * STACK_LEFT,
            scale: SCALE_SIDE,
          }, i);

          if (i < totalCards - 1) {
            tl.fromTo(
              cards[i + 1],
              { xPercent: 150, scale: SCALE_SIDE },
              { xPercent: PEEK_RIGHT, scale: SCALE_SIDE },
              i
            );
          }
        });
      },

      /* ================= MOBILE / TABLET ================= */
      "(max-width: 1023px)": () => {
        const STACK_LEFT_PX = -16;   // tighter for small screens
        const PEEK_RIGHT_PX = 40;
        const SCALE_SIDE = 0.96;
        const SCROLL_PX = 300;

        gsap.set(cards, {
          x: (i) => (i === 0 ? 0 : i === 1 ? PEEK_RIGHT_PX : 300),
          scale: (i) => (i === 0 ? 1 : SCALE_SIDE),
          zIndex: (i) => i,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${(totalCards - 1) * SCROLL_PX}`,
            scrub: true,
            pin: false, // 👈 critical
          },
        });

        cards.forEach((card, i) => {
          if (i === 0) return;

          tl.to(card, { x: 0, scale: 1 }, i);
          tl.to(
            cards.slice(0, i),
            {
              x: (index) => (i - index) * STACK_LEFT_PX,
              scale: SCALE_SIDE,
            },
            i
          );
        });
      },
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

// "use client";

// import { useRef, useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Timeline() {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const trackRef = useRef<HTMLDivElement | null>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const track = trackRef.current;
//     if (!section || !track) return;

//     const ctx = gsap.context(() => {
//       const cards = Array.from(track.children) as HTMLDivElement[];
//       const totalCards = cards.length;

//       /* ================= CONFIG ================= */
//       const PEEK_X = 120;          // Right-side peek
//       const STACK_GAP = 36;        // Left stacked spacing
//       const SCALE_SIDE = 0.94;     // Scale for stacked cards
//       const SCROLL_PER_CARD = 350; // Scroll distance per card
//       /* ========================================== */

//       // Initial layout
//       cards.forEach((card, i) => {
//         gsap.set(card, {
//           x: i === 0 ? 0 : i === 1 ? PEEK_X : 700,
//           scale: i === 0 ? 1 : SCALE_SIDE,
//           zIndex: 1,
//           willChange: "transform",
//         });
//       });

//       // Timeline
//       const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: `+=${(totalCards - 1) * SCROLL_PER_CARD}`,
//             pin: true,
//             pinSpacing: true,
//             scrub: 0.6,
//             anticipatePin: 1,
//         },
//         });


//       // Build animation steps
//       cards.forEach((card, i) => {
//         if (i === 0) return;

//         // Bring active card to center
//         tl.to(card, {
//             x: (index) => -(i - index) * STACK_GAP,
//             scale: 1,
//             zIndex: totalCards + i, // 👈 KEY FIX
//             duration: 1,
//             ease: "none",
//         });

//         // Stack previous cards to the left
//         tl.to(
//             cards.slice(0, i),
//             {
//             x: (index) => -(i - index) * STACK_GAP,
//             scale: SCALE_SIDE,
//             zIndex: (index) => totalCards - index, // 👈 keep them behind
//             duration: 1,
//             ease: "none",
//             },
//             "<"
//         );
//         });

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//     ref={sectionRef}
//     className="bg-[#0A0A0A] min-h-screen w-full flex items-center justify-center overflow-hidden"
//     >
//       <div
//         ref={trackRef}
//         className="relative w-[75vw] h-[450px]"
//       >
//         <Card
//           title="1963 – The Beginning"
//           text1="The merger of two creative houses laid the foundation of Hexar Studios."
//           text2="A unified vision for 3D-art & VFX excellence."
//         />

//         <Card
//           title="Global Expansion"
//           text1="Hexar Studios expanded its global footprint."
//           text2="Scaling pipelines and talent worldwide."
//         />

//         <Card
//           title="Innovation Era"
//           text1="Breakthrough technologies reshaped workflows."
//           text2="Industry-leading visual experiences."
//         />

//         <Card
//           title="Future Ready"
//           text1="Digital-first, AI-enabled, and scalable."
//           text2="Prepared for the next decade of storytelling."
//         />
//       </div>
//     </section>
//   );
// }

// /* ================= CARD ================= */

// function Card({
//   title,
//   text1,
//   text2,
// }: {
//   title: string;
//   text1: string;
//   text2: string;
// }) {
//   return (
//     <div className="absolute inset-0 bg-[#0A0A0A] border border-white rounded-2xl p-10 flex justify-between items-center shadow-[0px_16px_20px_0px_#D500001A]">
//       <div className="w-[60%]">
//         <h2 className="text-white text-4xl font-bold mb-4">
//           {title}
//         </h2>
//         <p className="text-white/70 text-lg mb-2">{text1}</p>
//         <p className="text-white/70 text-lg">{text2}</p>
//       </div>

//       <div className="w-[30%]">
//         <img
//           src="/images/timeline.png"
//           alt="timeline"
//           className="w-full h-[380px] object-contain"
//         />
//       </div>
//     </div>
//   );
// }
