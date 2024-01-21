import  Link  from "next/link";
import  Image  from "next/image";
import MovieIcon from "../assets/icon-nav-movies.svg"

export default function NavBar() {

    return <nav className="flex justify-between border rounded-lg">
        <ul>
            <li>
                <Link href="/">
                   <Image 
                   src={MovieIcon}
                   alt="icon"
                   />
                </Link>
            </li>
        </ul>


        <ul>

        </ul>


        <span></span>
        
    </nav>




}