// "use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// type WhyUsProps = {
//   id: string;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key: string]: any;
// };

// export default function WhyUs({ id, ...rest }: WhyUsProps) {
//   const settings = {
//     infinite: false,
//     speed: 600,
//     slidesToShow: 2.5,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: false,

//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1.5,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1.1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section
//       {...rest}
//       id={id}
//       className="
//         why-us-section
//         bg-[#0A0A0A]
//         lg:py-16 md:py-16 py-8
//         w-full
//         bg-[url('/images/why-us-bg.png')]
//         bg-no-repeat bg-right bg-contain
//       "
//     >
//       <div className="lg:px-16 md:px-16 px-8 pb-16">
//         <h2 className="lg:text-[56px] md:text-[40px] text-[36px] text-white font-bold leading-tight mb-5">
//           Why Us?
//         </h2>

//         <p className="lg:w-[50%] w-full text-[22px] leading-tight font-base text-white">
//           Artistic mastery, reliable delivery, and complete production trust — all in one place.
//         </p>
//       </div>

//       <Slider {...settings} className="px-4">
//         {/* CARD 1 */}
//         <div className="group bg-black rounded-lg overflow-hidden mx-3">
//           <div className="overflow-hidden">
//             <img
//               src="/images/why-us-1.png"
//               className="
//                 w-full object-cover
//                 h-[320px] lg:h-[420px]
//                 transition-all duration-700
//                 group-hover:scale-105
//               "
//             />
//           </div>

//           <div className="p-4">
//             <h2 className="lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-white">
//               Proven Global Track Record
//             </h2>
//             <p className="lg:text-[18px] md:text-[16px] text-[14px] text-white/80 mt-2">
//               Trusted by leading studios worldwide for consistently high-quality 3D art.
//             </p>
//           </div>
//         </div>

//         {/* CARD 2 */}
//         <div className="group bg-black rounded-lg overflow-hidden mx-3">
//           <div className="overflow-hidden">
//             <img
//               src="/images/why-us-2.png"
//               className="
//                 w-full object-cover
//                 h-[320px] lg:h-[420px]
//                 transition-all duration-700
//                 group-hover:scale-105
//               "
//             />
//           </div>

//           <div className="p-4">
//             <h2 className="lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-white">
//               Artistic Mastery
//             </h2>
//             <p className="lg:text-[18px] md:text-[16px] text-[14px] text-white/80 mt-2">
//               Stunning visuals backed by deep technical production expertise.
//             </p>
//           </div>
//         </div>

//         <div className="group bg-black rounded-lg overflow-hidden mx-3">
//           <div className="overflow-hidden">
//             <img
//               src="/images/why-us-2.png"
//               className="
//                 w-full object-cover
//                 h-[320px] lg:h-[420px]
//                 transition-all duration-700
//                 group-hover:scale-105
//               "
//             />
//           </div>

//           <div className="p-4">
//             <h2 className="lg:text-[28px] md:text-[24px] text-[20px] font-semibold text-white">
//               Artistic Mastery
//             </h2>
//             <p className="lg:text-[18px] md:text-[16px] text-[14px] text-white/80 mt-2">
//               Stunning visuals backed by deep technical production expertise.
//             </p>
//           </div>
//         </div>

//       </Slider>
//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

type WhyUsProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function WhyUs({ id, ...rest }: WhyUsProps) {
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
        bg-no-repeat bg-right bg-contain border-white border-t 
      "
    >
      {/* Heading + Paragraph */}
      <div className="lg:px-16 md:px-16 px-8 pb-16">
        <h2 className="reveal lg:text-[56px] md:text-[40px] text-[36px] text-white font-bold leading-tight mb-5">
          Why Us?
        </h2>

        <p className="reveal lg:w-[50%] w-full text-[22px] leading-tight font-base text-white">
          Artistic mastery, reliable delivery, and complete production trust — all in one place.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
      modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={2.5}
        breakpoints={{
          768: { slidesPerView: 2.5},
          480: { slidesPerView: 1.5},
          0: { slidesPerView: 1.5 },
        }}
        className="px-4 reveal-stagger"
      >
        {/* CARD 1 */}
        <SwiperSlide>
        <div className="group relative bg-[#000] rounded-lg overflow-hidden xl:h-[494px] h-full transition-all duration-700 mx-2 "> 
          <div className="overflow-hidden"> 
            <img src="./images/why-us-2.png" className=" w-full object-cover xl:h-[420px] h-full xl:scale-110 scale-100 xl:group-hover:h-[300px] origin-center transition-all duration-700 ease-out " /> 
          </div> 
          <div className="xl:absolute relative 3xl:-bottom-[25%] 2xl:-bottom-[23%] xl:-bottom-[21%] bottom-0 3xl:group-hover:bottom-[1%] 2xl:group-hover:bottom-[1%] xl:group-hover:bottom-[5%] transition-all duration-700 ease-out py-2 pl-4 lg:pr-8 md:pr-6 pr-4"> 
            <h2 className="text-white 3xl:text-[42px] 2xl:text-[38px] lg:text-[32px] md:text-[25px] text-[20px] font-semibold leading-tight py-2"> 
              Artistic Mastery 
              </h2> 
              <p className="3xl:text-[22px] 2xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-light leading-base pb-4"> 
                Our team blends world-class artistry with deep technical expertise, delivering 3D work that is both visually stunning and production-ready. 
                </p> 
              </div> 
            </div>
        </SwiperSlide>

        {/* CARD 2 */}
         <SwiperSlide>
        <div className=" group relative bg-[#000] rounded-lg overflow-hidden xl:h-[494px] h-full transition-all duration-700 mx-2 "> <div className="overflow-hidden"> <img src="./images/why-us-2.png" className=" w-full object-cover xl:h-[420px] h-full xl:scale-110 scale-100 xl:group-hover:h-[300px] origin-center transition-all duration-700 ease-out " /> </div> <div className=" xl:absolute relative 3xl:-bottom-[25%] 2xl:-bottom-[23%] xl:-bottom-[21%] bottom-0 3xl:group-hover:bottom-[1%] 2xl:group-hover:bottom-[1%] xl:group-hover:bottom-[5%] transition-all duration-700 ease-out py-2 pl-4 lg:pr-8 md:pr-6 pr-4"> <h2 className="3xl:text-[42px] 2xl:text-[38px] lg:text-[32px] md:text-[25px] text-[20px] font-semibold leading-tight py-2"> Artistic Mastery </h2> <p className="3xl:text-[22px] 2xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-light leading-base pb-4"> Our team blends world-class artistry with deep technical expertise, delivering 3D work that is both visually stunning and production-ready. </p> </div> </div>
        </SwiperSlide>

        {/* CARD 3 */}
         <SwiperSlide>
        <div className=" group relative bg-[#000] rounded-lg overflow-hidden xl:h-[494px] h-full transition-all duration-700 mx-2 "> <div className="overflow-hidden"> <img src="./images/why-us-2.png" className=" w-full object-cover xl:h-[420px] h-full xl:scale-110 scale-100 xl:group-hover:h-[300px] origin-center transition-all duration-700 ease-out " /> </div> <div className=" xl:absolute relative 3xl:-bottom-[25%] 2xl:-bottom-[23%] xl:-bottom-[21%] bottom-0 3xl:group-hover:bottom-[1%] 2xl:group-hover:bottom-[1%] xl:group-hover:bottom-[5%] transition-all duration-700 ease-out py-2 pl-4 lg:pr-8 md:pr-6 pr-4"> <h2 className="3xl:text-[42px] 2xl:text-[38px] lg:text-[32px] md:text-[25px] text-[20px] font-semibold leading-tight py-2"> Artistic Mastery </h2> <p className="3xl:text-[22px] 2xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-light leading-base pb-4"> Our team blends world-class artistry with deep technical expertise, delivering 3D work that is both visually stunning and production-ready. </p> </div> </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
