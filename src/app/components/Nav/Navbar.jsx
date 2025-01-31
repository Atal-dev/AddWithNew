'use client'

import Image from "next/image";
import logo from "./img/logo.png"
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import "./Navbar.css";

import Hoverbtn from "../Hoverbtn/Hoverbtn";
import Navsmall from "./Navsmall";
import { usePathname } from "next/navigation";



export default function Navbar() {
    const router = usePathname()
    const isActive = (path) => router == path;

    

  return (
    <>
    <Navsmall/>
     <header className="navbar"> 
        <nav>
            <a href="">
                <Image src={logo} alt="Addwith-Interiors-Logo"/>
            </a>
            
            <ul>
                <li>
                    <Link href="/" className={isActive('/') ? 'activelink' : ''}>Home</Link>
                </li>
                <li>
                    <Link href="/aboutus" className={isActive('/aboutus') ? 'activelink' : ''} >About Us</Link>
                </li>
                <li>
                    <Link href="/services" className={isActive('/services') ? 'activelink' : ''} >Services</Link>
                </li>
                <li>
                    <Link href="/projectspage" className={isActive('/projects') ? 'activelink' : ''} >Projects</Link>
                </li>
                <li className="dropdown">
                    <Link href="/" className={isActive('/page') ? 'activelink' : ''} >Pages <FaChevronDown/> </Link>
                    <ul className="dropdown-element">
                        <li>
                             <Link href="/">Join Us</Link>
                        </li>
                        <li>
                             <Link href="/">Our Team</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/contactus" className={isActive('/contact') ? 'activelink' : ''} >Contact Us</Link>
                </li>
            </ul>


            <Hoverbtn name = {`Get In Touch`}/>
        </nav>
     </header>
    </>
  );
}
