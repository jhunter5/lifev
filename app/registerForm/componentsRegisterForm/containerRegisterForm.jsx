import React from "react";
import ImageAside from "./imageAside";
import ContainerForm from "./containerForm";

export default function ContainerRegisterForm(props){
    return (
        <div className="justify-content mx-28 mt-10 mb-28 h-fit rounded-3xl backdrop-filter backdrop-blur-lg bg-white/10 shadow-lg ">
            <ContainerForm />
        </div>
    )
}