import React from 'react'
import Link from 'next/link'




const Recipe = ({recipe}) => {
    return (
        <div className = "w-52 h-fit group bg-white border-1 border-black/70">
            <div className="relative overflow ">
                <h1 className="text-black text-center">{recipe.recipe.label}</h1>
                <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link href={'recipes/'+`${(recipe.recipe.uri).split("_")[1]}`} className="h-full w-full bg-teal-300/20  py-2 px-5 ">
                    <button className="h-full w-full bg-none text-white ">
                    lets cook!!!
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Recipe