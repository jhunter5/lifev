import React from "react";
import FancyTitle from "app/register/componentsRegisterForm/fancyTitle.jsx"; 
import LoginForm from './loginForm.jsx';
import RegisterGoogle from "app/register/componentsRegisterForm/registerGoogle.jsx";


export default function ContainerFormLogin(){
    return (
        <div className="w-1/2 p-5 flex flex-col justify-around ">
            <div className="flex justify-center">
                <FancyTitle title="Welcome Back!"/>
            </div> 
            <LoginForm/>
            <RegisterGoogle text='Login In with Google'/>
        </div>
    )
}