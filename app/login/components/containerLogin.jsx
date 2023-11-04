import React from "react";
import ImageRigthAside from "./imageRightAside"
import ContainerFormLogin from "./containerFormLogin";

export default function ContainerLogin(props) {
    return(
        <div className="flex flex-row justify-content mx-28 mt-10 mb-28 h-screen rounded-3xl backdrop-filter backdrop-blur-lg bg-white/10 shadow-lg "> 
        <ContainerFormLogin/>
        <ImageRigthAside image={props.image}></ImageRigthAside>
        </div>
    )
}