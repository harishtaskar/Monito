import Image from "next/image";
import React from "react";

type Props = {
  images: string[];
};

const CustomersList = ({ images }: Props) => {
  return (
    <div className="px-4 flex flex-col gap-1.5 sm:mx-[12%] scroll-smooth sm:overflow-x-hidden">
      <span className="text-neutral-80 text-lg font-semibold mb-2">
        Our Lovely Customer
      </span>
      <div className="carousel w-full gap-2 sm:gap-4">
        {images.map((item, index) => {
          return (
            <div id="item1" className="carousel-item w-fit" key={index}>
              <Image
                src={`${item}`}
                className="w-40 sm:w-56 rounded-lg"
                width={800}
                height={800}
                alt="img"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomersList;
