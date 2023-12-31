'use client'
import React from 'react'
import Recipe from './recipe'

const ContainerDesayuno = ({recipeData}) => {
  return (
    //contenedor comida
    <div className="p-4 grid grid-rows w-fit h-fit bg-none ">
      <div className=" align-top text-center w-52 h-12 text-white text-3xl font-normal font-['Istok Web']">Breakfast</div>
      {recipeData.slice(0, 3).map((breakfast, index) => {
        return (
          <Recipe key = {index} recipe = {breakfast}/>
        )
      })}
    </div>
  )
}

export default ContainerDesayuno
