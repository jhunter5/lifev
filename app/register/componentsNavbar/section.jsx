import React from "react";
import Text from "./text";

export default function Section(props){
    return (
        <div className="flex flex-row space-x-2 items-center text-stone-950">
            {props.icon}
            <Text content={props.content}/>
        </div>
    )
}