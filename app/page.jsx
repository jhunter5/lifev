import React from "react";
import BACKGROUND from "./landing/componentsBackground/backgroundPage";
import DESCRIPTION from "./landing/componentsInformation/description";
import SERVICES from "./landing/componentsInformation/services";
import STATISTICS from "./landing/componentsInformation/statistics";
import Footer from "./generalComponents/componentsFooter/footer";
import Navbar from "./generalComponents/componentsNavbar/navbar.jsx";


export default function Page() {
    return (
        <div>
            <Navbar/>
            <BACKGROUND />
            <DESCRIPTION/>
            <SERVICES/>
            <STATISTICS/>
            <Footer/>

        </div>  
    )
}