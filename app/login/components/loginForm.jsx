'use client'
import React, {useState} from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function LoginForm(){

    const router = useRouter()

    const [loginData, setLoginData] = useState({username: '', password: ''})

    const handleInputChange = (e) => {
        setLoginData({
                ...loginData,
                [e.target.name]: e.target.value
            })
    }

    const handleSubmit = async() => {

        try {
            const response = await fetch('https://back-live-v.onrender.com/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
            },

            body: JSON.stringify(loginData),
            })

            if(response.ok){
                const {token} =await response.json()
                localStorage.setItem('Authorization', token)
                setTimeout(function() {localStorage.removeItem('Authorization')}, 1800000)
                router.push('/profile')
            }
            else{
                console.log(response)
            }
        } catch (error){
            console.log(error)
        }
    }

    return(
        <Card
        isBlurred
        className="border-none backdrop-filter backdrop-blur-lg bg-black/30">
            <CardBody className="flex flex-col justify-center">
                <div className="mb-7">
                    <p className="text-teal-300 font-istok "> Login </p>
                    <div className="flex flex-row">
                        <p className="text-teal-300 opacity-60 text-xs mr-1">We love to see U again</p>
                        <AiFillHeart className="text-teal-300 opacity-60"/>
                    </div> 
                </div>
                <div className="flex flex-col justify-evenly ">
                    <Input label="Username" labelPlacement="outside" placeholder="Enter your Username" className="dark mb-5 text-white" name="username" value={loginData.email} onChange={handleInputChange}></Input>
                    <Input label="Password" labelPlacement="outside" placeholder="Enter your Password" className="dark mb-5 text-white" type="password" name="password" value={loginData.password} onChange={handleInputChange}></Input>
                </div>
                <div>
                    <Button size="sm" className="bg-teal-300 mb-1" onClick={handleSubmit} fullWidth> Log In!</Button>
                    <a href="/register" className="text-teal-300 opacity-60 text-xs">Creat an account</a>
                </div>
                
                    
            </CardBody>
        </Card>
    )
}

