'use client'
import React from 'react'
import Recipe from './recipe'

const ContainerCena = ({recipeData}) => {
  return (
    <div className="p-4 grid grid-rows w-fit h-fit bg-none ">
      <div className=" align-top text-center w-52 h-12 text-white text-3xl font-normal font-['Istok Web']">Dinner</div>
      {recipeData.slice(6, 9).map((dinner, index) => {
        return (
          <Recipe key = {index} recipe = {dinner}/>
        )
      })}
    </div>
  )
}

export default ContainerCena
