import Image from "next/image";
import React from "react";
import IsFavorite from "./shared/IsFavorite";

type Props = {
  id: string;
  name: string;
  gene: string;
  age: string;
  price: number;
  images: string[];
};

const Container = ({ id, age, gene, images, name, price }: Props) => {
  const limitedName = name.substring(0, 15) + "..";

  return (
    <div className="flex flex-col justify-start items-start p-2 bg-white w-fit h-fit rounded-xl gap-2 drop-shadow-sm sm:drop-shadow-md z-10  max-w-[10.25rem] sm:max-w-[16.5rem] cursor-pointer overflow-hidden">
      <div id="top" className="relative">
        <Image
          src={`${images[0]}`}
          width={300}
          height={300}
          alt="image"
          className="w-full h-36 sm:h-64 rounded-lg object-cover"
        />
        <div className="fixed top-[8%] left-[80%] sm:top-[5%] sm:left-[85%] z-30 drop-shadow-lg ">
          <IsFavorite id={id} />
        </div>
      </div>
      <div
        id="bottom"
        className="flex flex-col m-[0.25rem]   mb-[0.5rem] gap-1"
      >
        <span className="text-black font-bold sm:text-base text-[0.75rem]">
          {id}-{limitedName}
        </span>
        <div className="flex flex-col sm:flex-row gap-1 items-start">
          <p className="text-neutral-60 text-xs sm:text-sm">
            Gene: <span className="font-semibold text-neutral-60">{gene}</span>
          </p>
          <p className="text-neutral-60 text-xs sm:text-sm">
            Age: <span className="font-semibold text-neutral-60">{age}</span>
          </p>
        </div>
        <span className="text-black font-semibold text-sm sm:text-base">
          {price}.00 INR
        </span>
      </div>
    </div>
  );
};

export default Container;
