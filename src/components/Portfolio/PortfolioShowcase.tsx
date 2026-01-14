"use client";

export default function PortfolioShowcase(){
    return (
        <section className="portfolio-showcase-section lg:p-16 md:p-16 p-8">
            <div>
                <h2 className="reveal 3xl:text-[62px] 2xl:text-[60px] xl:text-[58px] lg:text-[58px] md:text-[52px] text-[35px] text-[#FFFFFF] leading-tight font-bold">Our Project <span className="text-[#D50000]">Showcase</span></h2>
            </div>
            <div className="reveal-stagger grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-10 mt-8">
                <div className="relative overflow-hidden group rounded-lg">
                    <img src="./images/portfolio-1.png" alt="portfolio-1" className="relative h-full w-full object-contain rounded-lg" />
                    <div className="absolute -bottom-[140%] left-0 3xl:h-[130vh] 2xl:h-[130vh] xl:h-[600px] md:h-[500px] sm:h-[500px] h-[480px] w-full bg-[#00000099] rounded-lg group-hover:bottom-0 transition-all duration-700 px-8 py-4 flex flex-col items-center justify-end">
                        <h5 className="capitalize text-center 3xl:text-[40px] 2xl:text[35px] xl:text-[28px] lg:text-[28px] md:text-[28px] text-[20px] font-bold leading-base mb-2">Back 4 Blood</h5>
                        <p className="capitalize font-light text-center 3xl:text-[22px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]">NPC Characters (Modular), HairStyles, Head & Zombie Body Parts</p>
                    </div>
                </div>

                <div className="relative overflow-hidden group rounded-lg">
                    <img src="./images/portfolio-2.png" alt="portfolio-1" className="relative h-full w-full object-contain rounded-lg" />
                    <div className="absolute -bottom-[140%] left-0 3xl:h-[130vh] 2xl:h-[130vh] xl:h-[600px] md:h-[500px] sm:h-[500px] h-[480px] w-full bg-[#00000099] rounded-lg group-hover:-bottom-0 transition-all duration-700 px-8 py-4 flex flex-col items-center justify-end">
                        <h5 className="capitalize text-center 3xl:text-[40px] 2xl:text[35px] xl:text-[28px] lg:text-[28px] md:text-[28px] text-[20px] font-bold leading-base mb-2">Back 4 Blood</h5>
                        <p className="capitalize font-light text-center 3xl:text-[22px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]">NPC Characters (Modular), HairStyles, Head & Zombie Body Parts</p>
                    </div>
                </div>

                <div className="relative overflow-hidden group rounded-lg">
                    <img src="./images/portfolio-3.png" alt="portfolio-1" className="relative h-full w-full object-contain rounded-lg" />
                    <div className="absolute -bottom-[140%] left-0 3xl:h-[130vh] 2xl:h-[130vh] xl:h-[600px] md:h-[500px] sm:h-[500px] h-[480px] w-full bg-[#00000099] rounded-lg group-hover:-bottom-0 transition-all duration-700 px-8 py-4 flex flex-col items-center justify-end">
                        <h5 className="capitalize text-center 3xl:text-[40px] 2xl:text[35px] xl:text-[28px] lg:text-[28px] md:text-[28px] text-[20px] font-bold leading-base mb-2">Back 4 Blood</h5>
                        <p className="capitalize font-light text-center 3xl:text-[22px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]">NPC Characters (Modular), HairStyles, Head & Zombie Body Parts</p>
                    </div>
                </div>

                <div className="relative overflow-hidden group rounded-lg">
                    <img src="./images/portfolio-4.png" alt="portfolio-1" className="relative h-full w-full object-contain rounded-lg" />
                    <div className="absolute -bottom-[140%] left-0 3xl:h-[130vh] 2xl:h-[130vh] xl:h-[600px] md:h-[500px] sm:h-[500px] h-[480px] w-full bg-[#00000099] rounded-lg group-hover:-bottom-0 transition-all duration-700 px-8 py-4 flex flex-col items-center justify-end">
                        <h5 className="capitalize text-center 3xl:text-[40px] 2xl:text[35px] xl:text-[28px] lg:text-[28px] md:text-[28px] text-[20px] font-bold leading-base mb-2">Back 4 Blood</h5>
                        <p className="capitalize font-light text-center 3xl:text-[22px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]">NPC Characters (Modular), HairStyles, Head & Zombie Body Parts</p>
                    </div>
                </div>

                <div className="relative overflow-hidden group rounded-lg">
                    <img src="./images/portfolio-1.png" alt="portfolio-1" className="relative h-full w-full object-contain rounded-lg" />
                    <div className="absolute -bottom-[140%] left-0 3xl:h-[130vh] 2xl:h-[130vh] xl:h-[600px] md:h-[500px] sm:h-[500px] h-[480px] w-full bg-[#00000099] rounded-lg group-hover:-bottom-0 transition-all duration-700 px-8 py-4 flex flex-col items-center justify-end">
                        <h5 className="capitalize text-center 3xl:text-[40px] 2xl:text[35px] xl:text-[28px] lg:text-[28px] md:text-[28px] text-[20px] font-bold leading-base mb-2">Back 4 Blood</h5>
                        <p className="capitalize font-light text-center 3xl:text-[22px] 2xl:text-[20px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[14px]">NPC Characters (Modular), HairStyles, Head & Zombie Body Parts</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-12 reveal">
                <a href="#" className="inline-block lg:text-[18px] md:text-[18px] text-[16px] leading-tight font-semibold lg:py-4 lg:px-10 py-3 px-5 mb-8 text-[#D50000] border-[1.8px] lg:rounded-xl md:rounded-xl rounded-lg border-[#D50000]">Explore More</a>
            </div>
        </section>
    )
}