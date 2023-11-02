import React from "react";
import Navbar from "../generalComponents/componentsNavbar/navbar";
import Footer from "../generalComponents/componentsFooter/footer";
import ContainerRegister from "./componentsRegisterForm/containerRegister";

export default function Page() {
    return (
        <div>
            <Navbar />
            <ContainerRegister />
            <Footer />
        </div>  
    )
}
