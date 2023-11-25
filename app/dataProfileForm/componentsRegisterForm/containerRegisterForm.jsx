'use client'
import React from "react";
import Form from "./form";
import { useRouter } from 'next/navigation';

export default function ContainerRegisterForm(props){
    const router = useRouter();
    return (
        <div className="justify-content mx-28 mt-10 mb-28 h-fit rounded-3xl backdrop-filter backdrop-blur-lg bg-white/10 shadow-lg ">
            <Form router={router} />
        </div>
    )
}