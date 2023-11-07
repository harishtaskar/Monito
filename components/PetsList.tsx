import React from "react";
import Container from "./Container";

const SampleData = [
  {
    id: "MO231",
    name: "Pomeranian White",
    gene: "Male",
    age: "2 Months",
    price: 19000,
    image: "/assets/images/sampleImage.png",
  },
  {
    id: "MO235",
    name: "Siberian Husky",
    gene: "Male",
    age: "8 Months",
    price: 29000,
    image: "/assets/images/sampleImage.png",
  },
  {
    id: "MO235",
    name: "Siberian Husky",
    gene: "Male",
    age: "8 Months",
    price: 29000,
    image: "/assets/images/sampleImage.png",
  },
  {
    id: "MO235",
    name: "Siberian Husky",
    gene: "Male",
    age: "8 Months",
    price: 29000,
    image: "/assets/images/sampleImage.png",
  },
  {
    id: "MO235",
    name: "Siberian Husky",
    gene: "Male",
    age: "8 Months",
    price: 29000,
    image: "/assets/images/sampleImage.png",
  },
  {
    id: "MO235",
    name: "Siberian Husky",
    gene: "Male",
    age: "8 Months",
    price: 29000,
    image: "/assets/images/sampleImage.png",
  },
  {
    id: "MO235",
    name: "Siberian Husky",
    gene: "Male",
    age: "8 Months",
    price: 29000,
    image: "/assets/images/sampleImage.png",
  },
  {
    id: "MO235",
    name: "Siberian Husky",
    gene: "Male",
    age: "8 Months",
    price: 29000,
    image: "/assets/images/sampleImage.png",
  },
  {
    id: "MO235",
    name: "Siberian Husky",
    gene: "Male",
    age: "8 Months",
    price: 29000,
    image: "/assets/images/sampleImage.png",
  },
  {
    id: "MO235",
    name: "Siberian Husky asdasd",
    gene: "Male",
    age: "8 Months",
    price: 29000,
    image: "/assets/images/sampleImage.png",
  },
];

const PetsList = () => {
  return (
    <section className="bg-white p-4 flex flex-col gap-4 sm:p-[4rem] px-[5%] sm:px-[12%]">
      <div className="flex flex-col sm:gap-2">
        <p className="font-semibold text-sm ">Whats New</p>
        <span className="font-semibold  text-xl sm:text-[2rem] text-darkBlue">
          Take a look at some of our pets
        </span>
      </div>
      <ul className="flex sm:gap-[1rem] flex-wrap items-start justify-evenly">
        {SampleData.map((item) => {
          return (
            <li key={item.id}>
              <Container
                age={item.age}
                gene={item.gene}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PetsList;
