import React from "react";
import Text from "../componentsNavbar/text";

export default function MenuFooter(){
    return(
        <div className="flex flex-row justify-evenly text-zinc-50">
            <Text content="Home" />
            <Text content="Products" />
            <Text content="Blog" />
            <Text content="Contact" />
            <Text content="Login" />
        </div>
        
    )
}