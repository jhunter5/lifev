'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Pagination } from "@nextui-org/react";

import Titulo from './Components/Tittle';
import BarraBusqueda from './Components/SearchBar';
import Receta from './Components/Results';
import Navbar from "../generalComponents/componentsNavbar/navbar";
import Footer from "../generalComponents/componentsFooter/footer";
import LoadingScreen from "../generalComponents/loading.jsx";

import islooged from "../islogged.js";

const PaginaPrincipal = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 2; 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRecipes = filteredRecipes.slice(startIndex, endIndex);
  

  const handleSearchChange = async (query) => {
    setSearchText(query);
    try {
      const response = await fetch(`https://back-live-v.onrender.com/api/buscanombre?q=${query}`);
      if (response.ok) {
        const recetas = await response.json();
        const searchedRecipes = Object.values(recetas);
        setFilteredRecipes(searchedRecipes);
        setCurrentPage(1); 
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

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
          <div className="flex flex-col w-auto h-auto">
            <Titulo/>
            <BarraBusqueda onSearch={handleSearchChange} />
            <div className="mt-4 h-auto flex flex-col items-center">
                {currentRecipes.map((recipe, index) => (
                  <Receta key={index} receta={recipe} />
                ))}
              </div>
              <div className='flex justify-center'>
              {filteredRecipes.length > itemsPerPage && (
                <Pagination total={filteredRecipes.length/2} current={currentPage} pageSize={itemsPerPage} onChange={(page) => setCurrentPage(page)}/>
              )}
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaginaPrincipal;

