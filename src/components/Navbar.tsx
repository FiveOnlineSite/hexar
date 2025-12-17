"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (e: any) => {
      if (e.target.closest("[data-no-blast]")) return;
      // blast effect would run here (but NOT on navbar)
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <section data-no-blast className="navbar-section">

      <div className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between lg:px-16 px-8 py-6">
        <img src="/images/icons/hexar-logo.png" className="h-[70px]" />

        <button onClick={() => setOpen(true)} data-no-blast>
          <img src="/images/icons/menu-line.png" className="h-8" />
        </button>
      </div>

      <div
        className={`
          fixed top-0 right-0 h-full w-full bg-black z-[80]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        data-no-blast
      >
        <div className="px-8 py-6 flex justify-between items-center" data-no-blast>
          <img src="/images/icons/hexar-logo.png" className="h-[70px]" />

          <button
            onClick={() => setOpen(false)}
            className="text-[30px] font-bold text-white"
            data-no-blast
          >
            ✕
          </button>
        </div>

        <div className="px-8 space-y-4">
          {["Home","About Us","Services","Portfolio","Contact","Blogs"].map((item) => (
            <a
              key={item}
              href="#"
              className="group flex items-center text-white text-[20px] font-semibold"
              data-no-blast
            >
              <img
                src="/images/icons/hexar-small-logo.png"
                className="w-[40px] h-[40px] opacity-0 -translate-x-10 
                group-hover:opacity-100 group-hover:translate-x-6
                transition-all duration-500"
                data-no-blast
              />

              <span className="transition-all duration-500 group-hover:translate-x-[35px]" data-no-blast>
                {item}
              </span>
            </a>
          ))}
        </div>

        <img
          src="/images/icons/tpn-logo.png"
          className="mx-8 mt-8 w-[140px]"
          data-no-blast
        />
      </div>
    </section>
  );
}
