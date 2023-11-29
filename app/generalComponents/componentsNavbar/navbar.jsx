import React from "react";
import NameBrand from "./nameBrand";
import LoginMenuDropdown from "./loginDropdownMenu";
import NotLoginMenuDropdown from "./notLoginDropdownMenu";
import islooged from "../../islogged";

export default function Navbar() {
    return (
        <div className="flex flex-row flex-nowrap justify-around  p-2 bg-stone-950 rounded-b-lg sticky shadow-lg">
            <NameBrand />
            {islooged() ? <LoginMenuDropdown /> : <NotLoginMenuDropdown /> }
        </div>
    )
}