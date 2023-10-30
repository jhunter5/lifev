import React from "react";
import MenuFooter from "./menu";
import FancyHr from "./fancyHr";
import SocialMenu from "./socialMenu";
import NameBrand from "../componentsNavbar/nameBrand";

export default function Footer(){
    return (
        <div className="bg-stone-950 p-5">
            <div className="flex flex-row justify-between">
                <SocialMenu />
                <NameBrand className="text-zinc-50" />
            </div>
            <FancyHr />
            <MenuFooter />
        </div>
    )
    

}