import React from "react";
import {GiCherish, GiArchiveRegister} from "react-icons/gi";
import {FaClipboardList} from "react-icons/fa";

export default function SERVICES(){
    return (
        <div className=" bg-black shadow w-full h-5/6 px-20">

            <div className="w-full h-128 bg-zinc-900 flex flex-col justify-center items-center"> 
                <p className="text-white  italic text-[38px] font-['Istok Web']  mt-28">
                    Our Services
                </p>

                <div className="w-96 h-0 border border-white mt-5 ">
                </div>
            </div>

            <div className="w-full h-full bg-zinc-900 flex flex-row flex-nowrap justify-around"> 

                <div className="w-80 h-72 bg-teal-300 rounded-[10px] mt-10 flex flex-col items-center justify-center">
                    <a href="">
                        <GiCherish size={120} color="#000000" position={"center"} />
                    </a>
                    <div className="w-56 h-28 mt-5 text-center">
                        <p className="text-black text-[18px] font-bold font-['Istok Web']">First Assessment</p>
                        <p className="text-black text-[16px] font-normal font-['Istok Web'] text-justify"> We identify your specific body characteristics, and we assess and classify them.</p>
                    </div>

                </div>

                <div className="ww-80 h-72 bg-teal-300 rounded-[10px] mt-10 flex flex-col items-center justify-center">

                    <a href="">
                        < FaClipboardList size={120} color="#000000"  position={"center"}/>
                    </a>
                    <div className="w-56 h-28 text-center ml-12 mr-12 mt-5">
                        <p className="text-black text-[18px] font-bold font-['Istok Web']">Diet Creation</p>
                        <p className="text-black text-[16px] font-normal font-['Istok Web'] text-justify"> We generate diets keeping in mind your goal, diseases, preferences and allergies.</p>
                    </div>

                </div>
                
                <div className="w-80 h-72 bg-teal-300 rounded-[10px] mt-10 flex flex-col items-center justify-center">
               
                    <a href="">
                        < GiArchiveRegister size={120} color="#000000"  position={"center"}/>
                    </a>
                    <div className="w-56 h-28 text-center ml-10 mr-10 mt-5">
                        <p className="text-black text-[18px] font-bold font-['Istok Web']">Monitoring</p>
                        <p className="text-black text-[16px] font-normal font-['Istok Web'] text-justify"> Our goal is your progress; it we will monitor and make adjustments to your plan.</p>
                    </div>
                </div>

            </div>
        
    </div>
    )   
}

