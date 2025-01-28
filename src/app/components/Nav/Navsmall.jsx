'use client'

import Image from "next/image"
import logo from "./img/logo.svg"
import "./Navsmall.css"
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

function Navsmall() {
  const [dropdown , setDropdown] = useState(false);
  const [menu , setMenu] = useState(false);
  return (
    <>
    <div className="navsmall">
         <a href="">
            <Image  src={logo} alt="addwith"/>
         </a>
         <div className="hamburgar" onClick={()=>setMenu(true)}> 
            <GiHamburgerMenu />
         </div>
    </div>
    <div className="menu" style={{transform:menu?"translateX(0)":"translateX(-100%)"}}>
          <div className="menunav" onClick={()=>setMenu(false)}>
            <RxCross2 />
          </div>
          <ul>
                <li>
                    <Link href="/" >Home</Link>
                </li>
                <li>
                    <Link href="/" >About Us</Link>
                </li>
                <li>
                    <Link href="/" >Services</Link>
                </li>
                <li>
                    <Link href="/" >Projects</Link>
                </li>
                <li>
                    <Link href="/" >Blog</Link>
                </li>
                <li className="menu-dropdown" onClick={()=> setDropdown(!dropdown)}>
                    <Link href="/" >Pages <FaChevronDown/> </Link>
                    <ul className="menu-dropdown-element"  style={{display: dropdown ? "flex" : "none"}}>
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
                    <Link href="/" >Contact Us</Link>
                </li>
            </ul>
    </div>
    </>
  )
}

export default Navsmall
