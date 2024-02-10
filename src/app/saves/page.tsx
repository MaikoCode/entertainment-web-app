"use client";

import React, { useState, useEffect, Key } from 'react';
import RegularCard from '@/components/regularCard';
import localStorageUtils from '../utils/localStorageUtils';

export default function Saves() {
  const [saved, setSaved] = useState<any[]>([]);

  

  useEffect(() => {
    const fetchSavedMovies = () => {
      const savedMovies = JSON.parse(window.localStorage.getItem('savedMovies') ?? '[]');
      setSaved(savedMovies);
    };

    fetchSavedMovies();
  }, []);

  const handleToggleSaveMovie = (movie: any) => {
    localStorageUtils.toggleSaveMovie(movie);
    setSaved(currentSaved => {
      const movieExists = currentSaved.some((m: any) => m.title === movie.title && m.year === movie.year);
      if (movieExists) {
        return currentSaved.filter((m: any) => m.title !== movie.title || m.year !== movie.year);
      } else {
        return [...currentSaved, movie];
      }
    });
  };



  return (
    <div className="overflow-x-hidden mx-4 lg:w-full max-w-[69rem] hide-scrollbar">
      
      <h2 className="text-3xl py-4">Bookmarked Movies</h2>
      <div className="grid grid-cols-2 tablet:grid-cols-3 lg:grid-cols-4 gap-x-1 md:gap-x-0 gap-y-16">
        {saved.filter(item => item.category === "Movie").map((item, index) => (
          <div className="min-w-max" key={index as Key}>
            <RegularCard data={item} toggleSaveMovie={() => handleToggleSaveMovie(item)} />
          </div>
        ))}
      </div>

    
      <h2 className="text-2xl mt-[12vh] py-4">Bookmarked TV Series</h2>

      <div className="grid grid-cols-2 tablet:grid-cols-3 lg:grid-cols-4 gap-x-1 md:gap-x-0 gap-y-16">
        {saved.filter(item => item.category === "TV Series").map((item, index) => (
          <div key={index as Key} className="flex justify-center items-center">
            <RegularCard data={item} toggleSaveMovie={() => handleToggleSaveMovie(item)} />
          </div>
        ))}
      </div>
    </div>
  );
}
