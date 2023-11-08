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
    <section className="w-full bg-neutral-0 p-4 flex flex-col gap-2 sm:p-[2rem] px-[3%] sm:px-[12%]">
      <div className="flex flex-col sm:gap-2">
        <p className="font-semibold text-sm ">{heading}</p>
        <span className="font-semibold  text-xl sm:text-[2rem] text-darkBlue">
          {title}
        </span>
      </div>
      <ul className="flex sm:gap-[1rem] flex-wrap items-start justify-evenly">
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
    </section>
  );
};

export default PetsList;
