"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function OurCulture(){
    return (
        <section className="our-culture-section lg:p-16 md:p-16 p-8">
            <div className="">
                <h2 className="lg:text-[56px] md:text-[40px] text-[36px] text-left text-[#D50000] font-bold leading-tight">
                    Our Culture
                </h2>
            <h2 className="lg:text-[56px] md:text-[40px] text-[36px] text-left lg:mb-16 mb-8 text-white font-bold leading-tight">Through Our People</h2>
            </div>

            <div className="relative w-full flex justify-center">
                      
                      {/* LEFT ARROW */}
                      <button
                        id="custom-prev"
                        className="absolute left-[90%] top-0 -translate-y-1/2 z-10
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
                        className="absolute right-0 top-0 -translate-y-1/2 z-10
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
                        spaceBetween={2}
        slidesPerView={1.2}
        breakpoints={{
          1200: { slidesPerView: 1.2 },
          991: { slidesPerView: 1.5 },
          640: { slidesPerView: 1.2 },
          0: { slidesPerView: 1.2 },
        }}
        className="w-full">
                        <SwiperSlide>
                          <div className="flex items-center justify-center">
                            <div className="w-[30%] rounded-xl">
                                <img
                              src="./images/testi1.jpg"
                              className="h-[405px] w-full object-contain rounded-xl"
                            />
                            </div>
                            
                            <div className="w-[70%] bg-[#666666] p-16 rounded-xl">
                                <div></div>
                            </div>
                            
                          </div>
                        </SwiperSlide>
            
                        <SwiperSlide>
                          <div className="flex items-center justify-center">
                            <div className="w-[30%] rounded-xl">
                                 <img
                              src="./images/testi2.jpg"
                              className="h-[405px] w-full object-contain rounded-xl"
                            />
                            </div>
                            <div className="w-[70%] bg-[#666666] p-16 rounded-xl">
                                <div></div>
                            </div>
                           
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
        </section>
    )
}