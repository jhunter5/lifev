import React from "react";
import ContainerComidas from "./containerComidas";

export default function ContainerActivePlan() {
    return(
        <div className="grid grid-cols-3 mx-20 my-10 p-5 h-fit rounded-3xl bg-white/10 shadow-lg">
            <ContainerComidas />
            <ContainerComidas />
            <ContainerComidas />
        </div>
    )
}
