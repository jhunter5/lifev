"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from '../generalComponents/componentsNavbar/navbar';
import ContainerActivePlan from './componentsActivePlan/containerActivePlan';
import Footer from "../generalComponents/componentsFooter/footer";
import islogged from "../islogged.js";
import obtainToken from "../obtainToken";


export default function Page() {
    


    return (
        <div className='h-full bg-neutral-800'>
            <Navbar />
            <div className='grid place-content-center'>
              <ContainerActivePlan />
            </div>
            
            <Footer />
        </div>
    )
}

