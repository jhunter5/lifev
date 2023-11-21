import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-900 h-12 w-12"></div>
    </div>
  );
};

export default LoadingScreen;
