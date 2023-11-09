import FavoritesList from "@/components/FavoritesList";
import FavoriteText from "@/components/shared/FavoriteText";
import React from "react";

const Favorites = () => {
  return (
    <section className="bg-whiteSmoke pt-[4rem] sm:pt-[4rem] flex flex-col sm:flex-col pb-0 sm:gap-4 sm:items-start w-full px-[3%] sm:px-[12%] min-h-[100vh]">
      <FavoriteText />
      <FavoritesList />
    </section>
  );
};

export default Favorites;
