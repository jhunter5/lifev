'use client' 
// imports from react
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

// import components
import ShowRecipe from './Components/ShowRecipe';
import Navbar from "../generalComponents/componentsNavbar/navbar";
import Footer from "../generalComponents/componentsFooter/footer";
import LoadingScreen from "../generalComponents/loading.jsx";

// import functions
import islooged from "../islooged.js";

const PaginaPrincipal = () => {

  const router = useRouter()
  const [loading, setLoading] = React.useState(true);

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
