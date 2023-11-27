'use client'
//import from react
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

//import components
import Navbar from "../generalComponents/componentsNavbar/navbar.jsx";
import Footer from "../generalComponents/componentsFooter/footer";
import ContainerLogin from "./components/containerLogin.jsx";
import LoadingScreen from "../generalComponents/loading.jsx";

//import functions
import islooged from "../islogged.js";

export default function Page() {
    const router = useRouter()
    const [loading, setLoading] = React.useState(true);
 
    useEffect(() => {
      if (islooged()) {
          router.push('/profile')
      } else {
          setLoading(false)
      }
    }, [router])

    return (
        loading ? <LoadingScreen /> :
        <>
            <Navbar />
            <ContainerLogin image='https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&q=80&w=1041&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ></ContainerLogin>
            <Footer />
        </>  
    )
}