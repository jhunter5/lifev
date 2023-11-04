import React from 'react';
import { Card, Image, CardBody, Input, Button } from "@nextui-org/react";

const Receta = ({ receta }) => {
  return (
    <div className="w-full max-w-screen-md mb-4">
      <Card>
        <div className="flex">
          <Image
            isZoomed
            src={receta.imageUrl}
            alt={receta.name}
            className=" w-96 h-auto"/>
          <CardBody>
            <h2>{receta.name}</h2>
            <div>{receta.instructions.split('\n').map((step, i) => (<p key={i}>{step}</p>))}</div>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

export default Receta;

