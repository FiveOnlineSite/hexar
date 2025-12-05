"use client";

import { useEffect, useRef } from "react";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BracketConnector from "../BracketConnector";

gsap.registerPlugin(ScrollTrigger);

export default function About () {

  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);


  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { opacity: 0, scale: 1.2 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

    const imgRef = useRef(null);

  useEffect(() => {
    gsap.from(imgRef.current, {
      opacity: 0,
      y: 50,
      scale: 1.15,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
      },
    });
  }, []);

    return (
        <section ref={sectionRef} className="about-section relative h-full">
             <div ref={bgRef} className="lg:p-16 p-8 bg-[url('/images/about-bg.png')] bg-no-repeat w-full bg-right h-full">
                <h2 className="lg:text-[56px] md:text-[40px] text-[36px] font-semibold leading-tight">About Hexar Family</h2>
                <div className="lg:w-[40%] w-full">
                    <p className="pt-4 pb-2 text-[15px] font-light leading-tight">Welcome to Hexar Studios — the unified force created through the strategic integration of Head Hoppers Studios and Ares Visual Effects Studio.</p>
                    <p className="pt-4 pb-2 text-[15px] font-light leading-tight">We bring together exceptional creative talent, advanced production pipelines, and world-class IT infrastructure to deliver stunning 3D visuals for games, films, advertising, and immersive experience</p>
                    <p className="pt-4 pb-2 text-[15px] font-light leading-tight">We bring together exceptional creative talent, advanced production pipelines, and world-class IT infrastructure to deliver stunning 3D visuals for games, films, advertising, and immersive experience</p>
                </div>
                <div className="relative lg:w-[40%] w-full">
                    <div className="relative">
                        <img src="./images/icons/hexar-logo.png" alt="hexar-logo" className="relative left-[38%] lg:h-[126px] lg:w-[200px] md:h-[100px] md:w-[150px] h-[60px] w-[80px]"/>
                        <BracketConnector/>
                        <img src="./images/icons/head-hoppers-logo.png" alt="head-hopper-logo" className="absolute -bottom-[20%] left-[15%] lg:h-[53px] lg:w-[137px] md:h-[40px] md:w-[100px] h-[30px] w-[70px]"/>
                        <img src="./images/icons/ares-logo.png" alt="ares-logo" className="absolute -bottom-[20%] right-[15%] lg:h-[37px] lg:w-[137px] md:h-[30px] md:w-[100px] h-[25px] w-[80px]"/>
        
                    </div>
                               </div>
            </div>
        </section>
       
    )
}