"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GallerySlider() {

 const settings = {
  infinite: true,
  speed: 4000,
  autoplaySpeed: 0,
  pauseOnHover: true,
  cssEase: "linear",
  autoplay: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  loop: true,
  arrows: false,
  useTransform: false,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

  return (
    <section className="gallery-slider-section w-full">
    <Slider {...settings} className="cursor-grab active:cursor-grabbing h-full">
      <div className="p-3 border-l ">
        <h4 className="text-center text-base font-light">Technical Art</h4>
      </div>

      <div className="p-3 border-l">
        <h4 className="text-center text-base font-light">3D Characters</h4>
      </div>

      <div className="p-3 border-l" >
        <h4 className="text-center text-base font-light">Concept Art 3d</h4>
      </div>

      <div className="p-3 border-l">
        <h4 className="text-center text-base font-light">Hair Assets</h4>
      </div>

     <div className="p-3 border-l">
        <h4 className="text-center text-base font-light">Animation</h4>
      </div>

      <div className="p-3 border-l">
        <h4 className="text-center text-base font-light">Co-Dev</h4>
      </div>

      <div className="p-3 border-l">
        <h4 className="text-center text-base font-light">VFX Cinematics</h4>
      </div>

      <div className="p-3 border-l">
        <h4 className="text-center text-base font-light">Technical Art</h4>
      </div>

      <div className="p-3 border-l">
        <h4 className="text-center text-base font-light">Co-Dev</h4>
      </div>

      <div className="p-3 border-l">
        <h4 className="text-center text-base font-light">VFX Cinematics</h4>
      </div>
    </Slider>
    
    </section>
   
  );
}
