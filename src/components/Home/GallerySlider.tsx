// "use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useEffect } from "react";

// export default function GallerySlider() {
  
//   useEffect(() => {
//   setTimeout(() => {
//     window.dispatchEvent(new Event("resize"));
//   }, 300);
// }, []);

//   const settings = {
//     infinite: true,
//     speed: 4000,
//     autoplaySpeed: 0,
//     autoplay: true,
//     cssEase: "linear",
//     pauseOnHover: false,
//     slidesToShow: 7,   // 👈 Desktop
//     slidesToScroll: 1,
//     arrows: false,
//     dots: false,

//     responsive: [
//       {
//         breakpoint: 1024, // md/lg screens
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 640, // mobile screens
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };


//   const dotClass =
//     "relative pl-6 before:content-[''] before:w-2 before:h-2 before:bg-white " +
//     "before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2";

//   return (
//     <section className="gallery-slider-section w-full">
//       <Slider {...settings} className="cursor-grab active:cursor-grabbing h-full">

//         <div className={`p-3 ${dotClass}`}>
//           <h4 className="text-base font-light text-center">Technical Art</h4>
//         </div>

//         <div className={`p-3 ${dotClass}`}>
//           <h4 className="text-base font-light text-center">3D Characters</h4>
//         </div>

//         <div className={`p-3 ${dotClass}`}>
//           <h4 className="text-base font-light text-center">Concept Art 3D</h4>
//         </div>

//         <div className={`p-3 ${dotClass}`}>
//           <h4 className="text-base font-light text-center">Hair Assets</h4>
//         </div>

//         <div className={`p-3 ${dotClass}`}>
//           <h4 className="text-base font-light text-center">Animation</h4>
//         </div>

//         <div className={`p-3 ${dotClass}`}>
//           <h4 className="text-base font-light text-center">Co-Dev</h4>
//         </div>

//         <div className={`p-3 ${dotClass}`}>
//           <h4 className="text-base font-light text-center">VFX Cinematics</h4>
//         </div>

//       </Slider>
//     </section>
//   );
// }

"use client";

import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GallerySlider() {

  // 🔥 Fix: Force Slick to recalc sizes on real mobile devices
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }, []);

  const settings = {
    infinite: true,
    speed: 4000,
    autoplaySpeed: 0,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const dotClass =
    "relative pl-6 before:content-[''] before:w-2 before:h-2 before:bg-white before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2";

  return (
    <section className="gallery-slider-section w-full">
      <Slider {...settings} className="cursor-grab active:cursor-grabbing h-full">

        <div className={`p-3 ${dotClass}`}><h4 className="text-base font-light text-center">Technical Art</h4></div>
        <div className={`p-3 ${dotClass}`}><h4 className="text-base font-light text-center">3D Characters</h4></div>
        <div className={`p-3 ${dotClass}`}><h4 className="text-base font-light text-center">Concept Art 3D</h4></div>
        <div className={`p-3 ${dotClass}`}><h4 className="text-base font-light text-center">Hair Assets</h4></div>
        <div className={`p-3 ${dotClass}`}><h4 className="text-base font-light text-center">Animation</h4></div>
        <div className={`p-3 ${dotClass}`}><h4 className="text-base font-light text-center">Co-Dev</h4></div>
        <div className={`p-3 ${dotClass}`}><h4 className="text-base font-light text-center">VFX Cinematics</h4></div>

      </Slider>
    </section>
  );
}
