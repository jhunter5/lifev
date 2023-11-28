import React from 'react';
import { Card, Image, Textarea, Button } from '@nextui-org/react';
import NutritionInfo from './NutritionalInfo';
import Link from 'next/link';

const ShowRecipe = ({ recipeData }) => {
  const { label, image, calories, fat, carbs, protein, ingredients } = recipeData;

  return (
    <Card className="w-5/6 h-auto bg-neutral-800 flex p-4">
      <div className="flex p-4">
        <div className="w-1/2">
          <Image src={image.url} isZoomed alt={label} className="object-cover h-full rounded-md" style={{ height: '570px', marginTop: '20px' }} />
        </div>
        <div className="ml-4 overflow-auto w-1/2 ">
          <h1 className='font-istok text-center text-teal-300 text-2xl mt-4'>{label}</h1>
          <p className="font-bold text-teal-300 mt-4">Ingredients:</p>
          <Textarea className='font-istok' value={ingredients.join('\n')} rows={7} minRows={7} maxRows={12} size={147} />  
          <div className="mt-4"></div>
          <NutritionInfo calories={calories} fat={fat} carbs={carbs} protein={protein} />
        </div>
      </div>
      <div className='flex justify-between p-2'>
      <Link href="/SearchRecipe">
      <Button className='transition ease-in-out delay-150 bg-teal-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300 w-1/4 h-8 font-istok shadow-lg shadow-black/50'>Return</Button>
          </Link>
          <Link href="/ActivePlan">
      <Button className='transition ease-in-out delay-150 bg-teal-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300 w-1/4 h-8 font-istok shadow-lg shadow-black/50'>ActivePlan</Button>
          </Link>
      </div>
    </Card>
  );
};

export default ShowRecipe;
