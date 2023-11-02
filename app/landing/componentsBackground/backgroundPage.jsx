import React from "react";

export default function BACKGROUND(){
    return (
        <div className=" bg-black shadow w-full h-5/6 px-20">
            <div className="w-full h-16 bg-teal-300 ">   
                
            </div>

            <div className="bg-cover bg-center w-full h-[490px]"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1602405385186-440222576763?auto=format&fit=crop&q=80&w=1774&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                    , backgroundPosition: 'center center' }}>

                    <div className="absolute hover:bg-red-500 transition-colors duration-300 ease-linear inset-0 flex flex-col justify-center items-center text-center">
                        <p className=" text-stone-300 text-end italic text-[110px] font-['Istok Web']">Life-V</p>
                        <p className=" text-stone-300 text-end text-[55px] font-['Istok Web']">Smart Health, Happier Life</p>
                    </div>
            </div>
 
        </div>
    )   
}