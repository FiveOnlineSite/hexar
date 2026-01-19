"use client";

import { useState } from "react";
import CategoriesCard from "../CategoriesCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CategoriesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    { id: 1, title: "3D Character", image: "./images/services-category1.png" },
    { id: 2, title: "Environment Design", image: "./images/services-category2.png" },
    { id: 3, title: "VFX & Animation", image: "./images/services-category3.png" },
  ];

  const handleToggle = (id: number) => {
    setActiveCard(prev => (prev === id ? null : id));

    // 🔥 FORCE GLOBAL RECALC AFTER DOM UPDATE
    requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });
  };

  return (
    <section className="lg:p-16 p-8 bg-[#0A0A0A]">
      {cards.map(card => (
        <CategoriesCard
          key={card.id}
          {...card}
          isOpen={activeCard === card.id}
          onToggle={() => handleToggle(card.id)}
        />
      ))}
    </section>
  );
}
