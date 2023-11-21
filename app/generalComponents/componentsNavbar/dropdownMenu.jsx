'use client'
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUserDelete } from "react-icons/ai";

export default function MenuDropdown() {

   const token = localStorage.getItem('Authorization')
   const disabledKeys = token ? [] : ['log out']

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
      <DropdownMenu disabledKeys={disabledKeys}>
        <DropdownItem key="profile" href="/profile">Profile</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="log out" className="text-danger" color="danger" startContent={<AiOutlineUserDelete/>} onClick={handleSubmit}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
