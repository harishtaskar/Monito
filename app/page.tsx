import Hero from "@/components/Hero";
import PetsList from "@/components/PetsList";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden flex flex-col">
        <Hero />
        <PetsList
          title="Take a look at some of our pets"
          heading="Whats New?"
        />
      </div>
    </>
  );
};

export default Home;
