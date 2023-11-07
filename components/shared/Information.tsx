import React from "react";

type Props = {
  product: Dog;
};

const Information = ({ product }: Props) => {
  return (
    <ul className="flex flex-col gap-2 px-[2%] py-4 font-medium opacity-70 max-w-[100vw]">
      <li className="flex text-neutral-60 text-sm items-start justify-start py-1 ">
        <span className="flex-1">SKU </span>
        <span className="flex-1">: #{product.sku}</span>
      </li>
      <div className="h-[0.5px] bg-neutral-40 w-full opacity-40"></div>
      <li className="flex text-neutral-60 text-sm items-start justify-start py-1">
        <span className="flex-1">Gender</span>
        <span className="flex-1">: {product.gene}</span>
      </li>
      <div className="h-[0.5px] bg-neutral-40 w-full opacity-40"></div>
      <li className="flex text-neutral-60 text-sm items-start justify-start py-1">
        <span className="flex-1">Age</span>
        <span className="flex-1">: {product.age}</span>
      </li>
      <div className="h-[0.5px] bg-neutral-40 w-full opacity-40"></div>
      <li className="flex text-neutral-60 text-sm items-start justify-start py-1">
        <span className="flex-1">Size</span>
        <span className="flex-1">: {product.size}</span>
      </li>
      <div className="h-[0.5px] bg-neutral-40 w-full opacity-40"></div>
      <li className="flex text-neutral-60 text-sm items-start justify-start py-1">
        <span className="flex-1">Color</span>
        <div className="flex-1">
          :{" "}
          {product.colors?.map((item, index) => {
            return <span key={index}>{item}, </span>;
          })}
        </div>
      </li>
      <div className="h-[0.5px] bg-neutral-40 w-full opacity-40"></div>
      <li className="flex text-neutral-60 text-sm items-start justify-start py-1">
        <span className="flex-1">Vaccinated</span>
        <span className="flex-1">: {product.vaccinated ? "Yes" : "No"}</span>
      </li>
      <div className="h-[0.5px] bg-neutral-40 w-full opacity-40"></div>
      <li className="flex text-neutral-60 text-sm items-start justify-start py-1">
        <span className="flex-1">Microchip</span>
        <span className="flex-1">: {product.microchip ? "Yes" : "No"}</span>
      </li>
      <div className="h-[0.5px] bg-neutral-40 w-full opacity-40"></div>
      <li className="flex text-neutral-60 text-sm items-start justify-start py-1">
        <span className="flex-1">Location</span>
        <span className="flex-1">: {product.location}</span>
      </li>
      <div className="h-[0.5px] bg-neutral-40 w-full opacity-40"></div>
      <li className="flex text-neutral-60 text-sm items-start justify-start py-1">
        <span className="flex-1">Additional Information</span>
        <span className="flex-1">: {product.additionInfo}</span>
      </li>
      <div className="h-[0.5px] bg-neutral-40 w-full opacity-40"></div>
    </ul>
  );
};

export default Information;
