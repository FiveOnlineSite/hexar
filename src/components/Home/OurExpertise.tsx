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
                <h2 className="reveal lg:text-[56px] md:text-[40px] text-[36px] lg:mb-8 mb-4 text-white font-bold leading-tight">Our Expertise</h2>
                <a href="#" className="reveal inline-block lg:text-[18px] md:text-[18px] text-[16px] leading-tight font-semibold lg:py-4 lg:px-14 py-3 px-5 mb-8 text-[#D50000] border-[1.8px] lg:rounded-xl md:rounded-xl rounded-lg border-[#D50000]">Explore</a>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 reveal-stagger">
               <div className="relative overflow-hidden rounded-2xl border border-white hover:border-transparent transition-all duration-500 group">

                <img
                    src="/images/realtime-hair.png"
                    alt="realtime-hair"
                    className="relative z-0 w-full h-full object-cover rounded-2xl"
                />

                {/* Overlay */}
                <div
                    className="
                    absolute inset-0
                    z-10
                    bg-black/80
                    rotate-[-22deg]
                    scale-[1.4]
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-x-[120%]
                    group-hover:translate-y-[120%]
                    "
                />

                {/* Text */}
                <h2
                    className="
                    absolute inset-0
                    z-20
                    flex items-center justify-center
                    text-white 3xl:text-[40px] 2xl:text-[30px] text-[25px] font-bold
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-y-[380px]
                    group-hover:3xl:translate-y-[480px]
                    "
                >
                    Realtime Hair
                </h2>

                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white hover:border-transparent transition-all duration-500 group">

                <img
                    src="/images/realtime-hair.png"
                    alt="realtime-hair"
                    className="relative z-0 w-full h-full object-cover rounded-2xl"
                />

                {/* Overlay */}
                <div
                    className="
                    absolute inset-0
                    z-10
                    bg-black/80
                    rotate-[-22deg]
                    scale-[1.4]
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-x-[120%]
                    group-hover:translate-y-[120%]
                    "
                />

                {/* Text */}
                <h2
                    className="
                    absolute inset-0
                    z-20
                    flex items-center justify-center
                    text-white 3xl:text-[40px] 2xl:text-[30px] text-[25px] font-bold
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-y-[380px]
                    group-hover:3xl:translate-y-[480px]
                    "
                >
                    Realtime Hair
                </h2>

                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white hover:border-transparent transition-all duration-500 group">

                <img
                    src="/images/realtime-hair.png"
                    alt="realtime-hair"
                    className="relative z-0 w-full h-full object-cover rounded-2xl"
                />

                {/* Overlay */}
                <div
                    className="
                    absolute inset-0
                    z-10
                    bg-black/80
                    rotate-[-22deg]
                    scale-[1.4]
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-x-[120%]
                    group-hover:translate-y-[120%]
                    "
                />

                {/* Text */}
                <h2
                    className="
                    absolute inset-0
                    z-20
                    flex items-center justify-center
                    text-white 3xl:text-[40px] 2xl:text-[30px] text-[25px] font-bold
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-y-[380px]
                    group-hover:3xl:translate-y-[480px]
                    "
                >
                    Realtime Hair
                </h2>

                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white hover:border-transparent transition-all duration-500 group">

                <img
                    src="/images/realtime-hair.png"
                    alt="realtime-hair"
                    className="relative z-0 w-full h-full object-cover rounded-2xl"
                />

                {/* Overlay */}
                <div
                    className="
                    absolute inset-0
                    z-10
                    bg-black/80
                    rotate-[-22deg]
                    scale-[1.4]
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-x-[120%]
                    group-hover:translate-y-[120%]
                    "
                />

                {/* Text */}
                <h2
                    className="
                    absolute inset-0
                    z-20
                    flex items-center justify-center
                    text-white 3xl:text-[40px] 2xl:text-[30px] text-[25px] font-bold
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-y-[380px]
                    group-hover:3xl:translate-y-[480px]
                    "
                >
                    Realtime Hair
                </h2>

                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white hover:border-transparent transition-all duration-500 group">

                <img
                    src="/images/realtime-hair.png"
                    alt="realtime-hair"
                    className="relative z-0 w-full h-full object-cover rounded-2xl"
                />

                {/* Overlay */}
                <div
                    className="
                    absolute inset-0
                    z-10
                    bg-black/80
                    rotate-[-22deg]
                    scale-[1.4]
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-x-[120%]
                    group-hover:translate-y-[120%]
                    "
                />

                {/* Text */}
                <h2
                    className="
                    absolute inset-0
                    z-20
                    flex items-center justify-center
                    text-white 3xl:text-[40px] 2xl:text-[30px] text-[25px] font-bold
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-y-[380px]
                    group-hover:3xl:translate-y-[480px]
                    "
                >
                    Realtime Hair
                </h2>

                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white hover:border-transparent transition-all duration-500 group">

                <img
                    src="/images/realtime-hair.png"
                    alt="realtime-hair"
                    className="relative z-0 w-full h-full object-cover rounded-2xl"
                />

                {/* Overlay */}
                <div
                    className="
                    absolute inset-0
                    z-10
                    bg-black/80
                    rotate-[-22deg]
                    scale-[1.4]
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-x-[120%]
                    group-hover:translate-y-[120%]
                    "
                />

                {/* Text */}
                <h2
                    className="
                    absolute inset-0
                    z-20
                    flex items-center justify-center
                    text-white 3xl:text-[40px] 2xl:text-[30px] text-[25px] font-bold
                    transition-transform duration-[700ms]
                    ease-[cubic-bezier(0.65,0,0.35,1)]
                    group-hover:translate-y-[380px]
                    group-hover:3xl:translate-y-[480px]
                    "
                >
                    Realtime Hair
                </h2>

                </div>
            </div>
        </section>
    )
}