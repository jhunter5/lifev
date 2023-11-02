import React from "react";
import { Button, Divider } from "@nextui-org/react";
import {FcGoogle} from "react-icons/fc";

export default function RegisterGoogle(){
    return(
        <div>
            <Divider orientation="horizontal"></Divider>
            <Button fullWidth startContent={<FcGoogle/>} className="bg-white mb-6">Sign Up with Google</Button>
        </div>  
    )
}