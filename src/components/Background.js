// DividedPage.js
import React, { useState } from 'react';

const DividedPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleEducation = () => {
     setIsHovered(true);
  };

  const handleTravail = () => {
    setIsHovered(false);
  };

  console.log(isHovered)

  return (
<div className={`flex h-[100%] w-full`}>
  <div className={`flex justify-between bg-gray-600 p-4 ${isHovered ? 'w-1/5' : 'w-4/5'}`}>
    <h1>Left Side</h1>
    <button className='rounded-xl bg-white p-2' onClick={() => handleEducation()}> education </button>
  </div>
  <div className={`flex justify-between bg-gray-200 p-4 ${!isHovered ? 'w-1/5' : 'w-4/5'}`}>
    <h1> Right Side</h1>
    <button className='rounded-xl bg-white p-2' onClick={() => handleTravail()}> travail </button>
  </div>
</div>
  );
};

export default DividedPage;
