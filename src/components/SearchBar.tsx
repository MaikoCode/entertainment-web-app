import searcIcon from '../assets/icon-search.svg';
import Image from 'next/image';
import { useState } from 'react';



export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }){

    const [searchQuery, setSearchQuery] = useState('')

     const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setSearchQuery(e.target.value);
     }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        onSearch(searchQuery);

    }

    return <form className='mt-4 mx-4 flex  w-full' onSubmit={handleSubmit}>
        <Image
        src={searcIcon}
        alt='icon search'
        className='lg:h-[25px] lg:w-[25px] lg:mt-7'
        />
        <input type="text"
        placeholder='Search for movies or TV series'
        value={searchQuery}
        onChange={handleSearch}
        className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-4 leading-tight focus:outline-none
        placeholder:font-outfit lg:h-20 lg:'
         />
    </form>


}