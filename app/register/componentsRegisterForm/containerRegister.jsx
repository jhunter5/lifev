import React from "react";
import ImageAside from "./imageAside";
import ContainerForm from "./containerForm";

export default function ContainerRegister(props){
    return (
        <div className="flex flex-row justify-content mx-28 mt-10 mb-28 h-screen rounded-3xl backdrop-filter backdrop-blur-lg bg-white/10 shadow-lg ">
            <ImageAside image={props.image} />
            <ContainerForm />
        </div>
    )
}