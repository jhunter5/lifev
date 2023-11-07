'use client'
import React from 'react'
import { useState } from 'react'

const ContainerAlmuerzo = () => {
    const [almuerzo, setAlmuerzo] = useState([
        {
            name: "Pizza",
            instructions: "1. Extiende la masa de pizza en una bandeja.\n2. Extiende la salsa de tomate sobre la masa.\n3. Agrega el queso, pepperoni, champiñones y aceitunas.\n4. Hornea a 200°C durante 20-25 minutos",
            imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Lasagna",
            instructions: "1. Extiende la masa de pizza en una bandeja.\n2. Extiende la salsa de tomate sobre la masa.\n3. Agrega el queso, pepperoni, champiñones y aceitunas.\n4. Hornea a 200°C durante 20-25 minutos",
            imageUrl: "https://images.unsplash.com/photo-1546453570-d2fcacdafbb2?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Hamburguesa",
            instructions: "1. Extiende la masa de pizza en una bandeja.\n2. Extiende la salsa de tomate sobre la masa.\n3. Agrega el queso, pepperoni, champiñones y aceitunas.\n4. Hornea a 200°C durante 20-25 minutos",
            imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhbWJ1cmd1ZXNhfGVufDB8fDB8fHww"
        },
    ]);
    return (
        <div className="p-4 grid grid-rows w-fit h-fit bg-none border-x-1">
            <div className=" align-top text-center w-52 h-12 text-white text-3xl font-normal font-['Istok Web']">Almuerzo</div>
            {almuerzo.map(almuerzo => {
                return (
                    <div class="w-52 h-fit group  bg-white border-1 border-black/70">

                        <div class="relative overflow ">
                            <h1 class="text-black text-center">{almuerzo.name}</h1>
                            <img src={almuerzo.imageUrl} alt={almuerzo.instructions} />
                            <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <button class="h-full w-full bg-black/20 text-white py-2 px-5 rounded-r-md">cocinar!</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ContainerAlmuerzo