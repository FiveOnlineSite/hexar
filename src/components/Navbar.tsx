"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="navbar-section w-full block">
      {/* Top Bar */}
      <div className="flex items-center justify-between lg:px-16 md:px-8 px-4 py-5 w-full fixed top-0 left-0 z-50">
        <img
          src="/images/icons/hexar-logo.png"
          alt="logo"
          className="h-[60px] md:h-[70px] w-auto"
        />

        <button onClick={() => setOpen(true)} className="relative z-50">
          <img src="/images/icons/menu-line.png" className="h-8 w-auto" />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-screen max-w-[100vw] bg-black shadow-lg z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="px-8 py-6 flex justify-between items-center">
          <img src="/images/icons/hexar-logo.png" alt="logo" className="h-[70px] w-auto" />

          <button onClick={() => setOpen(false)} className="text-[30px] font-bold text-white">
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-8 space-y-3">
          {["Home", "About Us", "Services", "Portfolio", "Contact", "Blogs"].map((item) => (
            <a
              key={item}
              href="#"
              className="group flex items-center text-white text-[24px] font-semibold py-2"
            >
              <img
                src="/images/icons/hexar-small-logo.png"
                className="w-[35px] h-[35px] opacity-0 -translate-x-10 
                  group-hover:opacity-100 group-hover:translate-x-4 
                  transition-all duration-500"
              />
              <span className="transition-all duration-500 group-hover:translate-x-4">
                {item}
              </span>
            </a>
          ))}
        </div>

        {/* Footer Logo */}
        <img
          src="/images/icons/tpn-logo.png"
          alt="tpn-logo"
          className="mx-8 mt-10 w-[140px] h-[70px] object-cover"
        />
      </div>
    </section>
  );
}
