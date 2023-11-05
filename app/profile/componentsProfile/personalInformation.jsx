'use client'
import React from "react";
import {Image} from "@nextui-org/react";

export default function PERSONAL(){
    return (
        <div className=" bg-black shadow w-full h-5/6 px-20">

            <div className="w-full h-28 bg-zinc-900 flex flex-col flex-nowrap justify-center "> 
                <div className="text-white flex flex-col justify-center items-center">
                    <p className="w-3/5 h-0 border border-white mb-10 "></p>
                    <p className="text-white w-auto italic text-[38px] font-istok-web">Personal Information</p>
                </div>

            </div>

            <div className="w-full h-128 bg-zinc-900 flex flex-row flex-nowrap justify-center "> 

                <div className="w-1/2 h-128 flex justify-center mr- mt-8 ">
                    <Image src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                         alt="profile" className="rounded-full w-full h-full" width={200} height={200}/>   
                </div>
                    
                <div className="w-1/2 h-128 flex flex-col flex-nowrap justify-around "> 
                    <p className="w-44 h-5 text-white text-[20px] font-normal font-['Istok Web'] capitalize  mt-5 mr-20 text-justify"
                        > Gender : male </p>

                    <p className="w-44 h-5 text-white text-[20px] font-normal font-['Istok Web'] capitalize  mt-5 mr-20 text-justify"
                        > Weight : 70 kg </p>

                    <p className="w-44 h-5 text-white text-[20px] font-normal font-['Istok Web'] capitalize  mt-5 mr-20 text-justify"
                        > Height : 1,75 </p>

                    <p className="w-44 h-5 text-white text-[20px] font-normal font-['Istok Web'] capitalize  mt-5 mr-20 text-justify"
                        > Age : 25 </p>
                </div>
            </div>
        </div>
    )   
}


