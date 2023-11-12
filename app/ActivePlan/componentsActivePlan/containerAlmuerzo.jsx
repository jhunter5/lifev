'use client'
import React from 'react'
import { useState } from 'react'
import Recipe from './recipe'

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
        <div className="p-4 grid grid-rows w-fit h-fit bg-none border-x-2 border-teal-300/60">
            <div className=" align-top text-center w-52 h-12 text-white text-3xl font-normal font-['Istok Web']">Almuerzo</div>
            {almuerzo.map((almuerzo, index) => {
                return (
                    <Recipe key = {index} recipe = {almuerzo}/>
                )
            })}
        </div>
    )
}

export default ContainerAlmuerzo