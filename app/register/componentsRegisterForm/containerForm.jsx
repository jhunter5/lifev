import React from "react";
import FancyTitle from "./fancyTitle";
import RegisterForm from "./registerForm";
import RegisterGoogle from "./registerGoogle";


export default function ContainerForm(props){
    return (
        <div className="h-full w-1/2 p-5 flex flex-col justify-evenly">
            <div className="flex justify-center">
                <FancyTitle title="Register"/>
            </div>  
            <RegisterForm/>
            <RegisterGoogle/>
        </div>
    )
}