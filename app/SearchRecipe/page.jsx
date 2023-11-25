// imports react
'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

// imports components
import Titulo from './Components/Tittle';
import BarraBusqueda from './Components/SearchBar';
import Receta from './Components/Results';
import Pagination from './Components/Pagination';
import Navbar from "../generalComponents/componentsNavbar/navbar";
import Footer from "../generalComponents/componentsFooter/footer";
import LoadingScreen from "../generalComponents/loading.jsx";

// import functions
import islooged from "../islooged.js";

// const recipes = [
// ];

const PaginaPrincipal = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = React.useState(true);


  const handleSearchChange = async (query) => {
    setSearchText(query);

    try {
      const response = await fetch(`https://back-live-v.onrender.com/api/buscanombre?q=${query}`);
      if (response.ok) {
        const  recetas  = await response.json();
        const searchedRecipes = Object.values(recetas); // Obtenemos los valores del objeto recetas
        setFilteredRecipes(searchedRecipes);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  // console.log(filteredRecipes);
  const router = useRouter()

  useEffect(() => {
    if (!islooged()) {
        router.push('/login')
    }
    else {
        setLoading(false)
    }
  }, [router])

  return (
    loading ? <LoadingScreen /> :
    <div>
      <Navbar />
      <div className="bg-black w-full h-screen flex items-center justify-center ">
        <div className="flex justify-center w-4/5 h-screen bg-neutral-800 p-10 text-center mx-auto items-center flex-col">
          <div className="flex flex-col w-auto overflow-x-auto">
            <Titulo/>
            <BarraBusqueda onSearch={handleSearchChange} />
            <div className="mt-4 flex flex-col items-center ">
              {filteredRecipes && filteredRecipes.map((recipe, index) => (
                <Receta key={index} receta={recipe} />
                // console.log(recipe)
              ))}
            </div>
            {/* <Pagination /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaginaPrincipal;

