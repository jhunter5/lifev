import React from "react";
import { Image } from "@nextui-org/react";

export default function PERSONAL() {
  return (
    <div className="bg-black shadow w-full h-5/6 px-20">

      <div className="w-full h-28 bg-zinc-900 flex flex-col flex-nowrap justify-center ">
        <div className="w-full h-20 bg-zinc-900 flex flex-col items-center justify-center ">
          <p className="text-white italic text-[43px] font-['Istok Web'] mt-20">
            Progress
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

        <div className="w-96 h-72 bg-teal-600 flex flex-col justify-around m rounded-md mt-10 p-5">
          <p className="text-white text-[20px] font-bold font-['Istok Web'] capitalize mb-5">
            Gender: male
          </p>
          <p className="text-white text-[20px] font-bold font-['Istok Web'] capitalize mb-3">
            Weight: 70 kg
          </p>
          <p className="text-white text-[20px] font-bold font-['Istok Web'] capitalize mb-3">
            Height: 1,75 cm
          </p>
          <p className="text-white text-[20px] font-bold font-['Istok Web'] capitalize mb-3">
            Age: 60
          </p>
          <p className="text-white text-[20px] font-bold font-['Istok Web'] capitalize mb-3">
            Activity level: Moderately active
          </p>
        </div>
      </div>
    </div>
  );
}



