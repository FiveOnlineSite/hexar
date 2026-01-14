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
  currentAlbumSlug?:string
}

export default function AlbumsBox({
  categorySlug,
  albums,
  currentAlbumSlug,
}: AlbumsBoxProps) {

  const filteredAlbums = currentAlbumSlug
    ? albums.filter(album => album.slug !== currentAlbumSlug)
    : albums;

  return (
    <>
      {filteredAlbums.map((album) => (
        <Link
          href={`/${categorySlug}/albums/${album.slug}`}
          key={album.id}
        >
          <div className="text-left relative group overflow-hidden">
            <img
              src={album.album_img}
              className="h-full w-full object-contain"
              alt={`Album-${album.id}`}
            />

            <div className="absolute top-0 -right-[140%] 3xl:h-[360px] 3xl:w-[360px] 2xl:h-[285px] 2xl:w-[285px] xl:h-[260px] xl:w-[260px] lg:h-[260px] lg:w-[260px] 3xl:block 2x:block xl:block lg:block none bg-[#00000066] group-hover:right-0 transition-all duration-700" />

            <h5 className="absolute 3xl:-bottom-[20%] 2xl:-bottom-[20%] xl:-bottom-[20%] lg:-bottom-[20%] bottom-0 left-[2%] 3xl:group-hover:bottom-0 2xl:group-hover:bottom-0 xl:group-hover:bottom-0 lg:group-hover:bottom-0 transition-all duration-700 p-2 lg:text-[24px] md:text-[22px] text-[20px] font-semibold">
              Album {album.id}
            </h5>
          </div>
        </Link>
      ))}
    </>
  );
}
