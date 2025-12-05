export default function Solution(){
    return(
        <section className="solution-section h-full w-full bg-[url('/images/end-to-end-bg.png')] bg-no-repeat bg-right-top bg-[length:900px] bg-cover">
            <div className="flex items-center lg:p-16 p-8">
                <div className="lg:w-[65%] w-full">
                    <h2 className="mb-8 text-[56px] text-white font-bold leading-tight"><span className="text-[#D50000]">End-to-End </span>3D Art Solutions for Film, Games & Beyond</h2>
                    <div className="lg:w-[62%] w-full">
                        <p className="my-6 text-[15px] font-light leading-base">We partner with leading studios, game developers, and production houses worldwide to craft exceptional 3D art that stands out. From the spark of a 2D concept to high-resolution sculpts, highly detailed VFX assets and fully optimized in-game assets, our pipeline blends artistic passion with technical mastery. </p>

                        <p className="my-6 text-[15px] font-light leading-base">Every project is executed through a secure, efficient, and collaborative workflow, ensuring that your vision transforms into a tangible, visually stunning reality — on time, on spec, and beyond expectation.</p>

                    </div>

                    <div className="lg:flex block items-center justify-center lg:w-[90%] lg:my-[10%]">
                      
                            <div className="lg:w-[33.3%] lg:mt-8 lg:flex lg:flex-col items-center justify-center border-r">
                                    <img src="./images/icons/Icon-Pre 1.png" alt="pre-production" />
                                    <h4 className="text-[22px] leading-tight font-light mt-4">Pre-Production</h4>
                            </div>
                            <div className="lg:w-[33.3%] lg:mt-8 lg:flex lg:flex-col items-center justify-center border-r">
                               
                                    <img src="./images/icons/Icon-Prod 1.png" alt="production" />
                                    <h4 className="text-[22px] leading-tight font-light mt-4">Production</h4>
                               
                            </div>
                            <div className="lg:w-[33.3%] lg:mt-8 lg:flex lg:flex-col items-center justify-center">
                               
                                    <img src="./images/icons/Icon-Post 1.png" alt="post-production" />
                                    <h4 className="text-[22px] leading-tight font-light mt-4">Post-Production</h4>
                               
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}