

import { categories } from "@/src/data/categories";
import Link from "next/link";

interface CategoriesPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoriesPage({params}: CategoriesPageProps){
  
const {category} = await params;
const currentCategory = categories.find((c) => c.slug === category)

if(!currentCategory){
  return <h1>Category Not Found</h1>
}
    return (
          <section className="categories-banner-section mt-[100px] lg:p-16 md:p-16 p-8">
            <div className="flex items-center justify-between">
               <h1 className="text-[34px] font-bold leading-base">{currentCategory.title}</h1>
            <p className="text-[15px] font-light w-[25%] leading-base">{currentCategory.description}</p>
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 mt-16 gap-2">
              {currentCategory.albums && currentCategory.albums.map((album) => (
                 <Link href={`/${currentCategory.slug}/albums/album-${album.id}`} key={album.id}>
                <div className="text-left relative group overflow-hidden">
                    
                <img src={album.album_img} className="z-10 h-full w-full object-contain relative" alt={`Album-${album.id}`}  />
                <div className="absolute z-20 top-0 -right-[102%] h-[200px] w-[200px] bg-[#00000066] group-hover:right-0 duration-700 transition-all"></div>
                <h5 className="absolute z-20 -bottom-[20%] left-[2%] group-hover:bottom-0 duration-700 transition-all p-2 text-[24px] font-semibold leading-base">Album {album.id}</h5>
                </div>
                </Link>
              ))}
            </div>
                   </section>
    )
}