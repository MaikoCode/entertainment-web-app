import searcIcon from '../assets/icon-search.svg';
import Image from 'next/image';



export default function SearchBar() {

    return <form className='mt-4 mx-4 flex  w-full'>
        <Image
        src={searcIcon}
        alt='icon search'
        className='lg:h-[25px] lg:w-[25px] lg:mt-7'
        />
        <input type="text"
        placeholder='Search for movies or TV series'
        className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-4 leading-tight focus:outline-none
        placeholder:font-outfit lg:h-20 lg:'
         />
    </form>


}