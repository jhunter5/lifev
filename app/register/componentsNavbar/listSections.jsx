import React from "react";
import {AiOutlineHome} from "react-icons/ai";
import {ImPriceTags} from "react-icons/im";
import {RiHomeHeartLine} from "react-icons/ri";
import Section from "./section";

export default function ListSection(){
    return (
        <div className="w-2/4 flex flex-row flex-nowrap justify-around items-center">
            <a href=""><Section icon={<AiOutlineHome/>} content="Home"/></a>
            <a href=""><Section icon={<ImPriceTags/>} content="Prices"/></a>
            <a href=""><Section icon={<RiHomeHeartLine/>} content="Clients"/></a>
        </div>
    )

}