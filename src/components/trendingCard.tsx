import Image from "next/image";
import dataJson from "../assets/data.json"
import iconSaveEmpty from "../assets/icon-bookmark-empty.svg"
import iconSaveFull from "../assets/icon-bookmark-full.svg"

interface ThumbnailSizes {
    small: string;
    medium?: string;
    large: string;
}
  
interface Thumbnail {
    trending: ThumbnailSizes;
    regular: ThumbnailSizes;
}
  
interface Movie {
    title: string;
    thumbnail: Thumbnail;
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
}
  
interface TrendingCardProps {
    data: Movie;
}

// export default function TrendingCard({data}: TrendingCardProps){
//     return <div className="">
        
      

//             </div>
// }

export default function TrendingCard(){
    const data = dataJson[0]
    return <div className="relative w-[400px] h-[200px]">

            {/* <Image
            fill
            src={data?.thumbnail?.trending?.large ?? ""}
            alt="pic of the media"
            className="absolute w-full h-full rounded-lg"
             /> */}

                <Image
                fill
                src={data?.thumbnail?.trending?.large ? `/${data.thumbnail.trending.large}` : ""}
                alt="pic of the media"
                className="absolute w-full h-full rounded-lg"
                />

            
                <div className="absolute top-4 right-4 cursor-pointer
                bg-dark-blue bg-opacity-55 p-4 rounded-full">

                    <Image
                    src={iconSaveEmpty} 
                    alt="icon to save media"
                    />
                </div>

                <div>
                    
                </div>

            </div>
}