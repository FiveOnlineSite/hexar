import { categories } from "@/src/data/categories";
import Link from "next/link";

interface Album {
  id: number;
  album_img: string;
  slug: string;
}

interface AlbumsBoxProps {
  categorySlug: string;
  albums: Album[];
}

export default function AlbumsBox({categorySlug, albums}: AlbumsBoxProps ){

    return (
        <>
        {albums && albums.map((album) => (
                 <Link href={`/${categorySlug}/albums/album-${album.id}`} key={album.id}>
                <div className="text-left relative group overflow-hidden">
                    
                <img src={album.album_img} className="z-10 h-full w-full object-contain relative" alt={`Album-${album.id}`}  />
                <div className="absolute z-20 top-0 -right-[140%] h-[260px] w-[260px] bg-[#00000066] group-hover:right-0 duration-700 transition-all"></div>
                <h5 className="absolute z-20 -bottom-[20%] left-[2%] group-hover:bottom-0 duration-700 transition-all p-2 text-[24px] font-semibold leading-base">Album {album.id}</h5>
                </div>
                </Link>
              ))}
        </>
          
    )
}