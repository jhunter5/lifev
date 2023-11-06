import React from 'react'
import Comida from './comida'

export default function ContainerComidas() {
  return (
    <div className="grid grid-rows-3 w-full bg-black/30 rounded-lg">
      <Comida />
      <Comida />
      <Comida />
    </div>
  )
}
