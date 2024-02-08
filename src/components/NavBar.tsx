"use client";

import  Link  from "next/link";
import  Image  from "next/image";
import { usePathname } from "next/navigation";

import movieIcon from "../assets/icon-nav-movies.svg"
import saveIcon from "../assets/icon-nav-bookmark.svg"
import avatarIcon from "../assets/image-avatar.png"
import iconNav from "../assets/icon-nav-home.svg"
import seriesIcon from "../assets/icon-nav-tv-series.svg"
import logoIcon from "../assets/logo.svg"


import iconNavActive from "../assets/icon-nav-home_active.svg"
import movieIconActive from "../assets/icon-nav-movies_active.svg"
import seriesIconActive from "../assets/icon-nav-tv-series_active.svg"
import saveIconActive from "../assets/icon-nav-bookmark_active.svg"





export default function NavBar() {

    const pathname = usePathname()

    const isActive = (path: string) => pathname === path
// At lg should divide the screen into 2 columns to avoid the shrinking of the icons
    return <nav className="bg-dark-blue lg:fixed flex justify-between items-center p-5 w-full
    md:w-auto md:m-4 md:rounded-2xl lg:px-0 lg:w-[75px] lg:h-[500px] lg:flex-col 
    lg:justify-normal">
        <ul>
            <li className="lg:pb-[50px]">
                <Link href="/">
                   <Image 
                   src={logoIcon}
                   alt="icon"
                   />
                </Link>
            </li>
        </ul>

       


        <ul className="flex space-x-6 lg:flex-col lg:space-x-0 lg:space-y-6 lg:pb-[200px]">
        <li>
                <Link href="/">
                   <Image 
                   src={isActive("/") ? iconNavActive : iconNav}
                   alt="icon"
                   className="h-[20px] w-[20px]"
                   />
                </Link>
            </li>

        {/* <li>
                <Link href="/movies">
                   <Image 
                   src={isActive("/movies") ? movieIconActive : movieIcon}
                   alt="icon"
                   className="h-[20px] w-[20px]"
                   />
                </Link>
            </li> */}

            <li>
                <Link href="/movies">
                   <Image 
                   src={movieIcon}
                   alt="icon"
                   className="fill-red-500"
                   />
                </Link>
            </li>

            <li>
                <Link href="/series">
                   <Image 
                   src={isActive("/series") ? seriesIconActive : seriesIcon}
                   alt="icon"
                   className="h-[20px] w-[20px]"
                   />
                </Link>
            </li>

            <li>
                <Link href="/saves">
                   <Image 
                   src={isActive("/saves") ? saveIconActive : saveIcon}
                   alt="icon"
                   className="h-[20px] w-[20px]"
                   />
                </Link>
            </li>

        </ul>


        <span>

                <Image 
                src={avatarIcon}
                alt="icon"
                className="h-8 w-8 rounded-full border-2 border-white cursor-pointer"
                />
        </span>
        
    </nav>




}