import React from 'react';
import Image from 'next/image'

function ImageCollection() {
  return (
    <div>
      <img src="https://res.cloudinary.com/sabazikaria/image/upload/v1610548592/sample.jpg" />
      <div className="relative h-96 w-full">
        <Image 
          src="https://res.cloudinary.com/sabazikaria/image/upload/v1610548592/sample.jpg" 
          layout="fill" 
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default ImageCollection;
