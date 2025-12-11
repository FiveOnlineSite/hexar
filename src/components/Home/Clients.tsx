"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ClientsSectionProps = {
  id: string;
  [key: string]: any;
};

export default function Clients ({ id, ...rest }: ClientsSectionProps){

const settings = {
  speed: 1000,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 200,
  slidesToShow: 6,
  slidesToScroll: 1,
  loop: true,
  arrows: false,
  dots:false,
  rows: 2,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  ],
};

    return (
        <section {...rest} id={id} className="clients-section lg:p-16 md:p-16 p-8">
                <h2 className="lg:text-[56px] md:text-[40px] text-[36px] text-center lg:mb-16 mb-8 text-white font-bold leading-tight">Our Clients</h2>

             <Slider {...settings} className="h-full">
  
  <img 
    src="/images/clients/client-1.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-3.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-2.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-4.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-6.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-5.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-8.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-7.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-10.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-9.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-12.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-11.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-14.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

  <img 
    src="/images/clients/client-13.png" 
    alt="client" 
    className="h-[172px] p-2 w-full object-contain transition-transform duration-700 ease-out hover:scale-50"
  />

</Slider>

        </section>
    )
}