import React from "react";
import { Image } from "@nextui-org/react";

export default function Personal(userData) {
  return (
    <div className="bg-black shadow w-full h-5/6 px-20">

      <div className="w-full h-28 bg-zinc-900 flex flex-col flex-nowrap justify-center ">
        <div className="w-full h-20 bg-zinc-900 flex flex-col items-center justify-center ">
          <p className="text-white italic text-4xl font-['Istok Web'] mt-5">
            Personal Information
          </p>
        </div>
      </div>

      <div className="w-full h-128 bg-zinc-900 flex flex-row flex-nowrap justify-center">

        <div className="w-1/2 h-1/2 flex justify-center items-center my-8">
          <Image
            src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="profile"
            className="rounded-full"
            width={400}
            height={400}
          />
        </div>

        <div className="w-auto h-72 bg-teal-600 flex flex-col justify-around m rounded-md mt-10 mr-8 ">
          <p className="text-white text-[20px] font-bold font-['Istok Web'] capitalize mt-3 px-6">
            Gender :    {userData.userData.genero}
          </p>
          <p className="text-white text-[20px] font-bold font-['Istok Web'] capitalize mb-3 px-6">
            Weight:     {userData.userData.peso} kg
          </p>
          <p className="text-white text-[20px] font-bold font-['Istok Web'] capitalize mb-3 px-6">
            Height: {userData.userData.altura} m
          </p>
          <p className="text-white text-[20px] font-bold font-['Istok Web'] capitalize mb-3 px-6">
            Age: {userData.userData.edad}
          </p>
          <p className="text-white text-[20px] font-bold font-['Istok Web'] capitalize mb-3 px-6">
            Activity level: {userData.userData.nivel_actividad_fisica}
          </p>
        </div>
      </div>
    </div>
  );
}



