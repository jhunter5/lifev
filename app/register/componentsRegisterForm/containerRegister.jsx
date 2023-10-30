import React from "react";
import ImageAside from "./imageAside";
import ContainerForm from "./containerForm";

export default function ContainerRgister(){
    return (
        <div className="flex flex-row mx-28 mt-10 mb-28 h-screen rounded-3xl backdrop-filter backdrop-blur-lg bg-white/10 shadow-lg">
            <ImageAside image="https://images.unsplash.com/photo-1696692127680-e2eaddb63a2e?auto=format&fit=crop&q=80&w=1905&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <ContainerForm />
        </div>
    )
}