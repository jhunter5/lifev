import React from "react";
import TableScheduler from "./components/tableScheduler.jsx";
import Navbar from "../generalComponents/componentsNavbar/navbar.jsx";
import Footer from "../generalComponents/componentsFooter/footer.jsx";
import HeroSection from "./components/heroSection.jsx";
import TitleSection from "./components/titleSection.jsx";
import MoodSelect from "./components/moodSelect.jsx";

export default function Page(){
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <TableScheduler/>
            <TitleSection/>
            <MoodSelect />
            <Footer/>
        </div>
    )
}