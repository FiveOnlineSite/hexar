"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function OurContributions() {
  return (
    <div className="our-contributions-section lg:p-16 md:p-16 p-8 bg-[#0A0A0A] border-white border-b border-t">
      <div>
        <div className="lg:flex block items-center justify-between w-full">
          <h2 className="reveal lg:text-[56px] md:text-[40px] text-[36px] lg:mb-8 mb-8 text-white font-bold leading-tight">
            Our Contribution
          </h2>
          
          <a
            href="#"
            className="reveal inline-block lg:text-[18px] md:text-[18px] text-[16px] leading-tight font-semibold lg:py-4 lg:px-8 py-3 px-2 mb-8 text-[#D50000] border-[1.8px] rounded-xl border-[#D50000]"
          >
            See Our Portfolio
          </a>
        </div>

       <div className="relative w-full flex justify-center">
          
          {/* LEFT ARROW */}
          <button
            id="custom-prev"
            className="absolute 3xl:left-0 2xl:left-0 xl:left-0 lg:left-0 md:left-[85%] left-[75%] 3xl:top-1/2 2xl:top-1/2 xl:top-1/2 lg:top-1/2 -top-[25%] 3xl:-translate-y-1/2 2xl:-translate-y-1/2 xl:-translate-y-1/2 lg:-translate-y-1/2 z-10
            rounded-full transition-all duration-700
            hover:shadow-[0_2px_20px_0_#FFFFFF40]"
          >
            <Image
              src="/images/icons/left-arrow.png"
              width={40}
              height={40}
              alt="prev"
            />
          </button>

          {/* RIGHT ARROW */}
          <button
            id="custom-next"
            className="absolute right-0 3xl:top-1/2 2xl:top-1/2 xl:top-1/2 lg:top-1/2 -top-[25%] 3xl:-translate-y-1/2 2xl:-translate-y-1/2 xl:-translate-y-1/2 lg:-translate-y-1/2 z-10
            rounded-full transition-all duration-700
            hover:shadow-[0_2px_20px_0_#FFFFFF40]"
          >
            <Image
              src="/images/icons/right-arrow.png"
              width={40}
              height={40}
              alt="next"
            />
          </button>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: "#custom-prev",
              nextEl: "#custom-next",
            }}
            onInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = "#custom-prev";
                swiper.params.navigation.nextEl = "#custom-next";
              }
              swiper.navigation?.init();
              swiper.navigation?.update();
            }}
            slidesPerView={1}
            className="mySwiper 3xl:w-[85%] 2xl:w-[85%] xl:w-[85%] lg:w-[85%] w-full reveal-stagger"
          >
            <SwiperSlide>
              <div className="rounded-xl overflow-hidden m-2">
                <img
                  src="./images/services-contribution.png"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="rounded-xl overflow-hidden m-2">
                <img
                  src="./images/services-contribution.png"
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
