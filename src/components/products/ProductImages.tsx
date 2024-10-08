"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[]
}

export default function ProductImages({ images }: Props) {
  const [currentImage, setCurrentImage] = useState(images?.[0]);

  return (
    <div className="flex ">
      <div className="flex flex-col gap-2">
        {images?.map((item, i) => (
          <Image
            onClick={() => setCurrentImage(item)}
            src={item}
            width={150}
            height={150}
            alt="all images"
            key={i}
            className={`border border-black w-24 h-24 opacity-80 hover:opacity-100 duration-300 ${currentImage === item && 'border-yellow-400 opacity-100'}`}
          />
        ))}
      </div>
      <div>
        <Image
          src={currentImage}
          alt="product image"
          height={500}
          width={500}
          className="ml-5 max-h-[500px] w-full object-contain bg-bannerBg p-5 rounded-xl "
        />
      </div>
    </div>
  );
}
