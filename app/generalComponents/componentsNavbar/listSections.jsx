import React from "react";
import {AiOutlineHome} from "react-icons/ai";
import {ImPriceTags} from "react-icons/im";
import {RiHomeHeartLine} from "react-icons/ri";
import Section from "./section";

export default function ListSection(){
    return (
        <div className="w-1/4 flex flex-row flex-nowrap justify-around items-center">
            <a href=""><Section icon={<AiOutlineHome size={20}/>} content="Home"/></a>
            <a href=""><Section icon={<ImPriceTags size={18}/> } content="Prices"/></a>
            <a href=""><Section icon={<RiHomeHeartLine size={20}/>} content="Clients"/></a>
        </div>
    )

}