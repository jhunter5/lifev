'use client'
import React from "react";

export default function GOAL(){
    return (
        <div className=" bg-black shadow w-full h-full px-20">
            <div className="w-full h-20 bg-zinc-900 flex flex-row flex-nowrap justify-center"> 
                <div className="w-2/5 h-16 rounded-[10px] mt-10 bg-teal-300 bg-">

                    <p className=" text-[45px] italic font-['Istok Web'] text-center text-black">
                        Welcome  @nickname 
                    </p>
                </div>
            </div>

            <div className="w-full h-96 bg-zinc-900 flex flex-col justify-center items-center text-white">
                <p className="text-[43px] italic font-'Istok Web' text-center mt-10">
                    Goal
                </p>

                <select className="w-72 h-12 text-[24px]  text-black mt-5">
                    <option>Increase muscle mass</option>
                    <option>Lose weight</option>
                    <option>Maintain weight</option>
                </select>

                <p className=" italic text-[43px] font-['Istok Web']  mt-20">
                        Time to get it 
                </p>
            </div>

            <div className="w-full h-56 bg-zinc-900 flex flex-row justify-center items-center">
                <div className="flex space-x-10 mb-16 mt-5">
                    <div className="w-44 h-48 bg-teal-300 rounded-[10px] justify-around">
                    <div className="w-56 h-20 -ml-7 text-center mt-7">
                        <p className="text-black text-[32px] font-extrabold font-['Jost'] capitalize">MONTHS</p>
                        <p className="text-black text-[74px] font-extrabold font-['Jost'] capitalize">02</p>
                    </div>
                    </div>
                    <div className="w-44 h-48 bg-teal-300 rounded-[10px] justify-around">
                    <div className="w-56 h-20 text-center -ml-6 mt-7">
                        <p className="text-black text-[32px] font-extrabold font-['Jost'] capitalize">DAYS</p>
                        <p className="text-black text-[74px] font-extrabold font-['Jost'] capitalize">01</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )   
}