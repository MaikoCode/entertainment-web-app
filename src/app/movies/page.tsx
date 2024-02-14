"use client";
// import dataJson from "@/assets/data.json"
import dataJson from "../../assets/data.json"
import RegularCard from "@/components/regularCard"
// import localStorageUtils from "../../utils/localStorageUtils"
import localStorageUtils from '../../utils/localStorageUtils';

interface ThumbnailSizes {
    small: string;
    medium?: string;
    large: string;
}
  
interface Thumbnail {
    trending?: ThumbnailSizes;
    regular: ThumbnailSizes;
}
  
interface MovieProps {
    title: string;
    thumbnail: Thumbnail;
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
}



export default function Movie(){
    return  <div className="overflow-x-hidden mx-4 lg:w-full max-w-[69rem] hide-scrollbar">
        
        <h2 className="text-3xl py-4 px-6">Movies</h2>
        
        <div className="grid grid-cols-2 tablet:grid-cols-3 lg:grid-cols-4 gap-x-1 md:gap-x-0 gap-y-16">
            {dataJson.map((item: MovieProps, index: number) => (
                item.category === "Movie" && (
                <div key={index} className="flex justify-center items-center">
                    <RegularCard data={{
                        ...item,
                        thumbnail: {
                            ...item.thumbnail,
                            trending: item.thumbnail.trending || { small: "", large: "" }
                        }
                    }} toggleSaveMovie={localStorageUtils.toggleSaveMovie} />
                </div>
                )
            ))}
        </div>

    </div>
}