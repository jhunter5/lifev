import React from "react";
import Image from "next/image";

export default function ImageProfile(props) {
    return (
        <div className="flex items-center">
            <Image src={props.url} alt="profile" className="rounded-full w-10 h-9" width={100} height={100}/>
        </div>
    )
}