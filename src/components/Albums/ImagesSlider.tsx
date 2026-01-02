"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface AlbumSliderProps{
    images: string[];
}

export default function AlbumSlider({images}: AlbumSliderProps){

    return (
          <section className="relative">
            <Swiper
            modules={[Mousewheel]}
            direction="horizontal"
            spaceBetween={1}
            slidesPerView={1}
            mousewheel={{
            forceToAxis: false,          // prevents diagonal scroll issues
            sensitivity: 1,             // scroll strength
            releaseOnEdges: true,       // allow page scroll after last slide
            thresholdDelta: 30
          }}
          speed={1000}  
          className="mySwiper h-[100vh] relative"
        >
            {images.map((image, index)=> (
                <SwiperSlide key={index} className="py-2">
            <div >
                <img src={image} className="h-[100vh] w-full object-contain z-0" alt={`Album-${index}`}  />

            </div>
            </SwiperSlide>
            ))}
            
              </Swiper>
            </section>
    )
}