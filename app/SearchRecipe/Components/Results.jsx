import React from 'react';
import { Card, Image, CardBody, Button } from "@nextui-org/react";
import Link from 'next/link';

const Receta = ({ receta }) => {
  return (
    <div className="w-full mb-4">
      <Card>
        <div className="flex bg-gray-200">
          <Image
            isZoomed
            src={receta.image.url}
            alt={"imagen"}
            className="w-80 h-48"
          />
          <CardBody className="p-4">
            <h2 className="place-self-center text-xl font-bold mb-2">{receta.label}</h2>
            <p className="text-gray-600 font-istok">Calories: {receta.calories.toFixed(0)}</p>
            <p className="text-gray-600 font-istok">Fat: {receta.fat.toFixed(0)}g</p>
            <p className="text-gray-600 font-istok">Carbs: {receta.carbs.toFixed(0)}g</p>
            <p className="text-gray-600 font-istok">Protein: {receta.protein.toFixed(0)}g</p>
            <Link href={`/recipes/${receta.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ir a receta
            </Link>
          </CardBody>
          {/* <Button className=' place-self-end transition ease-in-out delay-150 bg-teal-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300 w-1/4 h-8 font-istok shadow-lg shadow-black/50 mb-4 mr-4'>View</Button> */}
        </div>
      </Card>
    </div>
  );
};

export default Receta;

