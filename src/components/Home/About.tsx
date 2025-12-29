"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BracketConnector from "../BracketConnector";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Background refs (2 separate)
  const bgDesktopRef = useRef<HTMLDivElement | null>(null);
  const bgMobileRef = useRef<HTMLImageElement | null>(null);

  // SVG path refs
  const mainPath = useRef<SVGPathElement | null>(null);
  const leftPath = useRef<SVGPathElement | null>(null);
  const rightPath = useRef<SVGPathElement | null>(null);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const isDesktop = window.innerWidth >= 1024;
    const bgElement = isDesktop ? bgDesktopRef.current : bgMobileRef.current;

    if (!bgElement) return;

    // Initial state
    gsap.set(bgElement, {
      opacity: 0,
      x: 120,
      willChange: "transform, opacity",
    });

    // Smooth reversible animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: 1,              // smooth + reversible
        invalidateOnRefresh: true,
      },
    });

    tl.to(bgElement, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section ref={sectionRef} className="about-section inline-block w-full border-white border-b">
      <div className="relative w-full inline-block">

        {/* Desktop Background */}
        <div
          ref={bgDesktopRef}
          className="absolute inset-0 bg-right bg-no-repeat bg-contain pointer-events-none xl:block lg:block hidden"
          style={{ backgroundImage: "url('/images/about-bg.png')" }}
        ></div>

        {/* Mobile Background IMG */}
        
        {/* Content */}
        <div className="relative z-[2]">
          <h2 className="lg:text-[56px] md:text-[40px] text-[36px] font-semibold leading-[40px] lg:px-16 lg:pt-16 lg:pb-8 md:px-16 md:pt-16 pb-4 pt-8 px-8">
            About Hexar Family
          </h2>
<img
          ref={bgMobileRef}
          src="/images/about-bg.png"
          alt="bg"
         className="relative top-0 right-0 w-full h-full object-contain xl:hidden lg:hidden block pointer-events-none"
 />

          <div className="lg:w-[40%] w-full mb-2 backdrop-blur-md lg:px-16 lg:pt-16 lg:pb-8 md:px-16 md:pt-16 pb-4 pt-8 px-8">
            <p className="pt-4 pb-2 3xl:text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px] text-[15px] font-light leading-tight">
              Welcome to Hexar Studios — the unified force created through the strategic integration of Head Hoppers Studios and Ares Visual Effects Studio.
            </p>
            <p className="pt-4 pb-2 3xl:text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px] text-[15px] font-light leading-tight">
              We bring together exceptional creative talent, advanced production pipelines, and world-class IT infrastructure to deliver stunning visuals.
            </p>
            <p className="pt-4 pb-2 3xl:text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px] text-[15px] font-light leading-tight">
              From games to films to immersive experiences — we create impact.
            </p>
          </div>

          <div className="relative xl:w-[40%] lg:w-[40%] w-full
                pb-16 pt-16">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <img
                src="/images/icons/hexar-logo1.png"
                alt="hexar-logo"
                className="lg:h-[126px] lg:w-[200px] md:h-[100px] md:w-[150px] h-[60px] w-[80px]"
              />
              <p className="text-[10px] font-light text-center">The Parent Organisation</p>
            </div>

            <div className="lg:pt-[65px] md:pt-[35px] pt-0 flex w-full justify-center lg:pb-0 pb-4">
              <BracketConnector refs={{ main: mainPath, left: leftPath, right: rightPath }} />
            </div>

            <div className="flex lg:justify-between md:justify-evenly justify-between w-full lg:px-8 md:px-8 px-2">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/icons/head-hoppers-logo.png"
                  className="lg:h-[53px] lg:w-[137px] md:h-[40px] md:w-[100px] h-[30px] w-[70px]"
                />
                <p className="text-[10px] font-light pt-2 text-center">
                  Character / Hair Specialist
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/icons/ares-logo.png"
                  className="lg:h-[37px] lg:w-[137px] md:h-[30px] md:w-[100px] h-[25px] w-[80px]"
                />
                <p className="text-[10px] font-light lg:pt-6 pt-3 text-center">
                  Concept / VFX / Technical Art / Co-dev
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
