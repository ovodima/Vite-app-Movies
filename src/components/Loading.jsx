import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-2 border-blue-500 border-r-2 border-b-2 border-gray-300 h-12 w-12"></div>
      <span className="ml-2 text-white">Loading...</span>
    </div>
  );
};

export default Loading;
