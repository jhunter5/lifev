import React from "react";
import {Image} from "@nextui-org/react";


export default function PROGRESS(){
    return (
        <div className=" bg-black shadow w-full h-5/6 px-20">

            <div className="w-full h-20 bg-zinc-900 flex flex-col items-center justify-center "> 
                <p className="text-white  italic text-[43px] font-['Istok Web'] mt-20">
                    Progress
                </p>
            </div>

            <div className="w-full h-5/6 bg-zinc-900 flex flex-col items-center justify-center"> 
                <Image  width={500} alt="LineChart" className="mt-10"
                    src="https://media.istockphoto.com/id/1203803529/vector/stock-market-bubble-or-growth.jpg?s=612x612&w=0&k=20&c=qIuPLkH5NDzQOfuQWkwbmbP0HYKXyDwqEoYtrcGjGAs="/>
                
                    <div className="w-2/5 h-32 rounded-[10px] mt-10 mb-10 bg-teal-300 flex flex-row flex-nowrap justify-center">

                        <div className="w-76 h-32 ml-3 text-center mt-3">
                            <p className="text-black text-[28px] font-extrabold font-['Jost'] capitalize">STREAK</p>
                            <p className="text-black text-[56px] font-extrabold font-['Jost'] capitalize">11</p>
                        </div>

                        <div className="w-76 h-32 ml-20 text-center mt-3">
                            <p className="text-black text-[28px] font-extrabold font-['Jost'] capitalize">OMISSION DAYS</p>
                            <p className="text-black text-[56px] font-extrabold font-['Jost'] capitalize">03</p>
                        </div>
                    
                    </div>
            </div>
        
    </div>
    )   
}