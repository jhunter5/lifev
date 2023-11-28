'use client'
import React from 'react'
import { comidas } from './data'
import Recipe from './recipe'

const ContainerAlmuerzo = ({recipeData}) => {
    return (
        <div className="p-4 grid grid-rows w-fit h-fit bg-none border-x-2 border-teal-300/60">
            <div className=" align-top text-center w-52 h-12 text-white text-3xl font-normal font-['Istok Web']">Almuerzo</div>
            {recipeData.slice(3, 6).map((lunch, index) => {
                return (
                    <Recipe key = {index} recipe = {lunch}/>
                )
            })}
        </div>
    )
}

export default ContainerAlmuerzo