import React, { useState } from 'react';
import { Card, Image, CardBody, Input, Button } from "@nextui-org/react";

const BarraBusqueda = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchText(query);
    onSearch(query);
  };

  return (
    <div className="mb-4 flex justify-center">
      <Input className="w-2/3 flat medium text-black" placeholder="Search for..." value={searchText} onChange={handleSearchChange}
      />
    </div>
  );
};

export default BarraBusqueda;





