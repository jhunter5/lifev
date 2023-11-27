
import React, { useState } from "react";
import { Card, CardBody, Input, Button, Select,Autocomplete,AutocompleteItem, SelectItem } from "@nextui-org/react";
import { genders, goals, diets, allergies, heightMeasurements, widthMeasurements, activityLevels } from "./data";

export default function Form(props) {

  const [userData, setUserData] = useState({
    "age": "",
    "gender": "",
    "height": "",
    "weight": "", 
    "dietHabit": "",
    "activityLevel": "",
    "foodAllergies": "",
    "favoriteFood": "",
    "dislikedFood": "",
    "diets": "",
    "goal": "",
  });

  const handleChange = (e, fieldName) => {
    const value = e.target.value;
    setUserData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const isNumeric = (value) => !isNaN(Number(value));
  const validateUserData = () => {
    const isAgeValid = isNumeric(userData.age);
    const isHeightValid = isNumeric(userData.height);
    const isWeightValid = isNumeric(userData.weight);
    const areTextFieldsValid =
      typeof userData.gender === "string" &&
      typeof userData.dietHabit === "string" &&
      typeof userData.foodAllergies === "string" &&
      typeof userData.favoriteFood === "string" &&
      typeof userData.dislikedFood === "string" &&
      typeof userData.diets === "string" &&
      typeof userData.goal === "string";

      console.log(isAgeValid );
      console.log( isHeightValid);
      console.log(isWeightValid );
      console.log(areTextFieldsValid);

    return (
      isAgeValid && isHeightValid && isWeightValid && areTextFieldsValid 
    );
  };
  const handleSubmit = async () => {
    if (!validateUserData()) {
      console.log("Error: Datos del formulario no válidos");
      return;
    }
    try {
        const token = localStorage.getItem('Authorization');

        if (!token) {
          router.push("/login");
          return;
        }

      console.log(token);

      const response = await fetch("https://back-live-v.onrender.com/crearperfil", {
        method: "PUT",
        mode: "cors",
        headers: {Authorization: token},

      });

      if (response.ok) {
        props.push("/profile");
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
                    <Input label="Age" labelPlacement="outside" placeholder="Enter your Age" className="dark mb-5 text-white"></Input>
                    <Autocomplete 
                        size="md"
                        label="Gender"
                        labelPlacement="outside"
                        placeholder="Select your Gender"
                        display="block"
                        className="dark mb-5 text-black" 
                        value={userData.age}
                        onChange={(e) => handleChange(e, "age")}
                    >
                        {genders.map((gender) => (
                        <AutocompleteItem display="none"className="dark  "
                         key={gender.value} value={gender.value}>
                            {gender.value}
                        </AutocompleteItem>
                        ))}
                    </Autocomplete>
                    <div className="flex">
                    <Input label="Height" labelPlacement="outside" placeholder="Enter your Heigh" className="dark mb-5 text-white pr-2"></Input>
                    <Select 
                        size="md"
                        label=""
                        labelPlacement="outside"
                        defaultSelectedKeys={["cm"]}
                        className="dark mb-5 text-white w-28" 
                        value={userData.gender}
                        onChange={(e) => handleChange(e, "gender")}
                    >
                        {heightMeasurements.map((height) => (
                        <SelectItem key={height.value} value={height.value}>
                            {height.value}
                        </SelectItem>
                        ))}
                    </Select>
                    </div>

                    <div className="flex">
                    <Input label="Weight" labelPlacement="outside" placeholder="Enter your weight" className="dark mb-5 text-white pr-2"></Input>
                    <Select 
                        size="md"
                        label=" "
                        labelPlacement="outside"
                        defaultSelectedKeys={["kg"]}
                        className="dark mb-5 text-blac w-28" 
                    >
                        {widthMeasurements.map((weight) => (
                        <SelectItem key={weight.value} value={weight.value}>
                            {weight.value}
                        </SelectItem>
                        ))}
                    </Select>
                    </div>   
                </div>
                
                <div className=" mb-7 content-center border-b-2 border-teal-300/20">
                    <p className="text-teal-300 font-istok mb-1">Habits</p>
                </div>
                <div className="flex flex-col justify-evenly ">
                    <Input label="Dietary habits" labelPlacement="outside" placeholder="How many meals do you eat in a day?" className="dark mb-5 text-white"></Input>
                    <Select 
                        size="md"
                        label="Activity levels"
                        labelPlacement="outside"
                        placeholder="How would you rate your level of physical activity?"
                        className="dark mb-5 text-black" 
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
                >
                    {allergies.map((allergy) => (
                    <SelectItem key={allergy.value} value={allergy.value}>
                        {allergy.value}
                    </SelectItem>
                    ))}
                </Select>
                <Input label="Favorite food" labelPlacement="outside" placeholder="What food do you like the most?" className="dark mb-5 text-white"></Input>
                <Input label="Food you don't like" labelPlacement="outside" placeholder="What are the recipes you don't like to eat?" className="dark mb-5 text-white"></Input>
                <Select 
                    size="md"
                    label="Diets"
                    labelPlacement="outside"
                    placeholder="Do you follow any diet?"
                    className="dark mb-5 text-black" 
                    defaultSelectedKeys={["None"]}
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
