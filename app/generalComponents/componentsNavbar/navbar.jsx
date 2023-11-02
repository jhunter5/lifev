import React from "react";
import NameBrand from "./nameBrand";
import ImageProfile from "./imageProfile";
import ListSection from "./listSections";

export default function Navbar() {
    return (
        <div className="flex flex-row flex-nowrap justify-around  p-2 bg-stone-950 rounded-b-lg sticky shadow-lg">
            <NameBrand />
            <ListSection />
            <ImageProfile url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
    )
}