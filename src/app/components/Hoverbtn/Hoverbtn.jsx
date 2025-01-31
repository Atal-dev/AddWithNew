import Link from "next/link";
import "./Hoverbtn.css"
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hoverbtn({name , width="180px", route="/"}){
    return(
        <>
            <Link href={route} style={{width:width}} className={`coolBeans`}>{name}<FaArrowRightLong /></Link>
        </>
    )
}