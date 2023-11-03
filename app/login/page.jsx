import React from "react";
import Navbar from "../generalComponents/componentsNavbar/navbar.jsx";
import Footer from "../generalComponents/componentsFooter/footer";
import ContainerLogin from "./components/containerLogin.jsx";

export default function Page() {
    return (
        <div>
            <Navbar />
            <ContainerLogin image='https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&q=80&w=1041&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ></ContainerLogin>
            <Footer />
        </div>  
    )
}