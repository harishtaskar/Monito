import React from "react";
import Container from "./Container";
import Link from "next/link";
import Product from "@/Dummy/product.json";

type Props = {
  title: string;
  heading: string;
};

const PetsList = ({ title, heading }: Props) => {
  return (
    <section className="w-full bg-whiteSmoke p-4 flex flex-col gap-2 sm:gap-4 sm:p-[2rem] px-[3%] sm:px-[12%]">
      <div className="flex flex-col sm:gap-1">
        <p className="font-semibold text-sm sm:text-base">{heading}</p>
        <div className={`w-full flex flex-row justify-between items-center`}>
          <span className="font-semibold  text-xl sm:text-[2rem] text-darkBlue">
            {title}
          </span>
          {/* <button className="btn-outline font-semibold m-2 hover:bg-transparent hover:text-darkBlue sm:w-fit">
            View More
          </button> */}
        </div>
      </div>
      <ul className="flex sm:gap-[1.5rem] gap-2 flex-wrap items-start justify-start">
        {Product.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/${item.id}`}>
                <Container
                  age={item.age}
                  gene={item.gene}
                  id={item.id}
                  images={item.images}
                  name={item.name}
                  price={item.price}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <button className="btn-outline font-semibold m-2 hover:bg-transparent hover:text-darkBlue sm:w-fit">
        View More
      </button>
    </section>
  );
};

export default PetsList;
