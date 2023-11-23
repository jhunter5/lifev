'use client'
import React from 'react'
import { breakfasts } from './data'
import Recipe from './recipe'

const ContainerDesayuno = () => {
  return (
    //contenedor comida
    <div className="p-4 grid grid-rows w-fit h-fit bg-none ">
      <div className=" align-top text-center w-52 h-12 text-white text-3xl font-normal font-['Istok Web']">Desayuno</div>
      {breakfasts.map((breakfast, index) => {
        return (
          <Recipe key = {index} recipe = {breakfast}/>
        )
      })}
    </div>
  )
}

export default ContainerDesayuno
