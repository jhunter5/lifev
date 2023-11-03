import React from "react";

export default function SERVICES(){
    return (
        <div className=" bg-black shadow w-full h-5/6 px-20">

            <div className="w-full h-128 bg-zinc-900 flex flex-row flex-nowrap justify-center"> 
                <p className="text-white  italic text-[38px] font-['Istok Web'] font-['Istok Web']  mt-14">
                    Our Services
                </p>
            </div>

            <div className="w-full h-full bg-zinc-900 flex flex-row flex-nowrap justify-around"> 

                <div className="w-80 h-56 bg-teal-300 rounded-[10px] mt-10"></div>

                <div className="w-80 h-56 bg-teal-300 rounded-[10px] mt-10"></div>

                <div className="w-80 h-56 bg-teal-300 rounded-[10px] mt-10"></div>

            </div>
        </div>

    )   
}

