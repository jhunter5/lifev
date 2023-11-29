"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import BACKGROUND from "../landing/componentsBackground/backgroundPage";
import Goal from "./componentsProfile/goalTime";
import Personal from "./componentsProfile/personalInformation";
import Specifications from "./componentsProfile/specifications";
import Progress from "./componentsProfile/progress";
import Footer from "../generalComponents/componentsFooter/footer";
import Navbar from "../generalComponents/componentsNavbar/navbar";
import LoadingScreen from "../generalComponents/loading.jsx";
import islogged from "../islogged.js";
import obtainToken from "../obtainToken";


export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch("https://back-live-v.onrender.com/perfil", {
        headers: {
          Authorization: obtainToken(), 
        },
      });
      if (response.ok) {
        const result = await response.json();
        setUserData(result);
        // console.log(userData)
      } else {
        console.log("Error al obtener datos del perfil:", response.status);
      }
    } catch (error) {
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


  return( 
    loading ? <LoadingScreen /> : 
    <div>
      <Navbar />
      <BACKGROUND />
      <Goal userData={userData} />
      <Personal userData={userData} />
      <Specifications userData={userData} />
      <Progress userData={userData} />
      <Footer />
    </div>
  );
}