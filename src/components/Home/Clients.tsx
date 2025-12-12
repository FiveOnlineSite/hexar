"use client";

import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSlickFix from "@/src/app/hooks/useSlickFix";

type ClientsSectionProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function Clients({ id, ...rest }: ClientsSectionProps) {

  useSlickFix();

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 600,
    rows: 2,
    slidesPerRow: 1,

    slidesToShow: 6,
    slidesToScroll: 6,

    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <section {...rest} id={id} className="clients-section px-0 lg:px-16 md:px-16 p-8 overflow-hidden">

      <h2 className="lg:text-[56px] md:text-[40px] text-[36px] text-center lg:mb-16 mb-8 text-white font-bold leading-tight">
        Our Clients
      </h2>

      <Slider {...settings} className="h-full">

        {/* All clients inside <div> wrappers */}
        {[
          "client-1","client-3","client-2","client-4","client-6",
          "client-5","client-8","client-7","client-10","client-9",
          "client-12","client-11","client-14","client-13",
        ].map((name, i) => (
          <div key={i}>
            <img
              src={`/images/clients/${name}.png`}
              alt={name}
              className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
            />
          </div>
        ))}

      </Slider>
    </section>
  );
}
