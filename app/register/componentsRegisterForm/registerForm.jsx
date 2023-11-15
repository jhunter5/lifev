'use client'
import React, {useState} from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react";

export default function RegisterForm(){

    const [userData, setUserData] = useState({username: '', password: '' , email: ''});

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async() => {
        try {
            const response = await fetch('https://back-live-v.onrender.com/register', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(userData),
            })

        if(response.ok){
            // const {token} = await response.json();
            // localStorage.setItem('token', token);
            // router.push('/dashboard');
            console.log('ok')
            console.log(response)
        }else{
            console.log('error')
            console.log(response)
        }
        } catch (error) {
            console.log(error)
        }

        
    }

    console.log(JSON.stringify(userData))

    return( 
        <Card 
            isBlurred
            className="border-none backdrop-filter backdrop-blur-lg  bg-black/30" 
        >
            <CardBody >
                <div className="mb-7">
                        <p className="text-teal-300 font-istok ">Create  your Account</p>
                        <p className="text-teal-300 opacity-60 text-xs">Let´s get started with your journey</p>
                </div>
                <div className="flex flex-col justify-evenly ">
                    <Input label="Name" labelPlacement="outside" placeholder="Enter your Name" className="dark mb-5 text-white" name="username" value={userData.username} onChange={handleInputChange}></Input>
                    <Input label="Email" labelPlacement="outside" placeholder="Enter your Email" className="dark mb-5 text-white" name="email" value={userData.email} onChange={handleInputChange}></Input>
                    <Input label="Password" labelPlacement="outside" placeholder="Enter your Password" className="dark mb-5 text-white" type="password" name="password" value={userData.password} onChange={handleInputChange}></Input>
                </div>
                <div className="">
                    <Button size="sm" className="bg-teal-300" onClick={handleSubmit} fullWidth> Sign Up</Button>
                </div>
            </CardBody>
        </Card> 
    );
}