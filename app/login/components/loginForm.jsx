'use client'
import React from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { AiFillHeart } from "react-icons/ai";

export default function LoginForm(){
    return(
        <Card
        isBlurred
        className="border-none backdrop-filter backdrop-blur-lg bg-black/30">
            <CardBody className="flex flex-col justify-center">
                <div className="mb-7">
                    <p className="text-teal-300 font-istok "> Login </p>
                    <div className="flex flex-row">
                        <p className="text-teal-300 opacity-60 text-xs mr-1">We love to see U again</p>
                        <AiFillHeart className="text-teal-300 opacity-60"/>
                    </div> 
                </div>
                <div className="flex flex-col justify-evenly ">
                    <Input label="Email" labelPlacement="outside" placeholder="Enter your Email" className="dark mb-5 text-white"></Input>
                    <Input label="Password" labelPlacement="outside" placeholder="Enter your Password" className="dark mb-5 text-white" type="password"></Input>
                </div>
                <div>
                    <Button size="sm" className="bg-teal-300 mb-1" onClick={() => console.log('si')} fullWidth> Log In!</Button>
                    <a href="http://localhost:3000/login" className="text-teal-300 opacity-60 text-xs">Forgot Password?</a>
                </div>
                
                    
            </CardBody>
        </Card>
    )
}

