"use client";
import TrendingCard from "@/components/trendingCard"
import RegularCard from "@/components/regularCard"
import dataJson from "@/assets/data.json"
// import localStorageUtils from "../utils/localStorageUtils"
import localStorageUtils from '../utils/localStorageUtils2';

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


export default function HomePage() { 
  return (
    <div className="overflow-x-hidden mx-4 lg:w-full max-w-[69rem] hide-scrollbar">
    
      <h2 className="text-2xl py-4">Trending</h2>
      
     
     

      <div className="flex overflow-x-auto gap-4 hide-scrollbar horizontal-scroll-container">
      {dataJson.map((item: MovieProps, index: number) => (
          item.isTrending && (
            <div className="min-w-max" key={index}>
              <TrendingCard data={{...item, thumbnail: { ...item.thumbnail, trending: item.thumbnail?.trending || { small: "", medium: "", large: "" } }}} toggleSaveMovie={localStorageUtils.toggleSaveMovie}/>
            </div>
          )
        ))}

      </div>
     
     
     

      
      <h2 className="text-2xl py-4">Recommended for you</h2>
      <div className="grid grid-cols-2 tablet:grid-cols-3 lg:grid-cols-4 gap-x-1 md:gap-x-0 gap-y-16
      ">
        {dataJson.map((item, index) => (
          !item.isTrending && (
           
          <div key={index} className="flex justify-center items-center">
            <RegularCard data={{
                        ...item,
                        thumbnail: {
                            ...item.thumbnail,
                            trending: item.thumbnail.trending || { small: "", large: "" }
                        }
                    }}
             toggleSaveMovie={localStorageUtils.toggleSaveMovie}/>
          </div>
           
          )
        ))}
      </div>

    </div>
  );
}

