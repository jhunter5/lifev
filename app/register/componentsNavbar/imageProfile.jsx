import React from "react";
import Image from "next/image";

export default function ImageProfile(props) {
    return (
        <div className="flex items-center w-10 h-10">
            <Image src={props.url} alt="profile" className="rounded-full w-full h-full" width={100} height={100}/>
        </div>
    )
}