"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BracketConnector from "../BracketConnector";

gsap.registerPlugin(ScrollTrigger);

type AboutProps = {
  id: string;
  [key: string]: any;
};

export default function About({ id, ...rest }: AboutProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Background image wrapper (animated element)
  const bgRef = useRef<HTMLDivElement | null>(null);

  // SVG path refs
  const mainPath = useRef<SVGPathElement | null>(null);
  const leftPath = useRef<SVGPathElement | null>(null);
  const rightPath = useRef<SVGPathElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // -----------------------------------------------------
      // 🎨 BACKGROUND IMAGE — Replay Animation Every Visit
      // -----------------------------------------------------
      gsap.set(bgRef.current, { opacity: 0, x: 150 });

      const animateBG = () => {
        gsap.to(bgRef.current, {
          opacity: 1,
          x: 0,
          duration: 1.3,
          ease: "power3.out",
        });
      };

      const resetBG = () => {
        gsap.set(bgRef.current, { opacity: 0, x: 150 });
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          resetBG();
          animateBG();
        },
        onEnterBack: () => {
          resetBG();
          animateBG();
        },
        onLeaveBack: () => resetBG(),
      });

      // -----------------------------------------------------
      // ✏️ SVG CONNECTOR PATH ANIMATIONS (replay each visit)
      // -----------------------------------------------------
      const paths = [mainPath.current, leftPath.current, rightPath.current];

      const setInitialPaths = () => {
        paths.forEach((p) => {
          if (!p) return;
          const len = p.getTotalLength();
          gsap.set(p, {
            strokeDasharray: len,
            strokeDashoffset: len,
          });
        });
      };

      setInitialPaths();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
          onEnter: () => {
            setInitialPaths();
            tl.restart();
          },
          onEnterBack: () => {
            setInitialPaths();
            tl.restart();
          },
          onLeaveBack: () => setInitialPaths(),
        },
      });

      tl.to(mainPath.current, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.out",
      }).to(
        [leftPath.current, rightPath.current],
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section {...rest} id={id} ref={sectionRef} className="about-section h-full">
      <div className="relative w-full h-full">

        {/* 🎨 BACKGROUND IMAGE (ONLY THIS IS ANIMATED) */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-right bg-no-repeat bg-contain pointer-events-none"
          style={{ backgroundImage: "url('/images/about-bg.png')" }}
        ></div>

        {/* 📄 CONTENT (STATIC, NOT ANIMATED) */}
        <div className="relative lg:p-16 md:p-16 p-8 z-[2]">
          <h2 className="lg:text-[56px] md:text-[40px] text-[36px] font-semibold leading-[40px]">
            About Hexar Family
          </h2>

          <div className="lg:w-[40%] w-full mb-2 backdrop-blur-md">
            <p className="pt-4 pb-2 text-[15px] font-light leading-tight">
              Welcome to Hexar Studios — the unified force created through the strategic integration of Head Hoppers Studios and Ares Visual Effects Studio.
            </p>
            <p className="pt-4 pb-2 text-[15px] font-light leading-tight">
              We bring together exceptional creative talent, advanced production pipelines, and world-class IT infrastructure to deliver stunning visuals.
            </p>
            <p className="pt-4 pb-2 text-[15px] font-light leading-tight">
              From games to films to immersive experiences — we create impact.
            </p>
          </div>

          <div className="relative xl:w-[40%] lg:w-[40%] w-full py-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <img
                src="/images/icons/hexar-logo1.png"
                alt="hexar-logo"
                className="lg:h-[126px] lg:w-[200px] md:h-[100px] md:w-[150px] h-[60px] w-[80px]"
              />
              <p className="text-[10px] font-light text-center">The Parent Organisation</p>
            </div>

            <div className="lg:pt-[65px] md:pt-[35px] pt-0">
              <BracketConnector refs={{ main: mainPath, left: leftPath, right: rightPath }} />
            </div>

            <div className="flex justify-evenly absolute bottom-0 w-full">
              <div className="flex flex-col items-center">
                <img
                  src="/images/icons/head-hoppers-logo.png"
                  className="lg:h-[53px] lg:w-[137px] md:h-[40px] md:w-[100px] h-[30px] w-[70px]"
                />
                <p className="text-[10px] font-light pt-2">Character / Hair Specialist</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="/images/icons/ares-logo.png"
                  className="lg:h-[37px] lg:w-[137px] md:h-[30px] md:w-[100px] h-[25px] w-[80px]"
                />
                <p className="text-[10px] font-light pt-6">Concept / VFX / Technical Art / Co-dev</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
