import React from "react";
import BACKGROUND from "./componentsBackground/backgroundPage";
import DESCRIPTION from "./componentsInformation/description";
import SERVICES from "./componentsInformation/services";
import STATISTICS from "./componentsInformation/statistics";
import Footer from "../generalComponents/componentsFooter/footer";


export default function Page() {
    return (
        <div>
            <BACKGROUND />
            <DESCRIPTION/>
            <SERVICES/>
            <STATISTICS/>
            <Footer/>

        </div>  
    )
}