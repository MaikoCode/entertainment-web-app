"use client";
import { useState, useEffect, use } from 'react';
import TrendingCard from "@/components/trendingCard"
import RegularCard from "@/components/regularCard"
import dataJson from "../assets/data.json"

// import localStorageUtils from "../utils/localStorageUtils"
import localStorageUtils from '../utils/localStorageUtils';
// import SearchBar from '@/components/SearchBar';
import SearchBar from '../components/SearchBar';


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
  const [isClientSide, setIsClientSide] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(dataJson);
  const [query, setQuery] = useState('');
  const [nbFilteredMovies, setNbFilteredMovies] = useState(0);


  useEffect(() => {
    setIsClientSide(typeof window !== "undefined");
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setFilteredMovies(dataJson);
      setNbFilteredMovies(0);
    } else {
      const filtered = dataJson.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setNbFilteredMovies(filtered.length);
      setFilteredMovies(filtered);
    }
  };


  return (
    <>
   

    <SearchBar onSearch={handleSearch} />
    {filteredMovies.length > 0 && (
    <div className="overflow-x-hidden mx-4 lg:w-full max-w-[69rem] hide-scrollbar">
    
      <h2 className="text-2xl py-4">Trending</h2>
      
     
      <div className="flex overflow-x-auto gap-4 hide-scrollbar horizontal-scroll-container">
      {isClientSide && dataJson.map((item: MovieProps, index: number) => (
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
        {isClientSide && dataJson.map((item, index) => (
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

    </div>)
      }

    {(filteredMovies.length > 0 && query.length > 0) && (
       <div className="overflow-x-hidden mx-4 lg:w-full max-w-[69rem] hide-scrollbar">
        <p
        className='text-2xl text-left py-4'
        >Found {nbFilteredMovies} results for '{query}'</p>
      <div className="grid grid-cols-2 tablet:grid-cols-3 lg:grid-cols-4 gap-x-1 md:gap-x-0 gap-y-16">
       {isClientSide && filteredMovies.map((item, index) => (
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
    )}
    
           </>
  );
}

