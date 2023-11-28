'use client'
import React from "react";

export default function Goal(userData){
    console.log(userData);

    if (userData && userData.userData) {
        // Accede a todas las propiedades del objeto userData
        for (const key in userData.userData) {
            console.log(`${key}: ${userData.userData[key]}`);
        }

        // Accede al nombre solo si existe
        if (userData.userData.nombre) {
            console.log(`Nombre: ${userData.userData.nombre}`);
        } else {
            console.log('Nombre no disponible en userData');
        }
    } else {
        console.log('userData no disponible');
    }

    return (
        <div className=" bg-black shadow w-full h-full px-20">
            <div className="w-full h-20 bg-zinc-900 flex flex-row flex-nowrap justify-center"> 
                <div className="w-auto h-16 rounded-[10px] mt-10 bg-teal-300 bg-">

                    <p className=" text-[40px] italic font-['Istok Web'] text-center text-black px-6">
                        Welcome  {userData.userData.nombre} 
                    </p>
                </div>
            </div>

            <div className="w-full h-72 bg-zinc-900 flex flex-col justify-center items-center text-white">
                <p className="text-4xl italic font-'Istok Web' text-center mt-5">
                    Goal
                </p>

                <select className="w-72 h-12 text-[22px]  text-black mt-5">
                    <option>Increase muscle mass</option>
                    <option>Lose weight</option>
                    <option>Maintain weight</option>
                </select>

                <p className=" italic text-4xl font-['Istok Web']  mt-10">
                        Time to get it 
                </p>
            </div>

            <div className="w-full h-32 bg-zinc-900 flex flex-row justify-center items-center">
                <div className="flex space-x-10 mb-8 mt-3">
                    <div className="w-40 h-28 bg-teal-300 rounded-[10px] justify-around">
                    <div className="w-56 h-20 -ml-7 text-center mt-5">
                        <p className="text-black text-2xl font-extrabold font-sans capitalize">MONTHS</p>
                        <p className="text-black text-5xl font-extrabold font-sans capitalize">02</p>
                    </div>
                    </div>
                    <div className="w-40 h-28 bg-teal-300 rounded-[10px] justify-around">
                    <div className="w-56 h-20 text-center -ml-8 mt-5">
                        <p className="text-black text-2xl font-extrabold font-sans capitalize">DAYS</p>
                        <p className="text-black text-5xl font-extrabold font-sans capitalize">01</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )   
}