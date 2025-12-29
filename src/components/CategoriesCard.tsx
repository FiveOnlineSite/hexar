"use client";

export default function CategoriesCard({
  id,
  title,
  image,
  isOpen,
  onToggle,
}) {
  return (
    <div className="category-card border-[#FFFFFF14] border-[3px] rounded-2xl relative group mt-16 mb-32">
      <div className="p-4 bg-[#0A0A0A]  group-hover:bg-[#000] rounded-2xl transition-all duration-500 shadow-none group-hover:shadow-[0_16px_20px_#00000040]">

        {/* HEADER */}
        <div className="lg:w-[45%] w-full pl-8 py-8">
          <h2 className="text-[40px] pb-5 font-bold leading-base">{title}</h2>
          <p className="text-[18px] pb-10 mb-10 font-normal leading-base">
            From realistic humans to stylized heroes, we deliver detailed,
            production-ready character models tailored to your project’s style
            and pipeline
          </p>

          <div className="flex items-center w-full mt-6">
            <a href="#" className="border-[#D50000] border-[2px] px-8 py-3 text-[19px] font-semibold text-[#D50000] rounded-xl transition-all duration-500 bg-[#0A0A0A] group-hover:bg-[#D50000] group-hover:text-[#fff]">View Portfolio</a>
                    

            {/* UP ARROW */}
           
          </div>
        </div>

      <div className="w-full">
        <button
          onClick={onToggle}
          className={`absolute bottom-[5%] left-1/2 -translate-x-1/2 transition-opacity z-20 transition-all duration-500 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
                <img src="./images/icons/arrow-down.png" className="h-full w-full object-contain" />

        </button>
        </div>

              <div className={`transition-all duration-500 ${isOpen ? "lg:absolute absolute group-hover:lg:right-0 bottom-0 right-0" : "lg:absolute relative lg:group-hover:right-[8%] right-0 bottom-0"} z-10`}>
                    <img src={image} className="h-full w-full object-contain" />
            </div>

<div className="w-full">
          <button
              onClick={onToggle}
              className={`transition-opacity absolute bottom-[1%] left-1/2 -translate-x-1/2 z-10 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
                <img src="./images/icons/arrow-up.png" alt="" />

            </button>
</div>

        {/* PROCESS SECTION */}
        <div
          className={`
            process-div
            transition-all duration-700 ease-in-out
            overflow-hidden
            ${isOpen ? "max-h-[2000px] opacity-100 mt-20" : "max-h-0 opacity-0"}
          `}
        >
           <svg
            className="absolute top-[30%] left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 3200"
            preserveAspectRatio="none"
            >
            <path
                d="
                M 350, 150 
                C 350, 300 650, 400 650, 550
                C 650, 700 350, 800 350, 950
                C 350, 1100 650, 1200 650, 1350
                "
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="15 15" /* This creates the dashed effect */
                className={`transition-opacity duration-500 ${
                isOpen ? "opacity-100 animate-process-line" : "opacity-0"
                }`}
            />
            </svg>

                        <h3 className="text-[36px] font-semibold leading-base ms-8">The Process</h3>
                        <div className="my-16 flex items-center justify-center">
                            <div className="lg:w-[55%] w-full flex lg:items-center md:items-center items-start justify-evenly">
                                <div className="mx-4 z-10 bg-[#333333] rounded-full flex items-center justify-center lg:w-[190px] lg:h-[190px] md:w-[190px] md:h-[190px] sm:w-[140px] sm:h-[140px] w-[100px] h-[100px]">
                                <img src="./images/icons/pre-production-icon.png" alt="pre-production" className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] object-contain"/>
                                </div>
                                <div className="px-4 w-[50%]">
                                    <h6 className="text-[16px] font-light leading-base">Step 01</h6>
                                    <h4 className="text-[20px] font-semibold leading-base py-2">Pre-Production</h4>
                                    <p className="text-[16px] font-light leading-base">Gathering references and defining technical specifications.</p>
                                </div>
                            </div>

                        </div>


                         <div className="my-16 flex items-center justify-center">
                            <div className="lg:w-[55%] w-full flex lg:items-center md:items-center items-start justify-evenly">
                                
                                <div className="px-4 w-[50%]">
                                    <h6 className="text-[16px] font-light leading-base">Step 02</h6>
                                    <h4 className="text-[20px] font-semibold leading-base py-2">Modeling</h4>
                                    <p className="text-[16px] font-light leading-base">Creating high-quality 3D models based on the approved concept.</p>
                                </div>
                                <div className="mx-4 z-10 bg-[#333333] rounded-full flex items-center justify-center lg:w-[190px] lg:h-[190px] md:w-[190px] md:h-[190px] sm:w-[140px] sm:h-[140px] w-[100px] h-[100px]">
                                <img src="./images/icons/modeling-icon.png" alt="modeling" className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] object-contain"/>
                                </div>
                            </div>

                        </div>

                         <div className="my-16 flex items-center justify-center">
                            <div className="lg:w-[55%] w-full flex lg:items-center md:items-center items-start justify-evenly">
                                <div className="mx-4 z-10 bg-[#333333] rounded-full flex items-center justify-center lg:w-[190px] lg:h-[190px] md:w-[190px] md:h-[190px] sm:w-[140px] sm:h-[140px] w-[100px] h-[100px]">
                                <img src="./images/icons/texturing-icon.png" alt="pre-production" className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] object-contain"/>
                                </div>
                                <div className="px-4 w-[50%]">
                                    <h6 className="text-[16px] font-light leading-base">Step 03</h6>
                                    <h4 className="text-[20px] font-semibold leading-base py-2">Texturing</h4>
                                    <p className="text-[16px] font-light leading-base">Applying textures to enhance the realism of the 3D models.</p>
                                </div>
                            </div>

                        </div>

                         <div className="my-16 mb-[400px] flex items-center justify-center">
                            <div className="lg:w-[55%] w-full flex lg:items-center md:items-center items-start justify-evenly">
                                
                                <div className="px-4 w-[50%]">
                                    <h6 className="text-[16px] font-light leading-base">Step 04</h6>
                                    <h4 className="text-[20px] font-semibold leading-base py-2">Integration</h4>
                                    <p className="text-[16px] font-light leading-base">Implementing the optimised 3D assets into the game engine.</p>
                                </div>
                                <div className="mx-4 z-10 bg-[#333333] rounded-full flex items-center justify-center lg:w-[190px] lg:h-[190px] md:w-[190px] md:h-[190px] sm:w-[140px] sm:h-[140px] w-[100px] h-[100px]">
                                <img src="./images/icons/integration-icon.png" alt="integration" className="lg:w-[150px] lg:h-[150px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] object-contain"/>
                                </div>
                            </div>

                        </div>
        </div>
      </div>
    </div>
  );
}
