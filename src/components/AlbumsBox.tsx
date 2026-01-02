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

            <div className="absolute top-0 -right-[140%] h-[260px] w-[260px] bg-[#00000066] group-hover:right-0 transition-all duration-700" />

            <h5 className="absolute -bottom-[20%] left-[2%] group-hover:bottom-0 transition-all duration-700 p-2 text-[24px] font-semibold">
              Album {album.id}
            </h5>
          </div>
        </Link>
      ))}
    </>
  );
}
