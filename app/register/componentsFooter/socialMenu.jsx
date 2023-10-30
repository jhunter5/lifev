import React from "react";
import {AiFillTwitterCircle} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";
import {AiOutlineInstagram} from "react-icons/ai";

export default function SocialMenu(){
    return (
        <div className="w-1/4 flex justify-evenly ">
            <a href=""><AiFillTwitterCircle size={30} color="#94D1BE" /></a>
            <a href=""><AiOutlineInstagram size={30} color="#94D1BE" /></a>
            <a href=""><BsFacebook size={26} color="#94D1BE" /></a>
        </div>
    )

}