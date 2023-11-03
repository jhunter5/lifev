import React from "react";
import {Image, Card, CardBody}  from "@nextui-org/react";

export default function HeroSection() {
    return(
        <div className="w-full relative ">
            <Image src="https://images.unsplash.com/photo-1696446700384-c58cba714c1c?auto=format&fit=crop&q=80&w=1772&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%" height="100%" alt="Hero" radius="none" className=""/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Card className="dark bg-black bg-opacity-60 backdrop-blur-lg p-3">
                    <CardBody>
                        <h1 className="text-6xl text-center font-istok font-bold text-teal-300">Weekly Scheduler</h1>
                        <h2 className="text-2xl text-center font-jost font-bold text-teal-300">Schedule your diet with ease.</h2>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}