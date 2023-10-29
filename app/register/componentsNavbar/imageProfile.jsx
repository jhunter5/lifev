import React from "react";

export default function ImageProfile(props) {
    return (
        <div className="w-11 h-11">
            <img src={props.url} alt="profile" className="rounded-full w-full h-full"></img>
        </div>
    )
}