'use client'
import React from "react";
import {Button} from "@nextui-org/react";
import { BiSolidHeartCircle } from "react-icons/bi";

export default function Specifications(userData){
    return (
        <div className=" bg-black shadow w-full h-full px-20">

            <div className="w-full h-20 bg-zinc-900 flex flex-col items-center justify-center "> 
                <p className="text-white  italic text-4xl ffont-istok mt-20">
                    Your Measures
                </p>
            </div>

            <div size= "sm" className="w-full h-5/6 bg-zinc-900 flex flex-row flex-nowrap justify-around"> 

            <div size="sm" className="w-10/12 h-36 bg-zinc-800 rounded-[10px] mt-16 flex flex-row items-center justify-center space-x-12">
                <div size="sm" className="w-44 h-28 bg-gradient-to-tr from-pink-600 to-rose-600 rounded-[10px] flex flex-col items-center justify-center text-white">
                    <div className="w-56 h-44 mt-0 text-center">
                    <p className="text-white text-lg font-extrabold font-istok  capitalize mt-5">Diet</p>
                    <p className="text-white text-lg font-bold font-istok  capitalize text-center mt-5">{userData.userData.dieta}</p>
                    </div>
                </div>

                <div size="sm" className="w-44 h-28 bg-gradient-to-tr from-pink-600 to-rose-600 rounded-[10px] flex flex-col items-center justify-center text-white">
                    <div className="w-56 h-28 text-center ml-12 mr-12 mt-0">
                    <p className="text-white text-lg font-extrabold font-istok  capitalize mt-5">IMC</p>
                    <p className="text-white text-lg font-bold font-istok  capitalize text-center mt-5">{userData.userData.imc}</p>
                    </div>
                </div>

                <div size="sm" className="w-44 h-28 bg-gradient-to-tr from-pink-600 to-rose-600 rounded-[10px] flex flex-col items-center justify-center text-white">
                    <div className="w-56 h-28 text-center ml-10 mr-10 mt-0">
                    <p className="text-white text-lg font-extrabold font-istok  capitalize mt-5">IMC rating </p>
                    <p className="text-white text-lg font-bold font-istok  capitalize text-center mt-5">{userData.userData.clasificacion_imc}</p>
                    </div>
                </div>

                <div size="sm" className="w-44 h-28 bg-gradient-to-tr from-pink-600 to-rose-600 rounded-[10px] flex flex-col items-center justify-center text-white">
                    <div className="w-56 h-28 text-center ml-10 mr-10 mt-0">
                    <p className="text-white text-lg font-extrabold font-istok  capitalize mt-5"> Body fat % </p>
                    <p className="text-white text-lg font-bold font-istok  capitalize text-center mt-5">{userData.userData.pgc}</p>
                    </div>
                </div>
            </div>

            </div>
            <div className="w-full h-5 bg-zinc-900 flex flex-col items-center justify-center"> 
                    <p className="w-3/5 h-0 border border-white mt-16 "></p>
            </div>
            <div size= "sm" className="w-full h-5/6 bg-zinc-900 flex flex-row flex-nowrap justify-around"> 
            
            <div size="sm" className="w-10/12 h-48 bg-zinc-800 rounded-[10px] mt-16 flex flex-row items-center justify-center space-x-4">
                <div size="sm" className="w-72 h-40 bg-teal-300 rounded-[10px] flex flex-col items-center justify-center">
                    <div className="w-56 h-44 mt-5 text-center">
                    <p className="text-black text-2xl font-extrabold font-['Istok Web']  capitalize mt-5">DAILY CALORIES</p>
                    <p className="text-black text-2xl font-bold font-istok  capitalize text-center mt-5">{userData.userData.calorias_necesarias_diarias} KCAL</p>
                    </div>
                </div>

                <div size="sm" className="w-72 h-40 bg-teal-300 rounded-[10px] flex flex-col items-center justify-center">
                    <div className="w-56 h-28 text-center ml-12 mr-12 mt-0">
                    <p className="text-black text-2xl font-extrabold font-['Istok Web']   capitalize mb-4">BASAL METABOLISM</p>
                    <p className="text-black text-2xl font-bold font-istok  capitalize text-center mt-4">{userData.userData.metabolismo_basal} KCAL</p>
                    </div>
                </div>

                <div size="sm" className="w-72 h-40 bg-teal-300 rounded-[10px] flex flex-col items-center justify-center">
                    <div className="w-56 h-28 text-center ml-10 mr-10 mt-0">
                    <p className="text-black text-2xl font-extrabold font-['Istok Web']   capitalize mb-4">MAINTENANCE CALORIES</p>
                    <p className="text-black text-2xl font-bold font-istok  capitalize text-center mt-4">{userData.userData.calorias_ideales_diarias} KCAL</p>
                    </div>
                </div>
            </div>
            </div>

 
                <div size= "sm" className="w-full h-5/6 bg-zinc-900 flex flex-row flex-nowrap justify-around"> 

                <div size= "sm" className=" w-10/12 h-72 bg-zinc-800 rounded-[10px] mt-2 flex flex-row items-center justify-center space-x-4">
                    <div size= "sm" className="w-72 h-64 bg-teal-600 rounded-[10px] mt-3 flex flex-col items-center justify-center">
                        <div className="w-56 h-60 mb-2 text-center">
                            <p className="text-black text-[15px] font-istok  capitalize text-justify mt-8">
                                You must nourish your body with foods that help your body to function, consuming them is like adjusting the fuel tank to reach your goals and this must be of high quality.
                            </p>
                        </div>
                    </div>
                    <div size= "sm" className="w-72 h-64 bg-teal-600 rounded-[10px] mt-3 flex flex-col items-center justify-center">
                        <div className="w-56 h-60 mb-2 text-center">
                            <p className="text-black text-[16px] font-istok  capitalize text-justify mt-8">
                                It is the minimum amount of energy your body needs to maintain its vital functions. It is like the essential fuel your body uses to keep you alive, even when you are resting.
                            </p>
                        </div>
                    </div>
                    <div size= "sm" className="w-72 h-64 bg-teal-600 rounded-[10px] mt-3 flex flex-col items-center justify-center">
                        <div className="w-56 h-60 mb-2 text-center">
                            <p className="text-black text-[16px] font-istok  capitalize text-justify mt-8"> 
                                Add up your basal metabolic rate calories and maintain the balance between the calories you burn through daily activities and exercise, and the calories you get from food to maintain your weight without gaining or losing weight.
                            </p>
                        </div>
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