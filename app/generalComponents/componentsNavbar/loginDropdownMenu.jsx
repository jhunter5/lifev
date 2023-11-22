'use client'
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUserDelete } from "react-icons/ai";

export default function LoginMenuDropdown() {

    const handleSubmit = () => {
        localStorage.removeItem('Authorization')
        window.location.reload()
    }
   

  return (
    <Dropdown className="bg-gray-950"> 
      <DropdownTrigger>
        <Button 
          variant="light" 
          className="text-teal-400"
          startContent={<AiOutlineUser />}
        >
          Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu >
        <DropdownItem key="home" href="/">Home</DropdownItem>
        <DropdownItem key="profile" href="/profile">Profile</DropdownItem>
        <DropdownItem key="activePlan" href="/ActivePlan">Active Plan</DropdownItem>
        <DropdownItem key="searchRecipe" href="/SearchRecipe">Search Recipe</DropdownItem>
        <DropdownItem key="logOut" className="text-danger" color="danger" startContent={<AiOutlineUserDelete/>} onClick={handleSubmit}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
