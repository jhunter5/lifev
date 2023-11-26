"use client"
import React from "react";
import LinesChart from "./lineChart";
import PieChart from "./pieChart";


export default function Progress(){
    return (
        <div className=" bg-black shadow w-full h-5/6 px-20">

            <div className="w-full h-20 bg-zinc-900 flex flex-col items-center justify-center "> 
                <p className="text-white  italic text-4xl font-['Istok Web'] mt-20">
                    Progress
                </p>
            </div>

            <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center"> 
                    <p className="w-3/5 h-0 border border-white mt-12 "></p>
                    <p className="text-white  italic text-[32px] font-['Istok Web'] mt-10">
                        Streak
                    </p>

                    <div className="w-1/2 h-1/2 bg-stone-200 flex  items-center justify-center mt-4">
                        <LinesChart/>
                    </div>

                    <p className="text-white  italic text-[32px] font-['Istok Web'] mt-10">
                         Percentage of Monthly Meals
                    </p>

                    <div className="w-1/2 h-4/5 bg-stone-200   flex  items-center justify-center mt-4">
                        <PieChart/>
                    </div>
            </div>        

            <div className="w-full h-5/6 bg-zinc-900 flex flex-col items-center justify-center">  
                    <div className="w-2/6 h-28 rounded-[10px] mt-10 mb-10 bg-teal-300 flex flex-row flex-nowrap justify-center">

                        <div className="w-76 h-32 ml-3 text-center mt-5">
                            <p className="text-black text-2xl font-extrabold font-['Jost'] capitalize">STREAK</p>
                            <p className="text-black text-5xl font-extrabold font-['Jost'] capitalize">11</p>
                        </div>

                        <div className="w-76 h-32 ml-20 text-center mt-5">
                            <p className="text-black text-2xl font-extrabold font-['Jost'] capitalize">OMISSION DAYS</p>
                            <p className="text-black text-5xl font-extrabold font-['Jost'] capitalize">03</p>
                        </div>
                    
                    </div>
            </div>
        
    </div>
    )   
}