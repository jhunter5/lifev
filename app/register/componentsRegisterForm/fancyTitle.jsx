import React from "react";

export default function FancyTitle(props){
    return(
        <p className=" font-istok antialiased text-2xl italic font-semibold text-teal-300 underline decoration-teal-300 underline-offset-8 "> {props.title}</p>    
    )
}