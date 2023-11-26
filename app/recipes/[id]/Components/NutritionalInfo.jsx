import React from 'react';
import { Card } from "@nextui-org/react";

const NutritionInfo = () => {
  const nutritionInfo = {
    calorías: 200,
    carbohidratos: '25 gramos',
    proteínas: '10 gramos',
    grasas: '10 gramos',
    fibra: '5 gramos',
  };

  return (
    <Card className="p-2 bg-teal-500">
      <h1 className='font-bold text-lg mb-2'>INFORMACION NUTRICIONAL</h1>
      <table className="w-full border-collapse border bg-white" style={{ fontSize: '0.875rem' }}>
        <thead>
          <tr>
            <th className="font-bold text-center border p-2 bg-teal-300">Información</th>
            <th className="font-bold text-center border p-2 bg-teal-300">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-bold text-left border p-2">Calorías</td>
            <td className="font-istok text-left border p-2">{nutritionInfo.calorías}</td>
          </tr>
          <tr>
            <td className="font-bold text-left border p-2">Carbohidratos</td>
            <td className="font-istok text-left border p-2">{nutritionInfo.carbohidratos}</td>
          </tr>
          <tr>
            <td className="font-bold text-left border p-2">Proteínas</td>
            <td className="font-istok text-left border p-2">{nutritionInfo.proteínas}</td>
          </tr>
          <tr>
            <td className="font-bold text-left border p-2">Grasas</td>
            <td className="font-istok text-left border p-2">{nutritionInfo.grasas}</td>
          </tr>
          <tr>
            <td className="font-bold text-left border p-2">Fibra</td>
            <td className="font-istok text-left border p-2">{nutritionInfo.fibra}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
  
};

export default NutritionInfo;
