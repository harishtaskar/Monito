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
    <div className="flex flex-col justify-start items-start p-2 pb-0 bg-white w-fit h-fit rounded-xl gap-[0.25rem] drop-shadow-sm sm:drop-shadow-md z-10 max-w-[11rem] sm:max-w-[16rem] cursor-pointer mt-2">
      <div id="top" className="relative">
        <Image
          src={`${images[0]}`}
          width={300}
          height={300}
          alt="image"
          className="w-full h-40 sm:h-52 block rounded-lg"
        />
        <div className="fixed top-[8%] left-[80%] sm:top-[5%] sm:left-[85%] z-30 drop-shadow-lg ">
          <IsFavorite id={id} />
        </div>
      </div>
      <div
        id="bottom"
        className="flex flex-col m-[0.25rem] sm:m-[0.5rem] mb-[0.5rem] sm:mb-[1rem] gap-1"
      >
        <span className="text-black font-semibold sm:text-lg text-[0.75rem]">
          {id}-{limitedName}
        </span>
        <div className="flex flex-col sm:flex-row gap-1 items-start">
          <p className="text-neutral-80 text-xs sm:text-sm">
            Gene: <span className=" text-neutral-60">{gene}</span>
          </p>
          <p className="text-neutral-80 text-xs sm:text-sm">
            Age: <span className=" text-neutral-60">{age}</span>
          </p>
        </div>
        <span className="text-black font-semibold text-sm sm:text-lg">
          {price}.00 INR
        </span>
      </div>
    </div>
  );
};

export default Container;
