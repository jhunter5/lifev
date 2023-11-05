import React from "react";

export default function SPECIFICATIONS(){
    return (
        <div className=" bg-black shadow w-full h-full px-20">
            <div className="w-full h-5/6 bg-zinc-900 flex flex-row flex-nowrap justify-around"> 
                <div className="w-80 h-56 bg-teal-300 rounded-[10px] mt-36 flex flex-col items-center justify-center">
                    
                    <div className="w-56 h-28 mt-2 text-center">
                        <p className="text-black text-[32px] font-extrabold font-['Jost'] capitalize">DISEASES</p>
                        <p className="text-black text-[16px] font-['Jost'] capitalize text-justify"> We identify your specific body characteristics, and we assess and classify them.</p>
                    </div>

                </div>
                <div className="w-80 h-56 bg-teal-300 rounded-[10px] mt-36 flex flex-col items-center justify-center">

                    <div className="w-56 h-28 text-center ml-12 mr-12 mt-2">
                        <p className="text-black text-[32px] font-extrabold font-['Jost'] capitalize">PREFERENCES</p>
                        <p className="text-black text-[16px] font-['Jost'] capitalize text-justify"> We generate diets keeping in mind your goal, diseases, preferences and allergies.</p>
                    </div>

                </div>
                <div className="w-80 h-56 bg-teal-300 rounded-[10px] mt-36 flex flex-col items-center justify-center">
               
                    <div className="w-56 h-28 text-center ml-10 mr-10 mt-2">
                        <p className="text-black text-[32px] font-extrabold font-['Jost'] capitalize">ALLERGIES</p>
                        <p className="text-black text-[16px] font-['Jost'] capitalize text-justify"> Our goal is your progress; it we will monitor and make adjustments to your plan.</p>
                    </div>
                </div>
            </div>
    </div>
    )   
}