import React from "react";
import Navbar from "./componentsNavbar/navbar";
import Footer from "./componentsFooter/footer";
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
