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
      <button
        className="absolute left-1/2 bottom-[2%] z-20"
        onClick={() => setOpenCategories((prev) => !prev)}
      >
        <img
          src="/images/icons/categories-arrow.png"
          alt="categories-arrow"
          className={`w-10 h-10 object-contain transition-transform duration-300 ${
            openCategories ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* OVERLAY */}
      {openCategories && (
        <div className="bg-[#666666CC] h-[70%] w-screen absolute bottom-0 left-0 z-10 overflow-y-auto">
          <div className="mx-auto lg:p-16 md:p-16 p-8 grid lg:grid-cols-4 grid-cols-2 gap-2">
            {categories.map((category) => (

              <Link
                key={category.slug}
                href={`/${category.slug}`}
                onClick={() => setOpenCategories(false)}
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
      )}
    </>
  );
}
