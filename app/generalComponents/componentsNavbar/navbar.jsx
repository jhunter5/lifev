'use client'
import React from "react";
import NameBrand from "./nameBrand";
import LoginMenuDropdown from "./loginDropdownMenu";
import NotLoginMenuDropdown from "./notLoginDropdownMenu";
import islogged from "../../islogged";

export default function Navbar() {
    console.log(islogged());
    return (
        <div className="flex flex-row flex-nowrap justify-around  p-2 bg-stone-950 rounded-b-lg sticky shadow-lg">
            <NameBrand />
            {islogged() ? <LoginMenuDropdown /> : <NotLoginMenuDropdown /> }
        </div>
    )
}