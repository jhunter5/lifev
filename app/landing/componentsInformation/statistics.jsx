import React from "react";
import {Image} from "@nextui-org/react";


export default function STATISTICS(){
    return (
        <div className=" bg-black shadow w-full h-5/6 px-20">

            <div className="w-full h-128 bg-zinc-900 flex flex-col items-center justify-center "> 
                <p className="text-white  italic text-[38px] font-['Istok Web'] font-['Istok Web'] mt-20">
                    Check your progress
                </p>

                <div className="w-96 h-0 border border-white mt-5 "></div>
            </div>


            <div className="w-full h-128 bg-zinc-900 flex flex-col items-center justify-center"> 
                <Image isBlurred width={580} alt="LineChart" className="mt-10 mb-14"
                    src="https://media.istockphoto.com/id/1203803529/vector/stock-market-bubble-or-growth.jpg?s=612x612&w=0&k=20&c=qIuPLkH5NDzQOfuQWkwbmbP0HYKXyDwqEoYtrcGjGAs="/>
            </div>

        </div>

    )   
}


  



