type ContactSectionProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function ContactSection ({ id, ...rest }: ContactSectionProps){
    return (
   <section id={id} {...rest}
  className="
    relative
    w-full
    lg:h-[590px] h-full
    bg-[url('/images/contact-section-bg.png'),_linear-gradient(89deg,#0A0A0A,#03010E)]
    bg-contain bg-no-repeat xl:bg-[90%] lg:bg-[90%] bg-[100%]
    p-8 lg:p-16 bg-fixed border-white border-b
  "
>
    <div className="w-full flex flex-col items-start justify-center lg:h-[590px] h-full">
        <h2 className="reveal xl:text-[58px] lg:text-[58px] md:text-[45px] text-[33px] text-white font-bold leading-base">
            Say <span className="text-[#D50000]">Hello</span>! &<br /> Let’s Create Together
        </h2>

<div className="group mt-16">
        <a href="#" className="reveal inline-block lg:px-10 md:px-8 px-6 lg:py-5 md:py-4 py-3 rounded-xl border border-transparent group-hover:bg-transparent bg-[#D50000] group-hover:border-[#D50000] group-hover:text-[#D50000] lg:text-[20px] md:text-[18px] text-[16px] leading-base font-semibold transition-all duration-500 ease-in-out">
            Contact Us
        </a>
</div>
        
    </div>
</section>


    )
}