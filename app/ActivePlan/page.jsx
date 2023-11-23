'use client' 
// import react
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

// import components
import Navbar from '../generalComponents/componentsNavbar/navbar';
import ContainerActivePlan from './componentsActivePlan/containerActivePlan';
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

export default function Page() {
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
        <div className='h-full bg-neutral-800'>
            <Navbar />
            <div className='grid place-content-center'>
              <ContainerActivePlan />
            </div>
            
            <Footer />
        </div>
    )
}

