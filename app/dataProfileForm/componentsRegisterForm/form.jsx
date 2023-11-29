
import React, { useState } from "react";
import { Card, CardBody, Input, Button, Select,Autocomplete,AutocompleteItem, SelectItem } from "@nextui-org/react";
import { genders, goals, diets, foodAllergies,activityLevels } from "./data";
import islogged from "../../islogged.js";
import obtainToken from "../../obtainToken";
import { useRouter } from "next/navigation";

export default function Form() {

  const [userData, setUserData] = useState({
    "age": 0,
    "gender": "",
    "height": 0,
    "weight": 0, 
    "dietHabit": "",
    "activityLevel": "",
    "foodAllergies": "",
    "favoriteFood": "",
    "dislikedFood": "",
    "diets": "",
    "goal": "",
  });

  const handleChange = (e, fieldName) => {
    setUserData({
      ...userData,
      [fieldName]: e.target.value,
    });
  };

  const isNumeric = (value) => !isNaN(Number(value));
  const validateUserData = () => {
    
    const isAgeValid = isNumeric(userData.age);
    const isHeightValid = isNumeric(userData.height);
    const isWeightValid = isNumeric(userData.weight);
    const isDietHabitValid = isNumeric(userData.dietHabit);
    const areTextFieldsValid =
      typeof userData.gender === "string" &&
      typeof userData.foodAllergies === "string" &&
      typeof userData.favoriteFood === "string" &&
      typeof userData.dislikedFood === "string" &&
      typeof userData.diets === "string" &&
      typeof userData.goal === "string";

    return (
      isAgeValid && isHeightValid && isWeightValid && areTextFieldsValid && isDietHabitValid
    );
  };

  const router = useRouter();

  const handleSubmit = async () => {

    if (!validateUserData()) {
      console.log("Error: Datos del formulario no válidos");
      return;
    }
    try {
        const token = localStorage.getItem('Authorization');
        if (!islogged()) {
            router.push("/login");
          return;
        }
    
      console.log(token);
      console.log(JSON.stringify(userData));

      const response = await fetch("https://back-live-v.onrender.com/crearperfil", {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": obtainToken(),
            },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        router.push("/profile");
      } else {
        console.log("Error en la solicitud 1:");
        console.log(response);
      }
    } catch (error) {
      console.log("Error en la solicitud 2:", error);
    }
  };


  return (
    <div className="w-full flex p-5 justify-around backdrop-filter backdrop-blur-lg bg-black/30">
      
      <div className="w-full flex p-5 justify-around backdrop-filter backdrop-blur-lg bg-black/30">
        <Card
            isBlurred
            className="w-3/6 rounded-r-none  bg-transparent"
        >
            <CardBody >
                <div className="mb-7 ">
                    <p className="text-teal-300 font-istok ">Health Data</p>
                    <p className="text-teal-300 opacity-60 text-xs">tell us about you</p>
                </div>
                <div className="flex flex-col justify-evenly">
                    
                    <Input 
                        label="Age" 
                        labelPlacement="outside" 
                        placeholder="Enter your Age" 
                        className="dark mb-5 text-white" 
                        onChange={(e) => handleChange(e, "age")}>
                        
                    </Input>

                    <Select 
                        size="md"
                        label="Gender"
                        labelPlacement="outside"
                        placeholder="Select your Gender"
                        display="block"
                        className="dark mb-5 text-black" 
                        defaultSelectedKeys={["None"]}
                        onChange={(e) => handleChange(e,"gender")}
                    >
                        {genders.map((gender) => (
                        <SelectItem display="none"className="dark"
                         key={gender.value} value={gender.value}>
                            {gender.value}
                        </SelectItem>
                        ))}
                    </Select>
                    <div className="flex">
                    <Input 
                        label="Height (meters)" 
                        labelPlacement="outside" 
                        placeholder="Enter your Heigh" 
                        className="dark mb-5 text-white pr-2" 
                        onChange={(e) => handleChange(e, "height")}>
                    </Input>
                    {/*<Select 
                        size="md"
                        label=""
                        labelPlacement="outside"
                        defaultSelectedKeys={["cm"]}
                        className="dark mb-5 text-white w-28" 
                        value={userData.gender}
                    >
                        {heightMeasurements.map((height) => (
                        <SelectItem key={height.value} value={height.value}>
                            {height.value}
                        </SelectItem>
                        ))}
                    </Select>*/}
                    </div>

                    <div className="flex">
                    <Input 
                        label="Weight (Kg)" 
                        labelPlacement="outside" 
                        placeholder="Enter your weight" 
                        className="dark mb-5 text-white pr-2" 
                        onChange={(e) => handleChange(e, "weight")}>
                    </Input>
                    {/*<Select 
                        size="md"
                        label=""
                        labelPlacement="outside"
                        defaultSelectedKeys={["kg"]}
                        className="dark mb-5 text-blac w-28" 
                    >
                        {widthMeasurements.map((weight) => (
                        <SelectItem key={weight.value} value={weight.value}>
                            {weight.value}
                        </SelectItem>
                        ))}
                    </Select>*/}
                    </div>   
                </div>
                
                <div className=" mb-7 content-center border-b-2 border-teal-300/20">
                    <p className="text-teal-300 font-istok mb-1">Habits</p>
                </div>
                <div className="flex flex-col justify-evenly ">
                    <Input 
                        label="Dietary habits" 
                        labelPlacement="outside" 
                        placeholder="How many meals do you eat in a day?" 
                        className="dark mb-5 text-white" 
                        onChange={(e) => handleChange(e, "dietHabit")}>
                    </Input>
                    <Select 
                        size="md"
                        label="Activity levels"
                        labelPlacement="outside"
                        placeholder="How would you rate your level of physical activity?"
                        className="dark mb-5 text-black"
                        defaultSelectedKeys={["None"]}
                        onChange={(e) => handleChange(e, "activityLevel")}

                    >
                        {activityLevels.map((activityLevel) => (
                        <SelectItem key={activityLevel.value} value={activityLevel.value}>
                            {activityLevel.value}
                        </SelectItem>
                        ))}
                    </Select>
                </div>

            </CardBody>
        </Card>
        
        <Card
            isBlurred
            className="w-3/6 rounded-l-none bg-transparent"
        >
            <CardBody >
                

                <div className=" mb-7 content-center border-b-2 border-teal-300/20">
                    <p className="text-teal-300 font-istok mb-1">Preferences</p>
                </div>
                <div className="flex flex-col justify-evenly ">
                <Select 
                    size="md"
                    label="Food allergies"
                    labelPlacement="outside"
                    placeholder="Do you have any food allergies?"
                    className="dark mb-5 text-black" 
                    defaultSelectedKeys={["None"]}
                    onChange={(e) => handleChange(e, "foodAllergies")}
                >
                    {foodAllergies.map((allergy) => (
                    <SelectItem key={allergy.value} value={allergy.value}>
                        {allergy.value}
                    </SelectItem>
                    ))}
                </Select>

                <Input 
                    label="Favorite food" 
                    labelPlacement="outside" 
                    placeholder="What food do you like the most?" 
                    className="dark mb-5 text-white" 
                    onChange={(e) => handleChange(e, "favoriteFood")}>
                </Input>
                <Input 
                    label="Food you don't like" 
                    labelPlacement="outside" 
                    placeholder="What are the recipes you don't like to eat?" 
                    className="dark mb-5 text-white" 
                    onChange={(e) => handleChange(e, "dislikedFood")}>
                </Input>
                <Select 
                    size="md"
                    label="Diets"
                    labelPlacement="outside"
                    placeholder="Do you follow any diet?"
                    className="dark mb-5 text-black" 
                    defaultSelectedKeys={["None"]}
                    onChange={(e) => handleChange(e, "diets")}
                >
                    {diets.map((diet) => (
                    <SelectItem key={diet.value} value={diet.value}>
                        {diet.value}
                    </SelectItem>
                    ))}
                </Select>
                </div>
                
                <div className=" mb-7 content-center border-b-2 border-teal-300/20">
                    <p className="text-teal-300 font-istok mb-1">Goal</p>
                </div>
                <div className="flex flex-col justify-evenly ">
                    <Select 
                        size="md"
                        label="Goal"
                        labelPlacement="outside"
                        placeholder="Select your Goal"
                        className="dark mb-5 text-black"
                        onChange={(e) => handleChange(e, "goal")}
                    >
                        {goals.map((goal) => (
                        <SelectItem key={goal.value} value={goal.value}>
                            {goal.value}
                        </SelectItem>
                        ))}
                    </Select>
                </div>

                <div className="">
                    <Button size="sm" className="bg-teal-300" onClick={handleSubmit} fullWidth>Start</Button>
                </div>
            </CardBody>
        </Card>
        </div>

    </div>
  );
}
