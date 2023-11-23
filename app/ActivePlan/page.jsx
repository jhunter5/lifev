import React from 'react';
import Navbar from '../generalComponents/componentsNavbar/navbar';
import ContainerActivePlan from './componentsActivePlan/containerActivePlan';
import Footer from "../generalComponents/componentsFooter/footer";


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

