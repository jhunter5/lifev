"use client"
import React from "react";
import { useState } from "react";
import { Card , CardBody } from "@nextui-org/react";

export default function MoodSelect(props){
    const [moodImage, setMoodImage] = useState("https://images.unsplash.com/photo-1529047033375-f402d3da24ca?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    const moodImages = {
        "muy bueno": "https://images.unsplash.com/photo-1624274254814-bbe34d8afcc6?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "bueno": "https://images.unsplash.com/photo-1551137811-4f2fd4d92fcf?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "malo": "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?auto=format&fit=crop&q=80&w=1886&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "muy malo": "https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

    const handleMouseEnter = (mood) => {
        setMoodImage(moodImages[mood]);
    }

    const handleMouseLeave = () => {
        setMoodImage("https://images.unsplash.com/photo-1529047033375-f402d3da24ca?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    }

    return(
        
        <Card  className="min-h-[700px]">
            <CardBody className="h-full">
                <div className="flex justify-evenly">
                    <div className=" h-full flex flex-col justify-center border">
                        {["muy bueno", "bueno", "malo", "muy malo"].map((mood, index) => (
                            <button 
                                key={index}
                                className="m-1 p-2 bg-blue-500 text-white rounded"
                                onMouseEnter={() => handleMouseEnter(mood)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {mood}
                            </button>
                        ))}
                    </div>
                    <div className="w-1/2 h-4">
                    {moodImage && <img src={moodImage} alt={moodImage} />}
                    </div>
                </div>
            </CardBody>
        </Card>
    )
    
}