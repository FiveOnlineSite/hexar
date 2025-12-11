"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="navbar-section">
      <div className="flex items-center justify-between lg:px-16 md:px-8 px-8 py-6 w-full absolute top-0 right-0 z-50">
        <img src="/images/icons/hexar-logo.png" alt="logo" className="h-[86px] w-auto" />

        <button onClick={() => setOpen(true)} className="relative">
          <img src="/images/icons/menu-line.png" className="h-8 w-auto" />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full bg-black shadow-lg z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="lg:px-16 md:px-8 px-8 py-6 flex justify-between items-center">
           <img src="/images/icons/hexar-logo.png" alt="logo" className="h-[86px] w-auto" />
          <button onClick={() => setOpen(false)} className="text-[30px] font-bold text-white">
            ✕
          </button>
        </div>

        <div className="lg:px-16 md:px-8 px-0 space-y-2">
  {[
    "Home",
    "About Us",
    "Services",
    "Portfolio",
    "Contact",
    "Blogs",
  ].map((item) => (
    <a
      key={item}
      href="#"
      className="group flex items-center text-white text-[30px] leading-tight font-semibold py-2 overflow-hidden"
    >
      {/* LOGO - slides in from left */}
      <img
        src="/images/icons/hexar-small-logo.png"
        className="
          w-[40px] h-[40px]
          opacity-0
          -translate-x-10
          group-hover:opacity-100 
          group-hover:translate-x-6
          transition-all
          duration-500
          ease-out
        "
      />

      <span
        className="
          transition-all
          duration-500
          ease-out
          group-hover:translate-x-[35px]
          translate-x-0
        "
      >
        {item}
      </span>
    </a>
  ))}
  
</div>
<img src="/images/icons/tpn-logo.png" alt="tpn-logo" className="lg:mx-16 md:mx-8 mx-8 mt-5 w-[158px] h-[75px] object-cover"/>
      </div>
    </section>
  );
}
