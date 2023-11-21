'use client'
import React from "react";
import {Button} from "@nextui-org/react";
import { BiSolidHeartCircle } from "react-icons/bi";

export default function Specifications(){
    return (
        <div className=" bg-black shadow w-full h-full px-20">

            <div className="w-full h-20 bg-zinc-900 flex flex-col items-center justify-center "> 
                <p className="text-white  italic text-[43px] font-['Istok Web'] mt-20">
                    Your Measures
                </p>
            </div>
            <div className="w-full h-5/6 bg-zinc-900 flex flex-row flex-nowrap justify-around"> 

                <div className="w-80 h-44 bg-teal-300 rounded-[10px] mt-16 flex flex-col items-center justify-center">
                    
                    <div className="w-56 h-44 mt-0 text-center">
                        <p className="text-black text-[27px] font-extrabold font-['Jost'] capitalize mt-5">DAILY CALORIES</p>
                        <p className="text-black text-[27px] font-bold font-['Jost'] capitalize text-center mt-5"> 2267 KCAL</p>
                    </div>

                </div>
                <div className="w-80 h-44 bg-teal-300 rounded-[10px] mt-16 flex flex-col items-center justify-center">

                    <div className="w-56 h-28 text-center ml-12 mr-12 mt-0">
                        <p className="text-black text-[27px] font-extrabold font-['Jost'] capitalize mb-4">BASAL METABOLISM</p>
                        <p className="text-black text-[27px] font-bold font-['Jost'] capitalize text-center mt-4"> 1426.857 KCAL</p>
                    </div>

                </div>
                <div className="w-80 h-44 bg-teal-300 rounded-[10px] mt-16 flex flex-col items-center justify-center">
               
                    <div className="w-56 h-28 text-center ml-10 mr-10 mt-0">
                        <p className="text-black text-[27px] font-extrabold font-['Jost'] capitalize mb-4"> MAINTENANCE CALORIES</p>
                        <p className="text-black text-[27px] font-bold font-['Jost'] capitalize text-center mt-4">2733.58 KCAL</p>
                    </div>
                </div>
            </div>




            <div className="w-full h-5/6 bg-zinc-900 flex flex-row flex-nowrap justify-around"> 
                <div className="w-80 h-64 bg-teal-600 rounded-[10px] mt-3 flex flex-col items-center justify-center">
                    <div className="w-56 h-60 mb-2 text-center">
                        <p className="text-black text-[15px] font-['Jost'] capitalize text-justify mt-8">
                            You must nourish your body with foods that help your body to function, consuming them is like adjusting the fuel tank to reach your goals and this must be of high quality.
                        </p>
                    </div>
                </div>
                <div className="w-80 h-64 bg-teal-600 rounded-[10px] mt-3 flex flex-col items-center justify-center">
                    <div className="w-56 h-60 mb-2 text-center">
                        <p className="text-black text-[16px] font-['Jost'] capitalize text-justify mt-8">
                            It is the minimum amount of energy your body needs to maintain its vital functions. It is like the essential fuel your body uses to keep you alive, even when you are resting.
                        </p>
                    </div>
                </div>
                <div className="w-80 h-64 bg-teal-600 rounded-[10px] mt-3 flex flex-col items-center justify-center">
                    <div className="w-56 h-60 mb-2 text-center">
                        <p className="text-black text-[16px] font-['Jost'] capitalize text-justify mt-8"> 
                            Add up your basal metabolic rate calories and maintain the balance between the calories you burn through daily activities and exercise, and the calories you get from food to maintain your weight without gaining or losing weight.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full h-28 bg-zinc-900 flex flex-row flex-nowrap justify-around"> 
                    <div className="flex flex-row flex-nowrap justify-center ">
                    
                        <Button  color="default" className="bg-gradient-to-tr from-pink-700 to-rose-700 text-white shadow-lg
                            w-72 h-18 rounded-full translate-y-6  italic text-[23px] font-istok-web mt-12">

                            <a href=""><BiSolidHeartCircle size={40} color="#FFFFFF" position={"center"} /></a>


                            Favorites Recipes
                        </Button>
                    </div>
            </div>
    </div>
    )   
}