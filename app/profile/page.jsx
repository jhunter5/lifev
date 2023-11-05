import React from "react";
import BACKGROUND from "./background";
import GOAL from "./componentsProfile/goalTime";
import PERSONAL from "./componentsProfile/personalInformation";
import SPECIFICATION from "./componentsProfile/specifications";
import PROGRESS from "./componentsProfile/progress";
import Footer from "../generalComponents/componentsFooter/footer";



export default function Page() {
    return (
        <div>
            <BACKGROUND />
            <GOAL />
            <PERSONAL />
            <SPECIFICATION />
            <PROGRESS />
            <Footer/>
        </div>  
    )
}