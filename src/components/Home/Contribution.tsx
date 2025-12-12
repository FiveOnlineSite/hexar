"use client"

type ContributionProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};


export default function Contribution({ id, ...rest }: ContributionProps){
    return(
        <section {...rest} id={id} className="contribution-section bg-[#0A0A0A] lg:p-16 md:p-16 p-8 h-full w-full">
            <div className="lg:flex block items-center justify-between w-full">
                <h2 className="lg:text-[56px] md:text-[40px] text-[36px] lg:mb-16 mb-8 text-white font-bold leading-tight">Our Contribution</h2>
                <a href="#" className="inline-block lg:text-[18px] md:text-[18px] text-[16px] leading-tight font-semibold lg:py-4 lg:px-14 md:py-14 py-3 px-5 md:px-14 mb-8 text-[#D50000] border-[1.8px] lg:rounded-xl md:rounded-xl rounded-lg border-[#D50000]">Explore</a>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-6 gap-5 mb-5">
               <a href="#" className="relative group my-2 block lg:overflow-visible md:overflow-visible overflow-hidden">

                <div className="overflow-hidden lg:py-[40px] lg:-my-[40px] relative rounded">
                    <img 
                    src="/images/contributions/contribution-1.png"
                    alt="realtime-hair"
                   className="rounded-xl object-contain w-full contrib-height relative z-20"
                    />
                </div>

                <div className="xl:block lg:block md:block hidden absolute inset-0 overflow-hidden py-[40px] -my-[40px] z-10 pointer-events-none">

                    <div className="
                    absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2 
                    bg-[linear-gradient(145.81deg,#D50000_0.47%,#400000_40.83%,#000000_99.53%)]
                    rounded-xl xl:h-[370px] lg:h-[365px] md:h-[410px] sm:h-[550px] xs:h-[430px] w-full
                    transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:-rotate-[8deg]
                    "></div>

                    <div className="
                    absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2
                    bg-[linear-gradient(145.81deg,#D50000_0.47%,#400000_40.83%,#000000_99.53%)]
                    rounded-xl xl:h-[370px] lg:h-[365px] md:h-[410px] sm:h-[550px] xs:h-[430px] w-full
                    transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:rotate-[8deg]
                    "></div>

                </div>

                <div className="
                    absolute left-0 right-0 
                    -bottom-[10px] 
                    group-hover:bottom-0 opacity-0 group-hover:opacity-100
                    transition-all duration-700 
                    z-20 contrib-height overflow-hidden
                ">
                    <div className="bg-[#00000099] w-full contrib-height rounded-xl"></div>

                    <div className="group/button flex items-center text-[20px] text-white leading-tight font-semibold absolute bottom-6 left-6">

                <span className="
                    flex items-center transition-all duration-500 ease-out
                    group-hover/button:-translate-x-10">
                    <span className="
                        inline-block w-[28px] h-px bg-white me-1
                        transition-all duration-300
                        group-hover/button:opacity-0
                    "></span>

                    <span className="transition-all duration-500 ease-out">
                    Take A Look
                    </span>
                </span>

                <span className="
                    relative inline-flex items-center
                    w-[30px] h-px bg-white
                    opacity-0 -translate-x-0
                    transition-all duration-500 ease-out ms-1
                    group-hover/button:opacity-100 group-hover/button:-translate-x-10
                    after:content-['.']
                    after:absolute after:-right-0
                    after:-top-1 after:-translate-y-1/2
                    after:text-white after:text-[18px] after:leading-none
                "></span>

                    </div>
                </div>
                </a>

                 <a href="#" className="relative group my-2 block lg:overflow-visible md:overflow-visible overflow-hidden">

                <div className="overflow-hidden lg:py-[40px] lg:-my-[40px] relative rounded">
                    <img 
                    src="/images/contributions/contribution-1.png"
                    alt="realtime-hair"
                   className="rounded-xl object-contain w-full contrib-height relative z-20"
                    />
                </div>

                <div className="xl:block lg:block md:block hidden absolute inset-0 overflow-hidden py-[40px] -my-[40px] z-10 pointer-events-none">

                    <div className="
                    absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2 
                    bg-[linear-gradient(145.81deg,#D50000_0.47%,#400000_40.83%,#000000_99.53%)]
                    rounded-xl xl:h-[370px] lg:h-[365px] md:h-[410px] sm:h-[550px] xs:h-[430px] w-full
                    transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:-rotate-[8deg]
                    "></div>

                    <div className="
                    absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2
                    bg-[linear-gradient(145.81deg,#D50000_0.47%,#400000_40.83%,#000000_99.53%)]
                    rounded-xl xl:h-[370px] lg:h-[365px] md:h-[410px] sm:h-[550px] xs:h-[430px] w-full
                    transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:rotate-[8deg]
                    "></div>

                </div>

                <div className="
                    absolute left-0 right-0 
                    -bottom-[10px] 
                    group-hover:bottom-0 opacity-0 group-hover:opacity-100
                    transition-all duration-700 
                    z-20 contrib-height overflow-hidden
                ">
                    <div className="bg-[#00000099] w-full contrib-height rounded-xl"></div>

                    <div className="group/button flex items-center text-[20px] text-white leading-tight font-semibold absolute bottom-6 left-6">

                <span className="
                    flex items-center transition-all duration-500 ease-out
                    group-hover/button:-translate-x-10">
                    <span className="
                        inline-block w-[28px] h-px bg-white me-1
                        transition-all duration-300
                        group-hover/button:opacity-0
                    "></span>

                    <span className="transition-all duration-500 ease-out">
                    Take A Look
                    </span>
                </span>

                <span className="
                    relative inline-flex items-center
                    w-[30px] h-px bg-white
                    opacity-0 -translate-x-0
                    transition-all duration-500 ease-out ms-1
                    group-hover/button:opacity-100 group-hover/button:-translate-x-10
                    after:content-['.']
                    after:absolute after:-right-0
                    after:-top-1 after:-translate-y-1/2
                    after:text-white after:text-[18px] after:leading-none
                "></span>

                    </div>
                </div>
                </a>

                <a href="#" className="relative group my-2 block lg:overflow-visible md:overflow-visible overflow-hidden">

                <div className="overflow-hidden lg:py-[40px] lg:-my-[40px] relative rounded">
                    <img 
                    src="/images/contributions/contribution-1.png"
                    alt="realtime-hair"
                   className="rounded-xl object-contain w-full contrib-height relative z-20"
                    />
                </div>

                <div className="xl:block lg:block md:block hidden absolute inset-0 overflow-hidden py-[40px] -my-[40px] z-10 pointer-events-none">

                    <div className="
                    absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2 
                    bg-[linear-gradient(145.81deg,#D50000_0.47%,#400000_40.83%,#000000_99.53%)]
                    rounded-xl xl:h-[370px] lg:h-[365px] md:h-[410px] sm:h-[550px] xs:h-[430px] w-full
                    transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:-rotate-[8deg]
                    "></div>

                    <div className="
                    absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2
                    bg-[linear-gradient(145.81deg,#D50000_0.47%,#400000_40.83%,#000000_99.53%)]
                    rounded-xl xl:h-[370px] lg:h-[365px] md:h-[410px] sm:h-[550px] xs:h-[430px] w-full
                    transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:rotate-[8deg]
                    "></div>

                </div>

                <div className="
                    absolute left-0 right-0 
                    -bottom-[10px] 
                    group-hover:bottom-0 opacity-0 group-hover:opacity-100
                    transition-all duration-700 
                    z-20 contrib-height overflow-hidden
                ">
                    <div className="bg-[#00000099] w-full contrib-height rounded-xl"></div>

                    <div className="group/button flex items-center text-[20px] text-white leading-tight font-semibold absolute bottom-6 left-6">

                <span className="
                    flex items-center transition-all duration-500 ease-out
                    group-hover/button:-translate-x-10">
                    <span className="
                        inline-block w-[28px] h-px bg-white me-1
                        transition-all duration-300
                        group-hover/button:opacity-0
                    "></span>

                    <span className="transition-all duration-500 ease-out">
                    Take A Look
                    </span>
                </span>

                <span className="
                    relative inline-flex items-center
                    w-[30px] h-px bg-white
                    opacity-0 -translate-x-0
                    transition-all duration-500 ease-out ms-1
                    group-hover/button:opacity-100 group-hover/button:-translate-x-10
                    after:content-['.']
                    after:absolute after:-right-0
                    after:-top-1 after:-translate-y-1/2
                    after:text-white after:text-[18px] after:leading-none
                "></span>

                    </div>
                </div>
                </a>

                <a href="#" className="relative group my-2 block lg:overflow-visible md:overflow-visible overflow-hidden">

                <div className="overflow-hidden lg:py-[40px] lg:-my-[40px] relative rounded">
                    <img 
                    src="/images/contributions/contribution-1.png"
                    alt="realtime-hair"
                   className="rounded-xl object-contain w-full contrib-height relative z-20"
                    />
                </div>

                <div className="xl:block lg:block md:block hidden absolute inset-0 overflow-hidden py-[40px] -my-[40px] z-10 pointer-events-none">

                    <div className="
                    absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2 
                    bg-[linear-gradient(145.81deg,#D50000_0.47%,#400000_40.83%,#000000_99.53%)]
                    rounded-xl xl:h-[370px] lg:h-[365px] md:h-[410px] sm:h-[550px] xs:h-[430px] w-full
                    transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:-rotate-[8deg]
                    "></div>

                    <div className="
                    absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2
                    bg-[linear-gradient(145.81deg,#D50000_0.47%,#400000_40.83%,#000000_99.53%)]
                    rounded-xl xl:h-[370px] lg:h-[365px] md:h-[410px] sm:h-[550px] xs:h-[430px] w-full
                    transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:rotate-[8deg]
                    "></div>

                </div>

                <div className="
                    absolute left-0 right-0 
                    -bottom-[10px] 
                    group-hover:bottom-0 opacity-0 group-hover:opacity-100
                    transition-all duration-700 
                    z-20 contrib-height overflow-hidden
                ">
                    <div className="bg-[#00000099] w-full contrib-height rounded-xl"></div>

                    <div className="group/button flex items-center text-[20px] text-white leading-tight font-semibold absolute bottom-6 left-6">

                <span className="
                    flex items-center transition-all duration-500 ease-out
                    group-hover/button:-translate-x-10">
                    <span className="
                        inline-block w-[28px] h-px bg-white me-1
                        transition-all duration-300
                        group-hover/button:opacity-0
                    "></span>

                    <span className="transition-all duration-500 ease-out">
                    Take A Look
                    </span>
                </span>

                <span className="
                    relative inline-flex items-center
                    w-[30px] h-px bg-white
                    opacity-0 -translate-x-0
                    transition-all duration-500 ease-out ms-1
                    group-hover/button:opacity-100 group-hover/button:-translate-x-10
                    after:content-['.']
                    after:absolute after:-right-0
                    after:-top-1 after:-translate-y-1/2
                    after:text-white after:text-[18px] after:leading-none
                "></span>

                    </div>
                </div>
                </a>

                <a href="#" className="relative group my-2 block lg:overflow-visible md:overflow-visible overflow-hidden">

                <div className="overflow-hidden lg:py-[40px] lg:-my-[40px] relative rounded">
                    <img 
                    src="/images/contributions/contribution-1.png"
                    alt="realtime-hair"
                   className="rounded-xl object-contain w-full contrib-height relative z-20"
                    />
                </div>

                <div className="xl:block lg:block md:block hidden absolute inset-0 overflow-hidden py-[40px] -my-[40px] z-10 pointer-events-none">

                    <div className="
                    absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2 
                    bg-[linear-gradient(145.81deg,#D50000_0.47%,#400000_40.83%,#000000_99.53%)]
                    rounded-xl xl:h-[370px] lg:h-[365px] md:h-[410px] sm:h-[550px] xs:h-[430px] w-full
                    transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:-rotate-[8deg]
                    "></div>

                    <div className="
                    absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2
                    bg-[linear-gradient(145.81deg,#D50000_0.47%,#400000_40.83%,#000000_99.53%)]
                    rounded-xl xl:h-[370px] lg:h-[365px] md:h-[410px] sm:h-[550px] xs:h-[430px] w-full
                    transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:rotate-[8deg]
                    "></div>

                </div>

                <div className="
                    absolute left-0 right-0 
                    -bottom-[10px] 
                    group-hover:bottom-0 opacity-0 group-hover:opacity-100
                    transition-all duration-700 
                    z-20 contrib-height overflow-hidden
                ">
                    <div className="bg-[#00000099] w-full contrib-height rounded-xl"></div>

                    <div className="group/button flex items-center text-[20px] text-white leading-tight font-semibold absolute bottom-6 left-6">

                <span className="
                    flex items-center transition-all duration-500 ease-out
                    group-hover/button:-translate-x-10">
                    <span className="
                        inline-block w-[28px] h-px bg-white me-1
                        transition-all duration-300
                        group-hover/button:opacity-0
                    "></span>

                    <span className="transition-all duration-500 ease-out">
                    Take A Look
                    </span>
                </span>

                <span className="
                    relative inline-flex items-center
                    w-[30px] h-px bg-white
                    opacity-0 -translate-x-0
                    transition-all duration-500 ease-out ms-1
                    group-hover/button:opacity-100 group-hover/button:-translate-x-10
                    after:content-['.']
                    after:absolute after:-right-0
                    after:-top-1 after:-translate-y-1/2
                    after:text-white after:text-[18px] after:leading-none
                "></span>

                    </div>
                </div>
                </a>
            </div>
        </section>
    )
}