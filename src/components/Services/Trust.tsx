"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import Image from "next/image";

// REQUIRED SWIPER CSS
import "swiper/css";
import "swiper/css/navigation";

export default function Trust() {
    return (
        <section className="trust-section bg-[#0A0A0A] lg-py-16 md:py-16 py-8">
            <h2 className="reveal lg:text-[56px] md:text-[40px] text-[36px] lg:mb-8 mb-6 text-white font-bold leading-tight text-center">
                Voices of <span className="text-[#D50000]">Trust</span>
            </h2>
            <div className="w-full lg:pt-2 pt-20 relative">

        {/* CUSTOM ARROWS */}
        <button
          id="trust-custom-prev"
          className="absolute xl:top-0 lg:top-0 md:top-0 top-[5%] 
lg:right-[10%] md:right-[15%] right-[22%]
rounded-full transition-all duration-700
hover:shadow-[0_2px_20px_0_#FFFFFF40]"
        >
          <Image src="/images/icons/left-arrow.png" width={40} height={40} alt="prev" />
        </button>

        <button
          id="trust-custom-next"
          className="absolute xl:top-0 lg:top-0 md:top-0 top-[5%] 
   lg:right-[5%] md:right-[8%] right-[9%]
  rounded-full transition-all duration-700
   hover:shadow-[0_2px_20px_0_#FFFFFF40]"
        >
          <Image src="/images/icons/right-arrow.png" width={40} height={40} alt="next" />
        </button>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: "#trust-custom-prev",
            nextEl: "#trust-custom-next",
          }}
          onInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = "#trust-custom-prev";
            swiper.params.navigation.nextEl = "#trust-custom-next";
          }

          if (swiper.navigation) {
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
          spaceBetween={20}
          slidesPerView={3.4}
          
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.4 },

          }}
          className="mySwiper py-[80px] reveal-stagger"
        >
        <SwiperSlide>
              <div className="bg-[#000000] p-6 rounded-xl">
                <img src="./images/icons/clients.png" alt="client" className="w-[64px] h-[64px]"/>
                <div className="flex items-center justify-start my-4">
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/empty-star-icon.png" alt="" />
                </div>
                <p className="my-4 3xl:text-[22px] 2xl:text-[20px] text-[15px] leading-base font-light">From concept to final render, Hexar exceeded expectations. Their creativity, communication, and technical precision made our project seamless.</p>

                <div className="mt-16">
                    <h6 className="3xl:text-[24px] 2xl:text-[22px] text-[16px] font-semibold leading-base">Rohit Sharma</h6>
                    <p className="3xl:text-[22px] 2xl:text-[20px] text-[14px] font-light leading-base mt-1">Maharashtra</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#000000] p-6 rounded-xl">
                <img src="./images/icons/clients.png" alt="client" className="w-[64px] h-[64px]"/>
                <div className="flex items-center justify-start my-4">
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/empty-star-icon.png" alt="" />
                </div>
                <p className="my-4 3xl:text-[22px] 2xl:text-[20px] text-[15px] leading-base font-light">From concept to final render, Hexar exceeded expectations. Their creativity, communication, and technical precision made our project seamless.</p>

                <div className="mt-16">
                    <h6 className="3xl:text-[24px] 2xl:text-[22px] text-[16px] font-semibold leading-base">Rohit Sharma</h6>
                    <p className="3xl:text-[22px] 2xl:text-[20px] text-[14px] font-light leading-base mt-1">Maharashtra</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#000000] p-6 rounded-xl">
                <img src="./images/icons/clients.png" alt="client" className="w-[64px] h-[64px]"/>
                <div className="flex items-center justify-start my-4">
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/empty-star-icon.png" alt="" />
                </div>
                <p className="my-4 3xl:text-[22px] 2xl:text-[20px] text-[15px] leading-base font-light">From concept to final render, Hexar exceeded expectations. Their creativity, communication, and technical precision made our project seamless.</p>

                <div className="mt-16">
                    <h6 className="3xl:text-[24px] 2xl:text-[22px] text-[16px] font-semibold leading-base">Rohit Sharma</h6>
                    <p className="3xl:text-[22px] 2xl:text-[20px] text-[14px] font-light leading-base mt-1">Maharashtra</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#000000] p-6 rounded-xl">
                <img src="./images/icons/clients.png" alt="client" className="w-[64px] h-[64px]"/>
                <div className="flex items-center justify-start my-4">
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/empty-star-icon.png" alt="" />
                </div>
                <p className="my-4 3xl:text-[22px] 2xl:text-[20px] text-[15px] leading-base font-light">From concept to final render, Hexar exceeded expectations. Their creativity, communication, and technical precision made our project seamless.</p>

                <div className="mt-16">
                    <h6 className="3xl:text-[24px] 2xl:text-[22px] text-[16px] font-semibold leading-base">Rohit Sharma</h6>
                    <p className="3xl:text-[22px] 2xl:text-[20px] text-[14px] font-light leading-base mt-1">Maharashtra</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#000000] p-6 rounded-xl">
                <img src="./images/icons/clients.png" alt="client" className="w-[64px] h-[64px]"/>
                <div className="flex items-center justify-start my-4">
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/full-star-icon.png" alt="" />
                    <img src="./images/icons/empty-star-icon.png" alt="" />
                </div>
                <p className="my-4 3xl:text-[22px] 2xl:text-[20px] text-[15px] leading-base font-light">From concept to final render, Hexar exceeded expectations. Their creativity, communication, and technical precision made our project seamless.</p>

                <div className="mt-16">
                    <h6 className="3xl:text-[24px] 2xl:text-[22px] text-[16px] font-semibold leading-base">Rohit Sharma</h6>
                    <p className="3xl:text-[22px] 2xl:text-[20px] text-[14px] font-light leading-base mt-1">Maharashtra</p>
                </div>
              </div>
            </SwiperSlide>

        </Swiper>
      </div>
        </section>
    )
}