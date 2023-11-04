import React from "react";
import Navbar from "../generalComponents/componentsNavbar/navbar";
import Footer from "../generalComponents/componentsFooter/footer";
import ContainerRegister from "./componentsRegisterForm/containerRegister";

export default function Page() {
    return (
        <div>
            <Navbar />
            <ContainerRegister image="https://images.unsplash.com/photo-1696692127680-e2eaddb63a2e?auto=format&fit=crop&q=80&w=1905&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Footer />
        </div>  
    )
}
