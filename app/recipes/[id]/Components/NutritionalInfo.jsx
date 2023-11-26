import React from 'react';
import { Card } from "@nextui-org/react";

const NutritionInfo = ({ calories, fat, carbs, protein }) => {
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
            <td className="font-bold font-istok text-left border p-2">Calorías</td>
            <td className="font-istok text-left border p-2">{calories.toFixed(0)}</td>
          </tr>
          <tr>
            <td className="font-bold font-istok text-left border p-2">Grasas</td>
            <td className="font-istok text-left border p-2">{fat.toFixed(0)} g</td>
          </tr>
          <tr>
            <td className="font-bold font-istok text-left border p-2">Carbohidratos</td>
            <td className="font-istok text-left border p-2">{carbs.toFixed(0)} g</td>
          </tr>
          <tr>
            <td className="font-bold font-istok text-left border p-2">Proteínas</td>
            <td className="font-istok text-left border p-2">{protein.toFixed(0)} g</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default NutritionInfo;
