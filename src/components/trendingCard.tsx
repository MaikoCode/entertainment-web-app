
"use client";
import { useState, useEffect } from 'react';

import Image from "next/image";
import dataJson from "../assets/data.json"
import iconSaveEmpty from "../assets/icon-bookmark-empty.svg"
import iconSaveFull from "../assets/icon-bookmark-full.svg"
import iconSeries from "../assets/icon-category-tv.svg"
import iconMovies from "../assets/icon-category-movie.svg"
import iconPlay from "../assets/icon-play.svg"


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

export default function TrendingCard({data}: {data: Movie}){
    // const data = dataJson[0]
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const getThumbnailSrc = () => {
        const { small, medium, large } = data.thumbnail.trending as { small: string; medium?: string; large: string; } || {};
        if (screenWidth < 640) return `/${small}`; 
        if (screenWidth < 768) return `/${medium || small}`;
        return `/${large}`;
    };

    return <div className="relative w-[250px] h-[150px] lg:w-[400px] lg:h-[200px] group">
               
                <Image
                fill
                src={getThumbnailSrc()}
                alt="pic of the media"
                className="absolute w-full h-full rounded-lg"
                priority={true}
                />


                <div className="absolute top-4 right-4 cursor-pointer
                bg-dark-blue bg-opacity-55 p-4 rounded-full z-10 hover:bg-white group/save">
                    <Image
                    src={iconSaveEmpty} 
                    alt="icon to save media"
                    className="group-hover/save:invert"
                    />
                </div>

                <div className="absolute bottom-4 left-4 w-[200px]">
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
                            <span className="font-bold text-2xl">{data?.title}</span>
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