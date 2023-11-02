import React from "react";

export default function Tittle(){
    return(
        <div className="content-around bg-black shadow w-full h-24 px-10">
            <div className="w-full h-[71px] bg-teal-300 rounded-[10px]">
                <p className="w-full h-[71px] text-black text-[40px] text-center font-istok font-semibold">Life V</p>
            </div>
            <div className= "content-center w-full h-[57.05px] text-center text-white text-3xl italic font-['Istok Web'] ">More Options </div>
            <div className="flex justify-evenly flex-wrap items-center bg-stone-800 w-full h-24 px-10">
                <div className="text-white text-3xl font-istok italic ">Search for:</div>
                <div className="w-4/5 h-[62px] bg-white rounded-[10px] px-10"></div>
            </div>
        </div>
        
    )
}

