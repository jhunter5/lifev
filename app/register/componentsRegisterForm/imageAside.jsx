import React from "react";

export default function ImageAside(props){
    return (
        <div className=" h-full w-1/2 ">
            <img className="w-full h-full rounded-l-3xl" src={props.image} alt="register"/>
        </div>
    )
}