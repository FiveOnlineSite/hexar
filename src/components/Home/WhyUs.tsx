"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

type WhyUsProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};


export default function WhyUs ({ id, ...rest }: WhyUsProps){

    useEffect(() => {
    const trigger = () => window.dispatchEvent(new Event("resize"));
    setTimeout(trigger, 200);
    setTimeout(trigger, 600);
    window.addEventListener("orientationchange", trigger);
    return () => window.removeEventListener("orientationchange", trigger);
  }, []);
  
    const settings = {
        speed: 1000,
        autoplay: false,
        infinite: false,
        autoplaySpeed: 200,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        loop: false,
        arrows: false,
        dots:false,
        responsive: [
            {
            breakpoint: 770,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
            },
        },
        ],
        };

    return (
        <section {...rest} id={id} className="why-us-section bg-[#0A0A0A] lg:py-16 md:py-16 py-8 h-full w-full bg-[url('/images/why-us-bg.png')] bg-no-repeat bg-right bg-[100%] bg-contain">
            <div className="lg:px-16 md:px-16 px-8 pb-16">
                <h2 className="lg:text-[56px] md:text-[40px] text-[36px] text-white font-bold lg:leading-base md:leading-tight leading-[40px] mb-5">Why Us?</h2>
        <p className="lg:w-[50%] w-full text-[22px] leading-tight font-base">
            Artistic mastery, reliable delivery, and complete production trust — all in one place.
        </p>
         </div>
                <Slider {...settings} className="lg:ps-6 md:ps-4 ps-0">
                    <div className="
                        group relative bg-[#000] rounded-lg overflow-hidden 
                        xl:h-[494px] h-full transition-all duration-700 mx-5 block
                    ">
                        <div className="overflow-hidden">
                            <img 
                                src="./images/why-us-1.png"
                                className="
                                    w-full object-cover
                                    xl:h-[420px] h-full xl:scale-110 scale-100
                                    xl:group-hover:h-[300px]
                                    group-hover:scale-100 
                                    origin-center
                                    transition-all duration-700 ease-out
                                "
                            />
                        </div>

                        <div className="
                            xl:absolute relative
                            xl:-bottom-[21%] bottom-0            
                            xl:group-hover:bottom-[5%]      
                            transition-all duration-700 ease-out
                            py-2 pl-4 pr-8
                        ">
                            <h2 className="lg:text-[32px] md:text-[25px] text-[20px] font-semibold leading-tight py-2">
                                Proven Global Track Record
                            </h2>
                            <p className="lg:text-[18px] md:text-[16px] text-[14px] font-light leading-base pb-4">
                                Trusted by leading studios, game developers, 
                                and production houses worldwide for consistently high-quality 3D Art.
                            </p>
                        </div>
                    </div>

                    <div className="
                        group relative bg-[#000] rounded-lg overflow-hidden 
                        xl:h-[494px] h-full transition-all duration-700 mx-5
                    ">
                        <div className="overflow-hidden">
                            <img 
                                src="./images/why-us-2.png"
                                className="
                                    w-full object-cover
                                    xl:h-[420px] h-full xl:scale-110 scale-100
                                    xl:group-hover:h-[300px]
                                    origin-center
                                    transition-all duration-700 ease-out
                                "
                            />
                        </div>

                        <div className="
                            xl:absolute relative
                            xl:-bottom-[21%] bottom-0            
                            xl:group-hover:bottom-[5%]     
                            transition-all duration-700 ease-out
                            py-2 pl-4 pr-8
                        ">
                            <h2 className="lg:text-[32px] md:text-[25px] text-[20px] font-semibold leading-tight py-2">
                                Artistic Mastery
                            </h2>
                            <p className="lg:text-[18px] md:text-[16px] text-[14px] font-light leading-base pb-4">
                                Our team blends world-class artistry with deep technical expertise, delivering 3D work that is both visually stunning and production-ready.
                            </p>
                        </div>
                    </div>

                    <div className="
                        group relative bg-[#000] rounded-lg overflow-hidden 
                        xl:h-[494px] h-full transition-all duration-700 mx-5
                    ">
                        <div className="overflow-hidden">
                            <img 
                                src="./images/why-us-2.png"
                                className="
                                    w-full object-cover
                                    xl:h-[420px] h-full xl:scale-110 scale-100
                                    xl:group-hover:h-[300px]
                                    origin-center
                                    transition-all duration-700 ease-out
                                "
                            />
                        </div>

                        <div className="
                            xl:absolute relative
                            xl:-bottom-[21%] bottom-0            
                            xl:group-hover:bottom-[5%]       
                            transition-all duration-700 ease-out
                            py-2 pl-4 pr-8
                        ">
                            <h2 className="lg:text-[32px] md:text-[25px] text-[20px] font-semibold leading-tight py-2">
                                Artistic Mastery
                            </h2>
                            <p className="lg:text-[18px] md:text-[16px] text-[14px] font-light leading-base pb-4">
                                Our team blends world-class artistry with deep technical expertise, delivering 3D work that is both visually stunning and production-ready.
                            </p>
                        </div>
                    </div>

                     <div className="
                        group relative bg-[#000] rounded-lg overflow-hidden 
                        xl:h-[494px] h-full transition-all duration-700 mx-5
                    ">
                        <div className="overflow-hidden">
                            <img 
                                src="./images/why-us-2.png"
                                className="
                                    w-full object-cover
                                    xl:h-[420px] h-full xl:scale-110 scale-100
                                    xl:group-hover:h-[300px]
                                    origin-center
                                    transition-all duration-700 ease-out
                                "
                            />
                        </div>

                        <div className="
                            xl:absolute relative
                            xl:-bottom-[21%] bottom-0            
                            xl:group-hover:bottom-[5%]  
                            transition-all duration-700 ease-out
                            py-2 pl-4 pr-8
                        ">
                            <h2 className="lg:text-[32px] md:text-[25px] text-[20px] font-semibold leading-tight py-2">
                                Artistic Mastery
                            </h2>
                            <p className="lg:text-[18px] md:text-[16px] text-[14px] font-light leading-base pb-4">
                                Our team blends world-class artistry with deep technical expertise, delivering 3D work that is both visually stunning and production-ready.
                            </p>
                        </div>
                    </div>
                </Slider>

           
        </section>
    )
}