"use client";

import { useState } from "react";
import { categories } from "@/src/data/categories";
import Link from "next/link";

interface CategoriesArrowProps {
  categorySlug: string;
}

export default function CategoriesArrow({ categorySlug }: CategoriesArrowProps) {
  const [openCategories, setOpenCategories] = useState(false);

  return (
    <>
      {/* TOGGLE BUTTON */}
      {!openCategories && (
      <button
        className="absolute left-1/2 bottom-[10%] z-20"
        onClick={() => setOpenCategories((prev) => !prev)}
      >
        <div className="relative bg-[#666666CC] w-10 h-10 p-2 rounded-full">

          <img
            src="/images/icons/down-arrow.png"
            alt="albums-arrow"
            className="w-[12px] h-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          </div>
      </button>
      )}

    <div
        className={`absolute bottom-0 left-0 w-screen z-20 transition-all duration-500
        ${openCategories ? "h-[70%] bg-[#666666CC]" : "h-0 overflow-hidden"}`}
      >
      {openCategories && (
      <button
        className="absolute left-1/2 -top-[4.5%] z-20"
        onClick={() => setOpenCategories((prev) => !prev)}
      >
        <div className="relative bg-black w-10 h-10 p-2 rounded-full">
            <img
          src="/images/icons/down-arrow.png"
          alt="categories-arrow"
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[12px] h-[12px] object-contain transition-transform duration-300 ${
            openCategories ? "rotate-180" : ""
          }`}
        />
        </div>
        
      </button>
      )}
        <div className="mx-auto lg:p-16 md:p-16 p-8 h-[70%] grid lg:grid-cols-4 grid-cols-2 gap-2">
            {categories.map((category) => (

              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="group h-[230px] relative overflow-hidden rounded-lg border border-[#FFFFFF33] "
              >
                <div className="overflow-hidden">
                    <img
                  src={category.category_img}
                  alt={category.title}
                  className="w-full object-contain transition-transform duration-500 origin-center scale-100 group-hover:scale-110"
                />
                </div>
                

                {/* OVERLAY TITLE */}
                <div className="w-full bg-[#000000] flex items-end">
                  <h6 className="text-white text-[18px] font-base p-2">
                    {category.title}
                  </h6>
                </div>
              </Link>
            ))}
          </div>
      </div>

      {/* OVERLAY */}
  
    </>
  );
}
