"use client";
import { favoriteState } from "@/store";
import React from "react";
import { useRecoilValue } from "recoil";

const FavoriteText = () => {
  const favorite = useRecoilValue(favoriteState);
  return (
    <span className="font-semibold  text-xl sm:text-[2.25rem] text-black my-[0.75rem] sm:my-[1.5rem] font-gilroy">
      {favorite.length === 0 ? "No Favorites" : "Favorites"}
    </span>
  );
};

export default FavoriteText;
