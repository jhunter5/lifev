"use client"
import React from "react";
import LinesChart from "./lineChart";
import PieChart from "./pieChart";


export default function Progress({userData}){
    return (
        <div className=" bg-black shadow w-full h-5/6 px-20">

            <div className="w-full h-20 bg-zinc-900 flex flex-col items-center justify-center "> 
                <p className="text-white  italic text-4xl font-istok mt-20">
                    Progress
                </p>
            </div>

            <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center"> 
                    <p className="w-3/5 h-0 border border-white mt-12 "></p>
                    <p className="text-white  italic text-[32px] font-istok mt-10">
                        Streak
                    </p>

                    <div className="w-1/2 h-1/2 bg-stone-200 flex  items-center justify-center mt-4">
                        <LinesChart userData={userData}/>
                    </div>

                    <p className="text-white  italic text-[32px] font-istok mt-10">
                         Percentage of Monthly Meals
                    </p>

                    <div className="w-1/2 h-4/5 bg-stone-200   flex  items-center justify-center mt-4">
                        <PieChart userData={userData}/>
                    </div>
            </div>       
        
    </div>
    )   
}