"use client";

import { useState } from "react";
import CategoriesCard from "../CategoriesCard";

export default function CategoriesSection() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    { id: 1, title: "3D Character", image: "./images/services-category1.png" },
    { id: 2, title: "Environment Design", image: "./images/services-category2.png"  },
    { id: 3, title: "VFX & Animation", image: "./images/services-category3.png"  },
  ];

  return (
    <section className="services-categories-section lg:p-16 md:p-16 p-8 bg-[#0A0A0A]">
      {cards.map((card) => (
        <CategoriesCard
          key={card.id}
          id={card.id}
          title={card.title}
          image={card.image}
          isOpen={activeCard === card.id}
          onToggle={() =>
            setActiveCard(activeCard === card.id ? null : card.id)
          }
        />
      ))}
    </section>
  );
}
