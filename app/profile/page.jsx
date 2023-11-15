import React from "react";
import Background from "./background";
import Goal from "./componentsProfile/goalTime";
import Personal from "./componentsProfile/personalInformation";
import Specifications from "./componentsProfile/specifications";
import Progress from "./componentsProfile/progress";
import Footer from "../generalComponents/componentsFooter/footer";
import Navbar from "../generalComponents/componentsNavbar/navbar";



export default function Page() {
    return (
        <div>
            <Navbar/>
            <Background />
            <Goal />
            <Personal />
            <Specifications />
            <Progress />
            <Footer/>
        </div>  
    )
}