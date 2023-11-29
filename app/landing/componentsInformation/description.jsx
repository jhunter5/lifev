'use client'
import React from "react";
import { Button, Image } from "@nextui-org/react";

export default function DESCRIPTION() {
  const scrollToSection = () => {
    const section = document.getElementById('knowUsSection');
    section.scrollIntoView({ behavior: 'smooth' });};

    return (
        <section id="knowUsSection" className="bg-black shadow w-full h-5/6 px-20">
        <div className="w-full h-20 bg-zinc-900">
            <div className="flex flex-row flex-nowrap justify-center">
            <Button
                color="default"
                className="bg-gradient-to-tr from-indigo-500 to-emerald-500 text-white shadow-lg
                    w-48 h-25 rounded-full translate-y-6  italic text-[27px] font-istok-web mt-5 "
                onClick={scrollToSection}
            >
                Know us
            </Button>
            </div>
        </div>

        <div className="w-full h-28 bg-zinc-900 flex flex-row flex-nowrap justify-start">
            <p className="text-white w-auto italic text-[38px] font-istok-web mt-16 ml-44">Who we are?</p>
        </div>

        <div className="w-full h-128 bg-zinc-900 flex flex-row flex-nowrap justify-around">

            <div className="w-3/5 h-128 flex justify-center mr-5 mt-8 ">
            <Image
                isZoomed
                isBlurred
                width={380}
                alt="NextUI Fruit Image with Zoom"
                src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=2006&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            </div>

            <p className="w-1/2 text-white text-[17px] font-normal font-istok-web capitalize  mt-16 mr-36 text-justify">
            Nowadays most people neglect their nutrition because they are aware of various tasks,
            in addition to misinformation and bad practices in their day to day; for example posture,
            lack of stretching, do not drink enough water a day, or eat the wrong way either exceeding
            the requirements of your body or on the other hand do not give your body the nutrients they
            need. So we offer a healthy and simple guide to improve their eating habits and have a more
            active life with information available in one place.
            </p>
        </div>
        </section>
    );
}


