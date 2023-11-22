'use client' 
// imports from react
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

// import components
import Background from "./background";
import Goal from "./componentsProfile/goalTime";
import Personal from "./componentsProfile/personalInformation";
import Specifications from "./componentsProfile/specifications";
import Progress from "./componentsProfile/progress";
import Footer from "../generalComponents/componentsFooter/footer";
import Navbar from "../generalComponents/componentsNavbar/navbar";
import LoadingScreen from "../generalComponents/loading.jsx";

// import functions
import islooged from "../islooged.js";

export default function Page() {
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
            <Navbar/>
            {/* <Background /> */}
            <Goal />
            <Personal />
            <Specifications />
            <Progress />
            <Footer/>
        </div>  
    )
}