import React from "react";
import { Button, Divider } from "@nextui-org/react";
import {FcGoogle} from "react-icons/fc";

export default function RegisterGoogle(props){
    return(
        <div>
            <Divider></Divider>
            <Button fullWidth startContent={<FcGoogle/>} className="bg-white mb-6">{props.text}</Button>
        </div>  
    )
}