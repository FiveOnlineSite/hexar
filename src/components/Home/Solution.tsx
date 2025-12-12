"use client"

import Image from "next/image";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

type SolutionProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function Solution({ id, ...rest }:SolutionProps){

    const sectionRef = useRef(null);
    const imageRef = useRef(null);

  useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    gsap.set(imageRef.current, {
  opacity: 0,
  scale: 0.3,
  transformOrigin: "100% 100%",  // bottom-right
});

     gsap.to(imageRef.current, {
      backgroundPositionX: "100%", // final = right side
      opacity: 1,
      duration: 1.8,
     ease: "sine.out",
      scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1,

      onEnter: () => {
        gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: "back.out(1.7)",
        transformOrigin: "100% 100%",  // bottom-right
        });
      },
      onLeaveBack: () => {
        gsap.set(imageRef.current, {
          opacity: 0,
          scale: 0.3,
        });
      },
    },
    });
  }, sectionRef);

  ScrollTrigger.refresh();
  return () => ctx.revert();
}, []);

    return(
       <section {...rest} id={id} ref={sectionRef} className="solution-section relative h-full w-full overflow-hidden">
  
  <div
    ref={imageRef}
    className="absolute right-0 top-0 bg-no-repeat bg-right-top bg-contain bg-[length:900px] w-full h-full xl:block lg:block hidden"
    style={{ backgroundImage: "url('/images/end-to-end-bg.png')" }}
  ></div>
  <div className="relative z-10 flex items-center">
                <div className="lg:w-[65%] w-full lg:pb-16 md:pb-16 pb-8">
                    <h2 className="lg:text-[56px] md:text-[40px] text-[36px] text-white font-bold lg:leading-tight md:leading-tight leading-[40px] lg:px-16 lg:pt-16 lg:pb-8 md:px-16 md:pt-16 pb-4 pt-8 px-8"><span className="text-[#D50000]">End-to-End </span>3D Art Solutions for Film, Games & Beyond</h2>
                    <img ref={imageRef} src="./images/end-to-end-bg.png" alt="bg" className="xl:hidden lg:hidden block w-full h-full pe-0"/>
                    <div className="lg:w-[62%] w-full lg:px-16 md:px-16 px-8">
                        <p className="my-6 text-[15px] font-light leading-base">We partner with leading studios, game developers, and production houses worldwide to craft exceptional 3D art that stands out. From the spark of a 2D concept to high-resolution sculpts, highly detailed VFX assets and fully optimized in-game assets, our pipeline blends artistic passion with technical mastery. </p>

                        <p className="my-6 text-[15px] font-light leading-base">Every project is executed through a secure, efficient, and collaborative workflow, ensuring that your vision transforms into a tangible, visually stunning reality — on time, on spec, and beyond expectation.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 items-center justify-center xl:w-[85%] w-full lg:mt-[10%] lg:mb-[8%] lg:px-16 md:px-16 px-8">

                    <div className="flex flex-col items-center justify-center lg:py-0 md:py-0 py-2 lg:px-2">
                        <img src="./images/icons/Icon-Pre 1.png" alt="pre-production" className="xl:w-auto lg:w-[60px] md:w-[65px] w-[55px]" />
                        <h4 className="lg:text-[23px] md:text-[20px] text-[18px] leading-tight font-light lg:mt-4 md:mt-2 mt-2 text-center">Pre-Production</h4>
                    </div>

                    <div className="flex flex-col items-center justify-center lg:border-r lg:border-l md:border-r md:border-l lg:py-0 md:py-0 py-2 lg:px-2">
                        <img src="./images/icons/Icon-Prod 1.png" alt="production" className="xl:w-auto lg:w-[60px] md:w-[65px] w-[55px]"  />
                        <h4 className="lg:text-[23px] md:text-[20px] text-[18px] leading-tight font-light lg:mt-4 md:mt-2 mt-2 text-center">Production</h4>
                    </div>

                    <div className="flex flex-col items-center justify-center lg:py-0 md:py-0 py-2 lg:px-2">
                        <img src="./images/icons/Icon-Post 1.png" alt="post-production" className="xl:w-auto lg:w-[60px] md:w-[65px] w-[55px]" />
                        <h4 className="lg:text-[23px] md:text-[20px] text-[18px] leading-tight font-light lg:mt-4 md:mt-2 mt-2 text-center">Post-Production</h4>
                    </div>

                    </div>

                </div>
            </div>
        </section>
    )
}