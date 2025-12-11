export default function ContactSection ({ id, ...rest }){
    return (
   <section id={id} {...rest}
  className="
    relative
    w-full
    h-[590px]
    bg-[url('/images/contact-section-bg.png'),_linear-gradient(89deg,#0A0A0A,#03010E)]
    bg-contain bg-no-repeat xl:bg-[90%] lg:bg-[90%] bg-[100%]
    p-8 lg:p-16 bg-fixed
  "
>
    <div className="w-full flex flex-col items-start justify-center h-[590px]">
        <h2 className="xl:text-[58px] lg:text-[58px] md:text-[45px] text-[33px] text-white font-bold leading-base">
            Say <span className="text-[#D50000]">Hello</span>! &<br /> Let’s Create Together
        </h2>

        <a href="#" className="lg:px-10 px-8 lg:py-5 py-4 rounded-xl mt-16 bg-[#D50000] lg:text-[20px] md:text-[18px] leading-base font-semibold">
            Contact Us
        </a>
    </div>
</section>


    )
}