"use client"
import React from "react";
import Navbar from "../generalComponents/componentsNavbar/navbar";
import Footer from "../generalComponents/componentsFooter/footer";
import ContainerRegister from "./componentsRegisterForm/containerRegister";
import {NextUIProvider} from "@nextui-org/react";

export default function Page() {
    return (
        <div>
            <NextUIProvider>
                <Navbar />
                <ContainerRegister />
                <Footer />
            </NextUIProvider>
        </div>  
    )
}
