"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type BlogSectionProps = {
  id: string;
  [key: string]: any;
};

function NextArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="
        absolute xl:top-[65%] lg:top-[85%] -top-[15%] xl:-left-[50%] lg:-left-[45%] left-[18%]
        rounded-full
        transition-all duration-700
        hover:shadow-[0_2px_20px_0_#FFFFFF40]
      "
    >
      <Image
        src="/images/icons/right-arrow.png"
        alt="right-arrow"
        width={48}
        height={48}
        className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
      />
    </button>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="
        absolute xl:top-[65%] lg:top-[85%] -top-[15%] lg:-left-[58%] left-[5%]
        rounded-full
        transition-all duration-700
        hover:shadow-[0_2px_20px_0_#FFFFFF40]
      "
    >
      <Image
        src="/images/icons/left-arrow.png"
        alt="left-arrow"
        width={48}
        height={48}
        className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
      />
    </button>
  );
}

export default function BlogSection({ id, ...rest }: BlogSectionProps) {
  const settings = {
    speed: 1000,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      {...rest}
      id={id}
      className="blog-section relative lg:flex block justify-center items-start py-8 lg:py-16"
    >
      <div className="lg:w-[40%] relative w-full px-8 lg:ps-16">
        <h2 className="lg:text-[56px] md:text-[40px] text-[36px] lg:mb-8 mb-4 text-white font-bold leading-tight">
          News & <span className="text-[#D50000]">Blogs</span>
        </h2>
        <p className="lg:text-[22px] text-[20px] font-base leading-base text-white">
          Stay tuned for the latest company news, current trends from the world
          of game development
        </p>
      </div>

      <div className="lg:w-[60%] w-full lg:pt-2 pt-20">
        <Slider {...settings}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="hover:shadow-[0_2px_20px_0_#FFFFFF40] group transition-all duration-700 rounded-xl overflow-hidden m-2"
            >
              <div className="h-[250px] overflow-hidden">
                <img
                  src="/images/news-blogs-1.png"
                  className="bg-contain scale-100 h-[250px] group-hover:scale-125 transition-all duration-700"
                />
              </div>
              <div className="flex items-start justify-center">
                <h3 className="p-3 lg:text-[22px] text-[20px] font-base leading-base w-[75%]">
                  How AI is Changing the Gaming World
                </h3>
                <h4 className="w-[25%] p-3 text-[18px] font-light text-[#FFFFFFCC]">
                  24 Nov
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
