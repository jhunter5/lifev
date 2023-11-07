import React from "react";
import ContainerDesayuno from "./containerDesayuno";
import ContainerCena from "./containerCena";
import ContainerAlmuerzo from "./containerAlmuerzo";

export default function ContainerActivePlan() {
    return(
        <div className="grid grid-cols-3 p-5 h-fit w-fit bg-none shadow-lg">
            <ContainerDesayuno />
            <ContainerAlmuerzo />
            <ContainerCena />
        </div>
    )
}
