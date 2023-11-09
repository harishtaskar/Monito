import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string;
  description: string;
};

const PetKnowledge = ({ title, image, description }: Props) => {
  const limitedDescription = description.substring(0, 200) + "..";
  const limitedTitle = title.substring(0, 50);
  return (
    <div className="flex flex-col justify-start items-start p-2.5 bg-white w-fit h-fit rounded-xl gap-[0.25rem] sm:gap-[0.5rem] drop-shadow-sm sm:drop-shadow-md z-10 max-w-full sm:max-w-[22.75rem] sm:h-[32rem] mt-2 overflow-hidden">
      <div id="top" className="relative w-full flex-1">
        <Image
          src={`${image}`}
          width={900}
          height={900}
          alt="image"
          className="w-full sm:h-[15rem] block rounded-lg"
        />
      </div>
      <div
        id="bottom"
        className="flex flex-col m-[0.25rem] sm:m-[0.5rem] mb-[0.5rem] sm:mb-[1rem] gap-0.5 flex-1 p-1 overflow-hidden"
      >
        <div className="flex flex-col gap-2 items-start">
          <div className="px-3 p-1 bg-blueSea text-white rounded-full text-[0.7rem]">
            Pet Knowledge
          </div>
          <p className="text-neutral-80 text-xl sm:text-xl font-semibold">
            {limitedTitle}
          </p>
          <p className="text-neutral-80 text-sm sm:text-base tracking-wider">
            {limitedDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetKnowledge;
