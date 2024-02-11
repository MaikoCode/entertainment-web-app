
"use client";
import { useState, useEffect } from 'react';

import Image from "next/image";
import iconSaveEmpty from "../assets/icon-bookmark-empty.svg"
import iconSaveFull from "../assets/icon-bookmark-full.svg"
import iconSeries from "../assets/icon-category-tv.svg"
import iconMovies from "../assets/icon-category-movie.svg"
import iconPlay from "../assets/icon-play.svg"
// import localStorageUtils from '@/utils/localStorageUtils';
import localStorageUtils from '../utils/localStorageUtils2';


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



export default function RegularCard({data, toggleSaveMovie}: {data: Movie, toggleSaveMovie: (movie: Movie) => void}){
 
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [screenWidth, setScreenWidth] = useState(0);
    const [isBookmarked, setIsBookmarked] = useState(localStorageUtils.isMovieSaved(data))


    const handleBookmarkClick = () => {
        toggleSaveMovie(data);
        // To reviews 
        setIsBookmarked(localStorageUtils.isMovieSaved(data))
    }

    useEffect(() => {
        setIsBookmarked(localStorageUtils.isMovieSaved(data));
      }, [data]);


    useEffect(() => {

        
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const getThumbnailSrc = () => {
        const { small, medium, large } = data.thumbnail.regular as { small: string; medium?: string; large: string; } || {};
        if (screenWidth < 640) return `/${small}`; 
        if (screenWidth < 768) return `/${medium || small}`;
        return `/${large}`;
    };

    return <div className="relative w-[160px] h-[120px]  md:w-[200px] md:h-[150px] lg:w-[260px] lg:h-[174px] group mt-4">
               
                <Image
                fill
                src={getThumbnailSrc()}
                alt="pic of the media"
                className="absolute w-full h-full rounded-lg"
                priority={true}
                />


                <div className="absolute top-4 right-4 cursor-pointer
                bg-dark-blue bg-opacity-55 p-4 rounded-full z-10 hover:bg-white group/save"
                onClick={handleBookmarkClick}
                >
                    <Image
                    src={localStorageUtils.isMovieSaved(data) ? iconSaveFull : iconSaveEmpty}
                    // src={isBookmarked ? iconSaveFull : iconSaveEmpty}
                    alt="icon to save media"
                    className="group-hover/save:invert"
                    />
                </div>

                <div className="absolute -bottom-16 text-sm md:text-base left-0">
                    {/* w-[160px] w-[200px] */}
                    <div className="text-white">
                        <ul className="flex justify-between  list-disc">
                            <li className="list-none">{data?.year}</li>
                            <li className="">
                                <div className="flex justify-between items-center">
                                    {data?.category === "Movie" ? (
                                            <Image
                                                src={iconMovies}
                                                alt="icon for movie"
                                                className="h-4 w-4 mr-4"
                                            />
                                        ) : (
                                            <Image
                                                src={iconSeries}
                                                alt="icon for TV series"
                                                className="h-4 w-4 mr-4"
                                            />
                                        )}
                                {data?.category}
                                </div>
                            </li>
                            <li>{data?.rating}</li>
                        </ul>
                        <div>
                            <span className="font-bold text-base md:text-xl">{data?.title}</span>
                        </div> 
                    </div>
                </div>

                 {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-black font-outfit bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                    <button className="flex items-center bg-white rounded-3xl bg-opacity-40 text-white py-2 px-4">
                        <Image
                        src={iconPlay}
                        alt="icon play"
                        className="h-8 w-8 mr-4"
                         />
                        Play
                    </button>
                </div>

            </div>
}