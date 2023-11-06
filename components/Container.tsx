import Image from "next/image";
import React from "react";

type Props = {
  id: string;
  name: string;
  gene: string;
  age: string;
  price: number;
  image: string;
};

const Container = ({ id, age, gene, image, name, price }: Props) => {
  return (
    <div className="flex flex-col justify-start items-start p-2 pb-0 bg-neutral-0 w-fit h-fit rounded-xl gap-[0.25rem] drop-shadow-md z-10 max-w-[11rem] sm:max-w-[18rem] cursor-pointer">
      <div id="top">
        <Image
          src={`${image}`}
          width={300}
          height={300}
          alt="image"
          className="sm:w-[16rem] sm:h-[16rem] h-[10rem] w-[10rem] rounded-lg"
        />
      </div>
      <div
        id="bottom"
        className="flex flex-col m-[0.25rem] sm:m-[0.5rem] mb-[0.5rem] sm:mb-[1rem] gap-1"
      >
        <span className="text-black font-semibold sm:text-lg text-[0.75rem]">
          {id}-{name}
        </span>
        <div className="flex gap-1 items-center">
          <p className="text-neutral-80 text-xs sm:text-sm">
            Gene: <span className="font-semibold text-neutral-60">{gene}</span>
          </p>
          <p className="text-neutral-80 text-xs sm:text-sm">
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
