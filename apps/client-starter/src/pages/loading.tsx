import React from 'react';

export function ViewportLoading() {
  return (
    <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
      <div className="loader text-gray-200 opacity-50">Loading...</div>
    </div>
  );
}
