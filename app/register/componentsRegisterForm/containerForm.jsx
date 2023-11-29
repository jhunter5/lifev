import React from "react";
import FancyTitle from "./fancyTitle";
import RegisterForm from "./registerForm";
import RegisterGoogle from "./registerGoogle";


export default function ContainerForm(){
    return (
        <div className="w-1/2 p-5 flex flex-col justify-around ">
            <div className="flex justify-center">
                <FancyTitle title="Register"/>
            </div>  
            <RegisterForm/>
        </div>
    )
}