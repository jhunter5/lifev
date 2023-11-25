import React from 'react';
import { Card, Image, CardBody, Input, Button } from "@nextui-org/react";

const Receta = ({ receta }) => {
  return (
    <div className="w-full  mb-4">
      <Card>
        <div className="flex">
          <Image
            isZoomed
            src={receta.image.url}
            alt={"imagen"}
            className="w-96 h-auto"/>
          <CardBody>
            <h2>{receta.label}</h2>
            <p>Calories: {receta.calories.toFixed(0)}</p>
            <p>Fat: {receta.fat.toFixed(0)}</p>
            <p>Carbs: {receta.carbs.toFixed(0)}</p>
            <p>Protein: {receta.protein.toFixed(0)}</p>
            {/* <p>{receta.calories}</p> */}
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

export default Receta;

