"use client"

import FAQAccordion from "../FAQAccordion";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type FAQSectionProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function FAQSection ({ id, ...rest }: FAQSectionProps) {
    const faqs = [
    {
      question: "What services does Hexar Studios specialize in?",
      answer:
        "Hexar Studios creates high-quality 3D characters, environments, animations, and digital assets for games, films, branding, and immersive storytelling.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Timelines vary by scope, but most projects are completed within 2–6 weeks based on complexity.",
    },
    {
      question: "Do you work with global clients?",
      answer:
        "Yes, we collaborate with studios and production houses worldwide across multiple time zones.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  const handleToggle = (index: number) => {
  setActiveIndex((prev: number | null) => (prev === index ? null : index));
};

 useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
        gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.15, y: 40 },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            end: "bottom 60%",
            scrub: false,
            once: false,

            onEnter: () => {
                gsap.fromTo(
                imageRef.current,
                { opacity: 0, scale: 0.25, y: 40 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                }
                );
            },

            onLeaveBack: () => {
                gsap.set(imageRef.current, { opacity: 0, scale: 0.25, y: 40 });
            },
            },
        }
        );
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
    }, []);

    return (
        <section {...rest} id={id} ref={sectionRef} className="faq-section p-8 lg:p-16 border-white border-t">
            <div className="lg:flex block items-start justify-center">
                <div className="lg:w-[40%] w-full">
                    <h2 className="lg:text-[56px] md:text-[40px] text-[36px] lg:mb-8 mb-4 text-white font-bold leading-tight">Frequently Asked Question</h2>
                    <img ref={imageRef} src="./images/faq-bg.png" alt="faq-bg" className="w-full h-[420px] object-contain" />
                </div>
                <div className="lg:w-[60%] w-full px-4">
                    {faqs.map((faq, i) => (
            <FAQAccordion faq={faq} key={i} isOpen={activeIndex === i}
            onToggle={() => handleToggle(i)} />
          ))}
                </div>
            </div>
        </section>
    )
}