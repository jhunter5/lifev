import React from "react";
import FancyTitle from "./fancyTitle";
import Form from "./form";


export default function ContainerForm(){
    return (
        <div className="w-1/2 p-5 flex flex-col justify-around ">
            <div className="flex justify-center">
                <FancyTitle title="Register"/>
            </div>  
            <Form/>
        </div>
    )
}