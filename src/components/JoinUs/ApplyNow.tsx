import React from 'react'

const ApplyNow = () => {
  return (
    <section className="bg-[url('/images/contact-section-bg.png'),_linear-gradient(89deg,#0A0A0A,#03010E)] lg:p-16 md:p-16 p-8 bg-contain bg-no-repeat xl:bg-[90%] lg:bg-[90%] bg-[100%] bg-fixed">
        <div className='flex w-full items-center'>
            <h2 className='reveal lg:text-[58px] md:text-[45px] text-[33px] text-white leading-base font-bold'>Apply <span className='text-[#D50000]'>Now</span></h2>
            <span className='reveal ps-4'><img src="./images/icons/right-arrow (1).png" alt="right-arrow" className='lg:w-[62px] lg:h-[55px] md:w-[62px] md:h-[55px] w-[32px] h-[25px] object-contain' /></span>
        </div>
        <div className='py-16'>
            <h5 className='reveal lg:text-[32px] md:text-[25px] text-[22px] leading-base font-base my-4'>Drop us a mail at:</h5>
            <div className='group'>
            <a href='mailto:career@hexarstudios.com' className='group-hover:bg-transparent group-hover:border-white transition-all duration-500 ease-in-out reveal bg-[#D50000] border-[0.5px] border-transparent p-2 my-4 inline-block text-white lg:text-[32px] md:text-[25px] text-[22px] leading-base font-base'>career@hexarstudios.com</a>
            </div>
        </div>
    </section>
  )
}

export default ApplyNow