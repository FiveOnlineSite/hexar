"use client"

type OurExpertiseProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function OurExpertise({ id, ...rest }: OurExpertiseProps){
    return (
        <section {...rest} id={id} className="our-expertise-seciton lg:p-16 md:p-16 p-8 bg-[#0A0A0A] bg-[url('/images/our-expertise-bg.png')] bg-contain bg-right-bottom bg-no-repeat bg-[length:60%]">
            <div className="lg:flex block items-center justify-between w-full">
                <h2 className="lg:text-[56px] md:text-[40px] text-[36px] lg:mb-8 mb-4 text-white font-bold leading-tight">Our Expertise</h2>
                <a href="#" className="inline-block lg:text-[18px] md:text-[18px] text-[16px] leading-tight font-semibold lg:py-4 lg:px-14 md:py-14 py-3 px-5 md:px-14 mb-8 text-[#D50000] border-[1.8px] lg:rounded-xl md:rounded-xl rounded-lg border-[#D50000]">Explore</a>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                <div className="border border-white hover:border-transparent transition-all duration-500 rounded-2xl relative overflow-hidden group">
                    <img 
                        src="/images/realtime-hair.png" 
                        alt="realtime-hair" 
                        className="rounded-2xl object-cover w-full h-full" 
                    />

                    {/* SMOOTH OVERLAY */}
                    <div
                        className="
                        bg-[#000000CC]
                        absolute -top-1/2 -left-1/2
                        h-[800px] w-[800px]
                        -rotate-[22deg]
                        translate-x-0 translate-y-0
                        transition-transform duration-[600ms] ease-[cubic-bezier(0.75,0,0.25,1)]
                        group-hover:translate-x-[120%] group-hover:translate-y-[120%]
                        "
                    ></div>

                    {/* TEXT SLIDES DOWN SMOOTHLY */}
                    <h2
                        className="
                        text-white text-2xl font-bold text-center
                        absolute top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2
                        transition-all duration-[650ms] ease-[cubic-bezier(0.75,0,0.25,1)]
                        group-hover:translate-y-60
                        "
                    >
                        Realtime Hair
                    </h2>
                </div>

                <div className="border border-white hover:border-transparent transition-all duration-700 rounded-2xl relative overflow-hidden group">
                    <img 
                        src="/images/realtime-hair.png" 
                        alt="realtime-hair" 
                        className="rounded-2xl object-cover w-full h-full" 
                    />

                    <div
                        className="
                        bg-[#000000CC]
                        absolute -top-1/2 -left-1/2
                        h-[800px] w-[800px]
                        -rotate-[22deg]
                        translate-x-0 translate-y-0
                        transition-transform duration-[600ms] ease-[cubic-bezier(0.75,0,0.25,1)]
                        group-hover:translate-x-[120%] group-hover:translate-y-[120%]
                        "
                    ></div>

                    {/* TEXT SLIDES DOWN SMOOTHLY */}
                    <h2
                        className="
                        text-white text-2xl font-bold text-center
                        absolute top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2
                        transition-all duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                        group-hover:translate-y-60
                        "
                    >
                        Realtime Hair
                    </h2>
                </div>

                <div className="border border-white hover:border-transparent transition-all duration-700 rounded-2xl relative overflow-hidden group">
                    <img 
                        src="/images/realtime-hair.png" 
                        alt="realtime-hair" 
                        className="rounded-2xl object-cover w-full h-full" 
                    />

                    <div
                        className="
                        bg-[#000000CC]
                        absolute -top-1/2 -left-1/2
                        h-[800px] w-[800px]
                        -rotate-[22deg]
                        translate-x-0 translate-y-0
                        transition-transform duration-[600ms] ease-[cubic-bezier(0.75,0,0.25,1)]
                        group-hover:translate-x-[120%] group-hover:translate-y-[120%]
                        "
                    ></div>

                    {/* TEXT SLIDES DOWN SMOOTHLY */}
                    <h2
                        className="
                        text-white text-2xl font-bold text-center
                        absolute top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2
                        transition-all duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                        group-hover:translate-y-60
                        "
                    >
                        Realtime Hair
                    </h2>
                </div>

                <div className="border border-white hover:border-transparent transition-all duration-700 rounded-2xl relative overflow-hidden group">
                    <img 
                        src="/images/realtime-hair.png" 
                        alt="realtime-hair" 
                        className="rounded-2xl object-cover w-full h-full" 
                    />

                    {/* SMOOTH OVERLAY */}
                   <div
                        className="
                        bg-[#000000CC]
                        absolute -top-1/2 -left-1/2
                        h-[800px] w-[800px]
                        -rotate-[22deg]
                        translate-x-0 translate-y-0
                        transition-transform duration-[600ms] ease-[cubic-bezier(0.75,0,0.25,1)]
                        group-hover:translate-x-[120%] group-hover:translate-y-[120%]
                        "
                    ></div>

                    {/* TEXT SLIDES DOWN SMOOTHLY */}
                    <h2
                        className="
                        text-white text-2xl font-bold text-center
                        absolute top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2
                        transition-all duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                        group-hover:translate-y-60
                        "
                    >
                        Realtime Hair
                    </h2>
                </div>

                <div className="border border-white hover:border-transparent transition-all duration-700 rounded-2xl relative overflow-hidden group">
                    <img 
                        src="/images/realtime-hair.png" 
                        alt="realtime-hair" 
                        className="rounded-2xl object-cover w-full h-full" 
                    />

                    {/* SMOOTH OVERLAY */}
                    <div
                        className="
                        bg-[#000000CC]
                        absolute -top-1/2 -left-1/2
                        h-[800px] w-[800px]
                        -rotate-[22deg]
                        translate-x-0 translate-y-0
                        transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                        group-hover:translate-x-[120%] group-hover:translate-y-[120%]
                        "
                    ></div>

                    {/* TEXT SLIDES DOWN SMOOTHLY */}
                    <h2
                        className="
                        text-white text-2xl font-bold text-center
                        absolute top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2
                        transition-all duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]
                        group-hover:translate-y-60
                        "
                    >
                        Realtime Hair
                    </h2>
                </div>
                
            </div>
        </section>
    )
}