"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Work(){
    return (
        <section className="work-section lg:p-16 md:p-16 p-8">
            <div className="">
                <h2 className="lg:text-[56px] md:text-[40px] text-[36px] lg:mb-8 mb-8 text-white font-bold leading-tight">
                Why Work With Us?
                </h2>
            </div>

             <div className="relative w-full flex justify-center">
          

          {/* SWIPER */}
          <Swiper
             modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={900}
        spaceBetween={0}
        slidesPerView={6}
        breakpoints={{
          1200: { slidesPerView: 6 },
          991: { slidesPerView: 4 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
            className="mySwiper w-full"
          >
            <SwiperSlide>
              <div className="">
                <img
                  src="./images/work.png"
                  className="h-full w-full object-cover"
                />
                <h5 className="text-center text-[22px] font-medium ">Innovation First</h5>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
                <img
                  src="./images/work.png"
                  className="h-full w-full object-cover"
                />
                <h5 className="text-center text-[22px] font-medium ">Innovation First</h5>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
                <img
                  src="./images/work.png"
                  className="h-full w-full object-cover"
                />
                <h5 className="text-center text-[22px] font-medium ">Innovation First</h5>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
                <img
                  src="./images/work.png"
                  className="h-full w-full object-cover"
                />
                <h5 className="text-center text-[22px] font-medium ">Innovation First</h5>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
                <img
                  src="./images/work.png"
                  className="h-full w-full object-cover"
                />
                <h5 className="text-center text-[22px] font-medium ">Innovation First</h5>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
                <img
                  src="./images/work.png"
                  className="h-full w-full object-cover"
                />
                <h5 className="text-center text-[22px] font-medium ">Innovation First</h5>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
                <img
                  src="./images/work.png"
                  className="h-full w-full object-cover"
                />
                <h5 className="text-center text-[22px] font-medium ">Innovation First</h5>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="">
                <img
                  src="./images/work.png"
                  className="h-full w-full object-cover"
                />
                <h5 className="text-center text-[22px] font-medium ">Innovation First</h5>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </section>
    )
}