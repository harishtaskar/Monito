"use client";
import { favoriteState } from "@/store";
import React from "react";
import { useRecoilValue } from "recoil";
import { FcLike } from "react-icons/fc";

type Props = {
  id: any;
};

const IsFavorite = ({ id }: Props) => {
  const favorite = useRecoilValue(favoriteState);
  return <>{favorite.includes(id) && <FcLike />}</>;
};

export default IsFavorite;
