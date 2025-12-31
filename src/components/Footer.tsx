export default function Footer () {
    return (
        <section className="footer-section bg-[#fff] lg:py-16 lg:px-20 p-8">
            <div className="grid lg:grid-cols-4 lg:items-start justify-start md:items-center md:grid-cols-2 grid-cols-1 gap-5">
                <div className="footer-logo flex flex-col lg:items-center md:items-center items-start justify-start">
                    <img src="/images/icons/footer-logo.png" alt="footer-logo" className="w-[271px] h-[177px] object-contain" />
                    <p className="text-[15px] text-[#0A0A0A] font-base leading-base mt-4">Hexar Studios is the parent company of Ares and Head Hoppers Studios.</p>
                </div>

                <div className="services flex flex-col lg:items-center md:items-center items-start justify-start">
                    <h5 className="text-center text-[#0A0A0A] text-[20px] font-semibold leading-base">Services</h5>
                    <div className="grid grid-cols-2 gap-4" >
                        <ul className="pt-4">
                            <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">Props/ Weapon’s</a>
                            </li>
                             <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">Stylized Art</a>
                            </li>
                             <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">Concept Art</a>
                            </li>
                        </ul>
                        <ul className="pt-4">
                            <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">Realtime Hair</a>
                            </li>
                             <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">3D Characters</a>
                            </li>
                             <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">Animation</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="quick-links flex flex-col lg:items-center md:items-center items-start justify-start">
                    <h5 className="text-center text-[#0A0A0A] text-[20px] font-semibold leading-base">Quick Links</h5>
                    <div className="grid grid-cols-2 gap-4" >
                        <ul className="pt-4">
                            <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">Home</a>
                            </li>
                             <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">About Us</a>
                            </li>
                             <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">Services</a>
                            </li>
                            <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">Blogs</a>
                            </li>
                        </ul>
                        <ul className="pt-4">
                            <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">Contact Us</a>
                            </li>
                             <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">Portfolio</a>
                            </li>
                             <li className="list-none py-1">
                                <a href="#" className="text-[16px] text-[#0A0A0A] font-base leading-base">Join Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="tpn-logo flex flex-col items-start justify-start">
                    <img src="/images/icons/footer-tpn-logo.png" alt="footer-logo" className="w-[271px] h-full object-contain" />
                            
                    <div className="contact-links">
                        <a href="contact@hexarstudios.com" className="text-[15px] font-semibold text-[#0A0A0A] leading-base">contact@hexarstudios.com</a>
                        <div className="text-[15px] font-semibold text-[#0A0A0A] leading-base flex items-center justify-start"><h6>Phone:-</h6><a href="+918008378964">+91 8008378964</a></div>
                    </div>

                    <div className="social-links flex items-center justify-start mt-5">
                        <a href="#" className="w-[30px] h-[30px] bg-[#0A0A0A] rounded-full flex justify-center items-center mr-2">
                            <img src="./images/icons/Instagram.png" alt="instagram" className="w-[20px] h-[20px] object-contain"/>
                        </a>
                        <a href="#" className="w-[30px] h-[30px] bg-[#0A0A0A] rounded-full flex justify-center items-center mr-2">
                            <img src="./images/icons/YouTube.png" alt="instagram" className="w-[20px] h-[20px] object-contain"/>
                        </a>
                        <a href="#" className="w-[30px] h-[30px] bg-[#0A0A0A] rounded-full flex justify-center items-center mr-2">
                            <img src="./images/icons/Facebook.png" alt="instagram" className="w-[20px] h-[20px] object-contain"/>
                        </a>
                        <a href="#" className="w-[30px] h-[30px] bg-[#0A0A0A] rounded-full flex justify-center items-center mr-2">
                            <img src="./images/icons/X.png" alt="instagram" className="w-[20px] h-[20px] object-contain"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}