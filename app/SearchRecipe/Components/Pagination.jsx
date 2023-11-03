import { Button } from '@nextui-org/react';

const Pagination = () => {

  return (
    <div className="fontSize-16px">
      <Button className="mx-2 bg-teal-400 text-white border-none rounded px-4 py-2 cursor-pointer transition duration-300 ease-in-out">Previous</Button>
      Page 1 of 10
      <Button className="mx-2 bg-teal-400 text-white border-none rounded px-4 py-2 cursor-pointer transition duration-300 ease-in-out">Next</Button>
    </div>
  );
};

export default Pagination;



