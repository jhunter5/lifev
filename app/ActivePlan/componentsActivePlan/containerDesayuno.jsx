'use client'
import React from 'react'
import { useState } from 'react'
import { Card, Image, CardBody, Input, Button } from "@nextui-org/react";
import Recipe from './recipe'

const ContainerDesayuno = () => {
  const [desayuno, setDesayuno] = useState([
    {
      name: "Ensalada",
      instructions: "1. Lava y corta la lechuga, el tomate y la cebolla.\n2. Mezcla los ingredientes en un tazón.\n3. Agrega aceite de oliva y vinagre al gusto.\n4. Mezcla bien y sirve.",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1770&ixlib=rb-40.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
    },
    {
      name: "Sandwich",
      instructions: "1. Extiende la masa de pizza en una bandeja.\n2. Extiende la salsa de tomate sobre la masa.\n3. Agrega el queso, pepperoni, champiñones y aceitunas.\n4. Hornea a 200°C durante 20-25 minutos",
      imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Lasagna",
      instructions: "1. Extiende la masa de pizza en una bandeja.\n2. Extiende la salsa de tomate sobre la masa.\n3. Agrega el queso, pepperoni, champiñones y aceitunas.\n4. Hornea a 200°C durante 20-25 minutos",
      imageUrl: "https://images.unsplash.com/photo-1546453570-d2fcacdafbb2?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
  ]);
  return (
    //contenedor comida
    <div className="p-4 grid grid-rows w-fit h-fit bg-none ">
      <div className=" align-top text-center w-52 h-12 text-white text-3xl font-normal font-['Istok Web']">Desayuno</div>
      {desayuno.map((desayuno, index) => {
        return (
          <Recipe key = {index} recipe = {desayuno}/>
        )
      })}
    </div>
  )
}

export default ContainerDesayuno
