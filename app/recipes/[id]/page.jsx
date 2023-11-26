'use client' 
// imports from react
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// import components
import ShowRecipe from './Components/ShowRecipe';
import Navbar from "../../generalComponents/componentsNavbar/navbar";
import Footer from "../../generalComponents/componentsFooter/footer";
import LoadingScreen from "../../generalComponents/loading.jsx";

// import functions
import islooged from "../../islooged.js";


async function fetchRecipe(id){
  const res = await fetch(`https://back-live-v.onrender.com/api/buscador?id=${id}`)
  return res.json()
}

const PaginaPrincipal = ({params}) => {
  const router = useRouter()
  const [loading, setLoading] = React.useState(true);
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {

    async function getRecipe() {
      try {
        const response = await fetchRecipe(params.id)
        setRecipe(response)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    if (!islooged()) {
        router.push('/login')
    }
    else {
      getRecipe()
    }
  }, [router, params.id])

  console.log(recipe)
  

  return (
    loading ? <LoadingScreen /> : 
    <div>
      <Navbar />
      <div className="bg-black flex justify-center">
        <div className="w-4/5 h-screen flex items-center justify-center">
          <div className="flex justify-center w-full h-screen p-[2%] text-center mx-auto items-center flex-col">
            <ShowRecipe />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaginaPrincipal;
