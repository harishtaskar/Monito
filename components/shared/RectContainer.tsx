import Image from "next/image";
import React from "react";
import IsFavorite from "./IsFavorite";

type Props = {
  id: string;
  name: string;
  gene: string;
  age: string;
  price: number;
  images: string[];
  additional: string;
};

const RectContainer = ({
  id,
  age,
  gene,
  images,
  name,
  price,
  additional,
}: Props) => {
  const limitedAdditional = additional.substring(0, 40) + "...";
  return (
    <div className="flex flex-row justify-between items-start p-2 sm:p-4  bg-white w-full rounded-xl sm:rounded-2xl gap-[0.50rem] drop-shadow-sm sm:drop-shadow-md z-10 sm:max-w-[42rem] cursor-pointer h-40 sm:max-h-60">
      <div id="top" className="relative flex-1">
        <Image
          src={`${images[0]}`}
          width={300}
          height={300}
          alt="favImage"
          className="w-full h-36 sm:h-52 rounded-lg"
        />
      </div>
      <div
        id="bottom"
        className="flex flex-col m-[0.25rem] sm:m-[0.5rem] mb-[0.5rem] sm:mb-[1rem] gap-1 flex-1"
      >
        <span className="text-black sm:font-semibold sm:text-2xl text-[1rem]">
          {id}-{name}
        </span>
        <div className="flex gap-1 items-center">
          <p className="text-neutral-80 text-sm sm:text-lg">
            Gene: <span className=" text-neutral-60">{gene}</span>
          </p>
          <p className="text-neutral-80 text-sm sm:text-lg">
            Age: <span className=" text-neutral-60">{age}</span>
          </p>
        </div>
        <p className="text-neutral-60 text-sm sm:text-lg">
          {limitedAdditional}
        </p>
        <span className="text-black font-semibold text-base sm:text-xl">
          {price}.00 INR
        </span>
      </div>
    </div>
  );
};

export default RectContainer;
