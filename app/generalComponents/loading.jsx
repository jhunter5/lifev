import React, { useEffect, useState } from 'react';

export default function LoadingScreen ()  {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-900 h-12 w-12"></div>
      </div>
    )
  );
};
  