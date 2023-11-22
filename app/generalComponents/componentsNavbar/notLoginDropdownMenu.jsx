'use client'
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, divider} from "@nextui-org/react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function NotLoginMenuDropdown() {
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
        <DropdownItem key="profile" href="/register" startContent={<AiOutlineUserAdd />} color="primary">Register</DropdownItem>
        <DropdownItem key="profile" href="/login" startContent={<AiOutlineUserSwitch/>} color="success">Login</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
