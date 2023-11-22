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

const recipes = [
  {
    name: "Ensalada",
    instructions: "1. Lava y corta la lechuga, el tomate y la cebolla.\n2. Mezcla los ingredientes en un tazón.\n3. Agrega aceite de oliva y vinagre al gusto.\n4. Mezcla bien y sirve.",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1770&ixlib=rb-40.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D",
  },
  {
    name: "Pizza",
    instructions: "1. Extiende la masa de pizza en una bandeja.\n2. Extiende la salsa de tomate sobre la masa.\n3. Agrega el queso, pepperoni, champiñones y aceitunas.\n4. Hornea a 200°C durante 20-25 minutos",
    imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const PaginaPrincipal = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearchChange = (query) => {
    setSearchText(query);
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query)
    );
    setFilteredRecipes(filtered);
  };

  const router = useRouter()

  useEffect(() => {
    if (!islooged()) {
        router.push('/login')
    }
  }, [router])

  if (!islooged()) {
    return <LoadingScreen/>; 
  }

  return (
    <div>
      <Navbar />
      <div className="bg-black w-full h-screen flex items-center justify-center">
        <div className="flex justify-center w-4/5 h-screen bg-neutral-800 p-10 text-center mx-auto items-center flex flex-col">
          <div className="flex flex-col">
            <Titulo/>
            <BarraBusqueda onSearch={handleSearchChange} />
            <div className="mt-4 flex flex-col items-center">
              {filteredRecipes.map((recipe, index) => (
                <Receta key={index} receta={recipe} />
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaginaPrincipal;

