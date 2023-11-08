"use client";
import React from "react";
import product from "@/Dummy/product.json";
import { useRecoilValue } from "recoil";
import { favoriteState } from "@/store";
import Link from "next/link";
import Container from "./Container";
import RectContainer from "./shared/RectContainer";

const FavoritesList = () => {
  const favorite = useRecoilValue(favoriteState);
  const favoriteList = product.filter((item) => {
    return favorite.includes(item.id);
  });

  return (
    <ul className="flex sm:gap-[1rem] gap-3 flex-wrap items-start justify-between ">
      {favoriteList.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/${item.id}`}>
              <RectContainer
                age={item.age}
                gene={item.gene}
                id={item.id}
                images={item.images}
                name={item.name}
                price={item.price}
                additional={item.additionInfo}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FavoritesList;
