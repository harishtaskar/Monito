import petKnowledge from "@/Dummy/petKnowledgeList.json";
import PetKnowledge from "./PetKnowledge";

const PetKnowledgeList = () => {
  return (
    <section className="w-full bg-whiteSmoke p-4 flex flex-col gap-2 sm:p-[2rem] px-[3%] sm:px-[12%]">
      <span className="font-semibold  text-xl sm:text-[2rem] text-darkBlue">
        Useful Pet Knowledge
      </span>
      <ul className="flex flex-col gap-2 sm:flex-row sm:gap-4 sm:mt-4">
        {petKnowledge.map((item, index) => {
          return (
            <PetKnowledge
              title={item.title}
              description={item.description}
              image={item.image}
              key={index}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default PetKnowledgeList;
