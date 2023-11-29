"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from '../generalComponents/componentsNavbar/navbar';
import ContainerActivePlan from './componentsActivePlan/containerActivePlan';
import Footer from "../generalComponents/componentsFooter/footer";
import islogged from "../islogged.js";
import obtainToken from "../obtainToken";


export default function Page() {

    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState([]);
    let render = false



    const fetchData = async () => {
      try{

        const response = await fetch("https://back-live-v.onrender.com/api/recetas", {
          headers: {
            Authorization: obtainToken(), 
          },
        });
        if (response.ok) {
          const result = await response.json();
          if (render == false){
            setRecipe(result);
            render = true
          }
        } 
      }catch (error) {
        console.error("Error al obtener datos del perfil:", error);
      }
    };
  
    useEffect(() => {
      if (!islogged()) {
        router.push('/login')
      }
      else {
        fetchData();
        setLoading(false)
      }
    }, [router]);

    

    return (
        loading ? <LoadingScreen /> : 
        <div className='h-full bg-neutral-800'>
            <Navbar />
            <div className='grid place-content-center'>
              <ContainerActivePlan recipeData={recipe} />
            </div>
            <Footer />
        </div>
    )
}

