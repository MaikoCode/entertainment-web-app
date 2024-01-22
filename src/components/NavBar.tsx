import  Link  from "next/link";
import  Image  from "next/image";
import movieIcon from "../assets/icon-nav-movies.svg"
import saveIcon from "../assets/icon-nav-bookmark.svg"
import avatarIcon from "../assets/image-avatar.png"
import iconNav from "../assets/icon-nav-home.svg"
import seriesIcon from "../assets/icon-nav-tv-series.svg"
import logoIcon from "../assets/logo.svg"



export default function NavBar() {

    return <nav className="bg-dark-blue flex justify-between items-center p-5">
        <ul>
            <li>
                <Link href="/">
                   <Image 
                   src={logoIcon}
                   alt="icon"
                   />
                </Link>
            </li>
        </ul>


        <ul className="flex space-x-2">
        <li>
                <Link href="/">
                   <Image 
                   src={iconNav}
                   alt="icon"
                   />
                </Link>
            </li>
        <li>
                <Link href="/">
                   <Image 
                   src={movieIcon}
                   alt="icon"
                   />
                </Link>
            </li>

            <li>
                <Link href="/">
                   <Image 
                   src={seriesIcon}
                   alt="icon"
                   />
                </Link>
            </li>

            <li>
                <Link href="/">
                   <Image 
                   src={saveIcon}
                   alt="icon"
                   />
                </Link>
            </li>

        </ul>


        <span>

                <Image 
                src={avatarIcon}
                alt="icon"
                className="h-8 w-8 rounded-full"
                />
        </span>
        
    </nav>




}