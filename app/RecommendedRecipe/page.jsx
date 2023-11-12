import React from 'react';
import ShowRecipe from './Components/ShowRecipe';
import Navbar from "../generalComponents/componentsNavbar/navbar";
import Footer from "../generalComponents/componentsFooter/footer";

const PaginaPrincipal = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black flex items-center justify-center">
        <div className="w-4/5 h-screen flex items-center justify-center">
          <div className="flex justify-center w-full h-screen p-10 text-center mx-auto items-center flex flex-col">
            <ShowRecipe />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaginaPrincipal;
