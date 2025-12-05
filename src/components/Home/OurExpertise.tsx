export default function OurExpertise(){
    return (
        <section className="our-expertise-seciton p-16 bg-[#0A0A0A] bg-[url('/images/our-expertise-bg.png')] bg-contain bg-right-bottom bg-no-repeat">
            <div className="flex items-center justify-between w-full">
                <h2 className="mb-8 text-[56px] text-white font-bold leading-tight">Our Expertise</h2>
                <a href="#" className="text-[18px] leading-tight font-semibold py-4 px-14 text-[#D50000] border-[1.8px] rounded-xl border-[#D50000]">Explore</a>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="border rounded-2xl relative overflow-hidden group">
  <img 
    src="/images/realtime-hair.png" 
    alt="realtime-hair" 
    className="rounded-2xl object-cover w-full h-full" 
  />

  {/* FIXED OVERLAY */}
  <div className="
   bg-[#000000CC] absolute top-0 left-0 flex items-center justify-center rounded-2xl h-[110%] w-[110%] -rotate-[22deg] group-hover:translate-x-[150%] group-hover:translate-y-[150%] transition-transform duration-500 ease-out translate-x-0 translate-y-0
  ">

    {/* TEXT SLIDES DOWN ON HOVER */}
    <h2 
      className="
        text-white text-2xl font-bold
        absolute 
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        transition-all duration-500 ease-out
        
        group-hover:translate-y-60  /* slide text downward */
      "
    >
      Realtime Hair
    </h2>

  </div>
</div>



                <div className="border rounded-2xl">
                    <img src="/images/realtime-hair.png" alt="realtime-hair" className="rounded-2xl" />
                </div>

                <div className="border rounded-2xl">
                    <img src="/images/realtime-hair.png" alt="realtime-hair" className="rounded-2xl" />
                </div>

                <div className="border rounded-2xl">
                    <img src="/images/realtime-hair.png" alt="realtime-hair" className="rounded-2xl" />
                </div>

                <div className="border rounded-2xl">
                    <img src="/images/realtime-hair.png" alt="realtime-hair" className="rounded-2xl" />
                </div>

                <div className="border rounded-2xl">
                    <img src="/images/realtime-hair.png" alt="realtime-hair" className="rounded-2xl" />
                </div>
            </div>
        </section>
    )
}