import Hero from "@/components/Hero";
import PetsList from "@/components/PetsList";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden flex flex-col">
        <Hero />
        <PetsList />
      </div>
    </>
  );
};

export default Home;
