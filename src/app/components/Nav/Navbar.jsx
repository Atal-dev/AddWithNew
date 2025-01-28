'use client'

import Image from "next/image";
import logo from "./img/logo.svg"
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import "./Navbar.css";
import { useRouter } from 'next/navigation'
import Hoverbtn from "../Hoverbtn/Hoverbtn";
import Navsmall from "./Navsmall";



export default function Navbar() {
    const router = useRouter()
    const isActive = (path) => router.pathname == path;

    

  return (
    <>
    <Navsmall/>
     <header className="navbar"> 
        <nav>
            <a href="">
                <Image  src={logo} alt="addwith"/>
            </a>
            
            <ul>
                <li>
                    <Link href="/" className={isActive('/') ? 'activelink' : ''}>Home</Link>
                </li>
                <li>
                    <Link href="/" className={isActive('/about-us') ? 'activelink' : ''} >About Us</Link>
                </li>
                <li>
                    <Link href="/" className={isActive('/services') ? 'activelink' : ''} >Services</Link>
                </li>
                <li>
                    <Link href="/" className={isActive('/projects') ? 'activelink' : ''} >Projects</Link>
                </li>
                <li>
                    <Link href="/" className={isActive('/blog') ? 'activelink' : ''} >Blog</Link>
                </li>
                <li className="dropdown">
                    <Link href="/" className={isActive('/page') ? 'activelink' : ''} >Pages <FaChevronDown/> </Link>
                    <ul className="dropdown-element">
                        <li>
                             <Link href="/">Service Details</Link>
                        </li>
                        <li>
                             <Link href="/">Project Details</Link>
                        </li>
                        <li>
                             <Link href="/">Blog Details</Link>
                        </li>
                        <li>
                             <Link href="/">Our Team</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/" className={isActive('/contact') ? 'activelink' : ''} >Contact Us</Link>
                </li>
            </ul>


            <Hoverbtn name = {`Get In Touch`}/>
        </nav>
     </header>
    </>
  );
}
