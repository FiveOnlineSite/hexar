"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BracketConnector from "../BracketConnector";

gsap.registerPlugin(ScrollTrigger);

export default function About ({ id, ...rest }) {

  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const mainPath = useRef(null);
  const leftPath = useRef(null);
  const rightPath = useRef(null);

   useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const paths = [mainPath.current, leftPath.current, rightPath.current];

    const setInitial = () => {
      paths.forEach((p) => {
        const length = p.getTotalLength();
        gsap.set(p, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });
    };

    setInitial();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 50%",
        scrub: false,
        once: false,

        onEnter: () => {
          setInitial();
          tl.restart();
        },

        onLeaveBack: () => {
          setInitial();
        },
      },
    });

    tl.to(mainPath.current, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.out",
    })

      // LEFT + RIGHT start together
      .to(
        [leftPath.current, rightPath.current],
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.2" // overlap slightly
      );

  }, sectionRef);

  return () => ctx.revert();
}, []);


    return (
        <section {...rest} id={id} ref={sectionRef} className="about-section h-full">
            <div
  ref={imageRef}
  className="lg:p-16 md:p-16 p-8 xl:bg-[url('/images/about-bg.png')] lg:bg-[url('/images/about-bg.png')] bg-no-repeat w-full bg-right h-full bg-none bg-contain"
>
                <h2 className="lg:text-[56px] md:text-[40px] text-[36px] font-semibold xl:leading-tight lg:leading-tight md:leading-tight leading-[40px]">About Hexar Family</h2>
                <div className="lg:w-[40%] w-full mb-2 backdrop-blur-md">
                    <p className="pt-4 pb-2 text-[15px] font-light leading-tight">Welcome to Hexar Studios — the unified force created through the strategic integration of Head Hoppers Studios and Ares Visual Effects Studio.</p>
                    <p className="pt-4 pb-2 text-[15px] font-light leading-tight">We bring together exceptional creative talent, advanced production pipelines, and world-class IT infrastructure to deliver stunning 3D visuals for games, films, advertising, and immersive experience</p>
                    <p className="pt-4 pb-2 text-[15px] font-light leading-tight">We bring together exceptional creative talent, advanced production pipelines, and world-class IT infrastructure to deliver stunning 3D visuals for games, films, advertising, and immersive experience</p>
                </div>
                <div className="relative xl:w-[40%] lg:w-[40%] w-full py-20">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <img
                    src="/images/icons/hexar-logo1.png"
                    alt="hexar-logo"
                    className="lg:h-[126px] lg:w-[200px] md:h-[100px] md:w-[150px] h-[60px] w-[80px]"
                    />
                    <p className="text-center text-[10px] font-light">The Parent Organisation</p>
                </div>

                <div className="lg:pt-[65px] xl:pt-[65px] md:pt-[35px] pt-0">
                <BracketConnector refs={{ main: mainPath, left: leftPath, right: rightPath }} />
                    </div>

                <div className="flex xl:justify-between lg:justify-evenly md:justify-evenly justify-evenly absolute bottom-0 w-full px-0">

                    <div className="flex flex-col items-center">
                    <img
                        src="/images/icons/head-hoppers-logo.png"
                        alt="head-hopper-logo"
                        className="lg:h-[53px] lg:w-[137px] md:h-[40px] md:w-[100px] h-[30px] w-[70px]"
                    />
                    <p className="text-center text-[10px] font-light pt-2">Character / Hair Specialist</p>
                    </div>

                    <div className="flex flex-col items-center">
                    <img
                        src="/images/icons/ares-logo.png"
                        alt="ares-logo"
                        className="lg:h-[37px] lg:w-[137px] md:h-[30px] md:w-[100px] h-[25px] w-[80px]"
                    />
                    <p className="text-center text-[10px] font-light pt-6">Concept / VFX / Technical Art / Co-dev</p>
                    </div>

                </div>
                </div>

            </div>
        </section>
       
    )
}