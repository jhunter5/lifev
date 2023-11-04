"use client";
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';

export default function BACKGROUND() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black shadow w-full h-5/6 px-20">
      <div className="w-full h-16 bg-teal-300">
        <div className="flex flex-row flex-nowrap justify-end mr-24">
          <Button
            color="default"
            className="bg-gradient-to-tr from-indigo-500 to-emerald-500 text-white shadow-lg w-10 h-10 rounded-full translate-y-3"
          >
            Sign up
          </Button>
        </div>
      </div>

      <div
        className={`w-full h-[490px] transition-opacity-colors duration-300 ease-soft-spring ${
          isHovered ? 'opacity-80 text-black' : 'text-white'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: isHovered
              ? `url('https://images.unsplash.com/photo-1555243896-c709bfa0b564?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
              : `url('https://images.unsplash.com/photo-1602405385186-440222576763?auto=format&fit=crop&q=80&w=1774&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div
            className={`w-full h-full ${
              isHovered ? 'backdrop-opacity-50' : ''
            }`}
          ></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <p className="text-end italic text-[110px] font-['Istok Web']">
              Life-V
            </p>
            <p className="text-end text-[55px] font-['Istok Web']">
              Smart Health, Happier Life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}




