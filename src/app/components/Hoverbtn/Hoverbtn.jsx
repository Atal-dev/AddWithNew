import Link from "next/link";
import "./Hoverbtn.css"
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hoverbtn(props){
    return(
        <>
            <Link href="/" className={`coolBeans`}>{props.name}<FaArrowRightLong /></Link>
        </>
    )
}