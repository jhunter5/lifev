import React from 'react';
import { Card, Image, Textarea, Button} from '@nextui-org/react';
import NutritionInfo from './NutritionalInfo'

const ShowRecipe = () => {
  const pizzaImageUrl = 'https://plus.unsplash.com/premium_photo-1676047258657-b94091fa5297?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4090&ixid=mxwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D';
  const recipeDescription = `
  Ingredientes:

  1 cabeza de lechuga romana
  1/2 taza de lechuga picada
  1/2 taza de lechuga picada
  1/4 taza de tomates cherry cortados por la mitad
  1/4 taza de pepinos cortados en rodajas
  1/4 taza de aceitunas negras sin hueso
  1/4 taza de queso feta desmenuzado
  1 cucharada de aceite de oliva
  1 cucharada de vinagre balsámico
  Sal y pimienta al gusto

  Preparación:

  1. Lava y corta la lechuga romana en trozos.
  2. En un bol grande, combina la lechuga, los tomates cherry, los pepinos, las aceitunas negras y el queso feta.
  3. En un pequeño tazón, mezcla el aceite de oliva, el vinagre balsámico, sal y pimienta al gusto.
  4. Vierte el aderezo sobre la ensalada y revuelve bien.
`;

  const RecipeDescription = () => {
    return (
      <Textarea className= 'font-istok' value={recipeDescription} rows={7} minRows={7} maxRows={12} size={147} />
    );
  };

  return (
    <Card className="w-5/6 h-full bg-neutral-800 flex p-4">
      <div className="flex p-4">
        <div className="w-1/2"> 
          <Image src={pizzaImageUrl} isZoomed alt="Pizza" className="object-cover h-full rounded-md" style={{height: '570px', marginTop: '20px'}}/>
        </div>
        <div className="ml-4 overflow-auto w-1/2 "> 
          <h1 className='font-istok text-center text-teal-300 text-2xl mt-4'>Ensalada</h1>
          <RecipeDescription />
          <div className="mt-4"></div>
          <NutritionInfo />
        </div>
      </div>
      <div  className='flex justify-between p-2'>
          <Button className='transition ease-in-out delay-150 bg-teal-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300 w-1/4 h-8 font-istok shadow-lg shadow-black/50'>Return</Button>
          <Button className='transition ease-in-out delay-150 bg-teal-500 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300 w-1/4 h-8 font-istok shadow-lg shadow-black/50'>More Recipes</Button>
        </div>
    </Card>
  );
};

export default ShowRecipe;
