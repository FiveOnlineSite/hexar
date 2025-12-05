"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


 function NextArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="
        absolute bottom-[18%] right-[8%]
        p-3 rounded-full
        transition-all duration-700
        z-20
        group-hover:backdrop-blur-md
        bg-transparent hover:bg-white/20
      "
    >
      <img src="./images/icons/right-arrow.png" alt="right-arrow" />
    </button>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="
        absolute bottom-[18%] right-[13%] 
        p-3 rounded-full
        transition-all duration-700
        z-20
        group-hover:backdrop-blur-md
        bg-transparent hover:bg-white/20
      "
    >
            <img src="./images/icons/left-arrow.png" alt="left-arrow" />

    </button>
  );
}


export default function Hero() {

  const settings = {
    infinite: true,
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  };


  return (
    <section className="hero-section">
        <Slider {...settings} className="h-full relative">
              <div className="relative">
                  <video src="./videos/bg-video1.mp4" playsInline autoPlay muted loop className="blur-md h-screen md:h-full sm:h-full w-full object-cover relative"></video>
                    <h1 className="text-[36px] leading-tight font-semibold absolute top-[40%] left-0 lg:px-16 px-8 lg:w-[40%] w-full">Predator Hunting Grounds</h1>
                    <a
              href="#"
              className="group flex items-center text-[24px] text-white leading-tight font-semibold absolute bottom-[18%] left-0 px-16 overflow-hidden"
            >
          <span
            className="
              flex items-center
              transition-all duration-500 ease-out
              group-hover:-translate-x-10
            "
          >
            <span
              className="
                inline-block w-[30px] h-px bg-white pe-4
                transition-all duration-300
                group-hover:opacity-0
              "
            ></span>

            <span
              className="
                transition-all duration-500 ease-out
              "
            >
              Take A Look
            </span>
          </span>

          <span
          className="
            relative inline-flex items-center
            w-[30px] h-px bg-white
            opacity-0 -translate-x-0
            transition-all duration-500 ease-out
            group-hover:opacity-100 group-hover:-translate-x-10
            after:content-['.']
            after:absolute after:-right-0
            after:-top-1 after:-translate-y-1/2
            after:text-white after:text-[18px] after:leading-none
          "
        ></span>
        </a>

      <img src="./images/image 2.png" alt="banner" className="absolute lg:bottom-0 -bottom-[5%] left-1/2 -translate-x-1/2"/>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>


      </Slider>
    </section>
    
    
  );
}
