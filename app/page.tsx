import Hero from "@/components/Hero";
import PetKnowledgeList from "@/components/PetKnowledgeList";
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
        <PetKnowledgeList />
      </div>
    </>
  );
};

export default Home;
