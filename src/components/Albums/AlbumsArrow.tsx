// "use client"

// import { useEffect, useState } from "react"
// import { categories } from "@/src/data/categories"
// import AlbumsBox from "../AlbumsBox"

// interface Album {
//   id: number;
//   album_img: string;
//   slug: string;
// }

// interface AlbumsArrowProps {
//   categorySlug: string;
//   albums: Album[];
// }

// export default function AlbumsArrow({categorySlug, albums}: AlbumsArrowProps){
      
//     const [openAlbums, setOpenAlbums] = useState(false)

//     return (
//         <>
        
//         <button className={` z-20 ${openAlbums ? "absolute left-0 top-1/2" : "absolute top-1/2 right-[2%]"}`}   onClick={() => setOpenAlbums((prev) => !prev)}>
//             <img src="/images/icons/albums-arrow.png" alt="albums-arrow" className={`w-full h-full object-contain transition-transform duration-300 ${
//             openAlbums ? "rotate-180" : ""
//           }`} />
//         </button>
//         {openAlbums && (
//             <div className={`bg-[#666666CC] h-screen w-[50%] flex justify-start overflow-y-scroll right-0 top-0 z-10 ${openAlbums ? "relative" : "absolute"}`}>
//             <div className="grid grid-cols-2 gap-1 w-[70%] pt-16 ps-16">
//                 <AlbumsBox categorySlug={categorySlug} albums={albums}/>
//             </div>
//         </div>
//         )}
        
//         </>
        
//     )
// }

"use client";

import { useState } from "react";
import AlbumsBox from "../AlbumsBox";

interface Album {
  id: number;
  album_img: string;
  slug: string;
}

interface AlbumsArrowProps {
  categorySlug: string;
  albums: Album[];
}

export default function AlbumsArrow({ categorySlug, albums }: AlbumsArrowProps) {
  const [openAlbums, setOpenAlbums] = useState(false);

  return (
    <>
      {/* CLOSED STATE ARROW (viewport right) */}
      {!openAlbums && (
        <button
          className="fixed top-1/2 right-[2%] z-30 -translate-y-1/2"
          onClick={() => setOpenAlbums(true)}
        >
          <img
            src="/images/icons/albums-arrow.png"
            alt="albums-arrow"
            className="w-10 h-10"
          />
        </button>
      )}

      {/* PANEL */}
      <div
        className={`fixed top-0 right-0 h-screen z-20 transition-all duration-500
        ${openAlbums ? "w-[50%] bg-[#666666CC]" : "w-0 overflow-hidden"}`}
      >
        {/* OPEN STATE ARROW (panel left edge) */}
        {openAlbums && (
          <button
            className="absolute top-1/2 -left-[2%] -translate-y-1/2 z-30"
            onClick={() => setOpenAlbums(false)}
          >
            <img
              src="/images/icons/albums-arrow.png"
              alt="albums-arrow"
              className="w-10 h-10 rotate-180 transition-transform duration-300"
            />
          </button>
        )}

        {/* PANEL CONTENT */}
        <div className="grid grid-cols-2 gap-2 w-[70%] pt-16 ps-16">
          <AlbumsBox categorySlug={categorySlug} albums={albums} />
        </div>
      </div>
    </>
  );
}
