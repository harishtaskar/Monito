"use client";
import Image from "next/image";
import React, { useState } from "react";
import GaranteeCard from "./GaranteeCard";

type Props = {
  images: string[];
};

const FirstBlock = ({ images }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <div className="flex flex-col gap-2 overflow-hidden">
      <Image
        src={images[selectedIndex]}
        width={1200}
        height={1200}
        alt="main Image"
        className="h-[22rem] w-[100vw] sm:rounded-xl"
      />
      <ul className="flex flex-row gap-2 p-2 px-3 overflow-x-scroll overflow-hidden sm:px-0 sm:py-2">
        {images.map((image, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setSelectedIndex(index);
              }}
              className={`rounded-md h-20 overflow-hidden ${
                index === selectedIndex &&
                `border-2 border-monYellow opacity-80`
              }`}
            >
              <Image
                src={image}
                alt="img"
                width={200}
                height={200}
                className="w-full h-full overflow-hidden"
              />
            </li>
          );
        })}
      </ul>
      <div className="px-3 sm:px-0">
        <GaranteeCard />
      </div>
    </div>
  );
};

export default FirstBlock;
