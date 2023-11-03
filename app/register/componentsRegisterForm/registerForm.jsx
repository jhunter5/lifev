'use client'
import React from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react";

export default function RegisterForm(){
    return( 
        <Card 
            isBlurred
            className="border-none backdrop-filter backdrop-blur-lg  bg-black/30" 
        >
            <CardBody >
                <div className="mb-7">
                        <p className="text-teal-300 font-istok ">Create  your Account</p>
                        <p className="text-teal-300 opacity-60 text-xs">Let´s get started with your journey</p>
                </div>
                <div className="flex flex-col justify-evenly ">
                    <Input label="Name" labelPlacement="outside" placeholder="Enter your Name" className="dark mb-5 text-white"></Input>
                    <Input label="Email" labelPlacement="outside" placeholder="Enter your Email" className="dark mb-5 text-white"></Input>
                    <Input label="Password" labelPlacement="outside" placeholder="Enter your Password" className="dark mb-5 text-white" type="password"></Input>
                </div>
                <div className="">
                    <Button size="sm" className="bg-teal-300" onClick={() => console.log('si')} fullWidth> Sign Up</Button>
                </div>
            </CardBody>
        </Card> 
    );
}