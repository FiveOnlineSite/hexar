"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type WhyUsProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function WhyUs({ id, ...rest }: WhyUsProps) {
  const settings = {
    infinite: false,
    speed: 600,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      {...rest}
      id={id}
      className="
        why-us-section
        bg-[#0A0A0A]
        lg:py-16 md:py-16 py-8
        w-full
        bg-[url('/images/why-us-bg.png')]
        bg-no-repeat bg-right bg-contain
      "
    >
      <div className="lg:px-16 md:px-16 px-8 pb-16">
        <h2 className="lg:text-[56px] md:text-[40px] text-[36px] text-white font-bold leading-tight mb-5">
          Why Us?
        </h2>

        <p className="lg:w-[50%] w-full text-[22px] leading-tight font-base text-white">
          Artistic mastery, reliable delivery, and complete production trust — all in one place.
        </p>
      </div>

      <Slider {...settings} className="px-4">
        {/* CARD 1 */}
        <div className="group bg-black rounded-lg overflow-hidden mx-3">
          <div className="overflow-hidden">
            <img
              src="/images/why-us-1.png"
              className="
                w-full object-cover
                h-[320px] lg:h-[420px]
                transition-all duration-700
                group-hover:scale-105
              "
            />
          </div>

          <div className="p-4">
            <h2 className="lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-white">
              Proven Global Track Record
            </h2>
            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-white/80 mt-2">
              Trusted by leading studios worldwide for consistently high-quality 3D art.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="group bg-black rounded-lg overflow-hidden mx-3">
          <div className="overflow-hidden">
            <img
              src="/images/why-us-2.png"
              className="
                w-full object-cover
                h-[320px] lg:h-[420px]
                transition-all duration-700
                group-hover:scale-105
              "
            />
          </div>

          <div className="p-4">
            <h2 className="lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-white">
              Artistic Mastery
            </h2>
            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-white/80 mt-2">
              Stunning visuals backed by deep technical production expertise.
            </p>
          </div>
        </div>

        <div className="group bg-black rounded-lg overflow-hidden mx-3">
          <div className="overflow-hidden">
            <img
              src="/images/why-us-2.png"
              className="
                w-full object-cover
                h-[320px] lg:h-[420px]
                transition-all duration-700
                group-hover:scale-105
              "
            />
          </div>

          <div className="p-4">
            <h2 className="lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-white">
              Artistic Mastery
            </h2>
            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-white/80 mt-2">
              Stunning visuals backed by deep technical production expertise.
            </p>
          </div>
        </div>

      </Slider>
    </section>
  );
}
