import React from 'react'
import Link from 'next/link'


const redirect = () => {
    console.log("penepenepenepene")
}

const Recipe = ({recipe}) => {
    return (
        <div className = "w-52 h-fit group bg-white border-1 border-black/70">
            <div className="relative overflow ">
                <h1 className="text-black text-center">{recipe.name}</h1>
                <img src={recipe.imageUrl} alt={recipe.instructions} />
                <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link href={'recipe/'+`${recipe.name}`} className="h-full w-full bg-teal-300/20  py-2 px-5 ">
                    <button onClick={redirect} className="h-full w-full bg-none text-white ">
                        cocinar!
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Recipe