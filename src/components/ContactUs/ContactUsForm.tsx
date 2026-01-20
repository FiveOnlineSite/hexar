"use client";
import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsForm = () => {

    const recaptchaRef = React.useRef<ReCAPTCHA>(null);
    const [captchaToken, setCaptchaToken] = React.useState<string | null>(null);
    const [error, setError] = React.useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if(!captchaToken) {
        setError("Please complete the reCAPTCHA");
        return;
      }
      
      if(recaptchaRef.current) {
        const token = await recaptchaRef.current.executeAsync();
        console.log("reCAPTCHA token:", token);
    }}
  return (
    <section className='contact-form-section bg-[url("/images/contact-page-bg.png")] bg-contain bg-right bg-no-repeat lg:p-16 md:p-16 p-8'>
        <div className='lg:flex block items-start justify-center lg:w-[80%] w-full mx-auto gap-16 my-8'>
            <div className='lg:w-[35%] w-full'>
                <h2 className='reveal 3xl:text-[50px] 2xl:text-[45px] xl:text-[40px] lg:text-[40px] md:text-[35px] text-[30px] font-bold leading-tight'>Contact Us</h2>
                <p className="reveal mt-2 pr-8 3xl:text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px] text-[15px] font-light leading-base">Please fill out the form and we'll get back to you as soon as possible.</p>
                <img src="./images/contact-form-bg.png" alt="contact-form" className='reveal w-full h-full object-contain mt-8' />
            </div>
            <div className='lg:w-[65%] w-full reveal'>
                <form onSubmit={handleSubmit}>
                    <div className="px-[3px] rounded-md mb-3">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 rounded-md bg-[#CCCCCC] lg:text-[19px] md:text-[17px] text-[15px] font-semibold text-black placeholder:text-black outline-none"
                    />
                    </div>

                    <div className="px-[3px] rounded-md mb-3"> 
                    <input type="email" 
                    placeholder='Email' 
                     className="w-full p-3 rounded-md bg-[#CCCCCC] lg:text-[19px] md:text-[18px] text-[16px] font-semibold text-black placeholder:text-black outline-none"
                    /></div>

                    <div className="px-[3px] rounded-md mb-3">
                    <input type="text" 
                    placeholder='Company' 
                     className="w-full p-3 rounded-md bg-[#CCCCCC] lg:text-[19px] md:text-[18px] text-[16px] font-semibold text-black placeholder:text-black outline-none"
                    /></div>

                    <div className="px-[3px] rounded-md mb-3">
                    <textarea 
                    placeholder='Message' 
                    rows={4}
                     className="w-full p-3 rounded-md bg-[#CCCCCC] lg:text-[19px] md:text-[18px] text-[16px] font-semibold text-black placeholder:text-black outline-none"
                    ></textarea>
                    </div>

                    <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={(token: React.SetStateAction<string | null>) => {
          setCaptchaToken(token);
          setError("");
        }}
      />

      {error && <p className="text-red-500 mt-2">{error}</p>}

                    
                    <button type="submit" className='bg-[#D50000] text-white lg:text-[19px] md:text-[19px] text-[16px] font-semibold px-14 py-3 rounded-lg mt-5 inline-block'>Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactUsForm