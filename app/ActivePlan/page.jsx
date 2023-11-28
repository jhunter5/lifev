"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from '../generalComponents/componentsNavbar/navbar';
import ContainerActivePlan from './componentsActivePlan/containerActivePlan';
import Footer from "../generalComponents/componentsFooter/footer";
import islogged from "../islogged.js";
import obtainToken from "../obtainToken";


async function fetchRecipe(){
  const res = await fetch("https://back-live-v.onrender.com/api/recetas", {
    headers: {
      Authorization: obtainToken(), 
    },
  });
  return res.json()
}


export default function Page() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState(null);


    useEffect(() => {

      async function getRecipe() {
        try {
          const response = await fetchRecipe()
          setRecipe(response)
          setLoading(false)
        } catch (error) {
          console.error(error)
        }
      }
  
      if (!islogged()) {
          router.push('/login')
      }
      else {
        getRecipe()
      }

    }, [router])

    //console.log(recipe)

    return (
        <div className='h-full bg-neutral-800'>
            <Navbar />
            <div className='grid place-content-center'>
              <ContainerActivePlan recipeData={recipe} />
            </div>
            <Footer />
        </div>
    )
}

