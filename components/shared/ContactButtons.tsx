"use client";
import React, { useState } from "react";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { FcLike } from "react-icons/fc";
import { useRecoilState } from "recoil";
import { favoriteState } from "@/store";

const ContactButtons = ({ id }: { id: string }) => {
  const [favorite, setFavorite] = useRecoilState<any>(favoriteState);
  const onFavoriteClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFavorite((prev: any) => {
      if (prev.includes(id)) {
        return favorite.filter((item: any) => {
          return item !== id;
        });
      } else {
        return [...prev, id];
      }
    });
  };

  console.log(favorite);

  return (
    <div className="flex flex-row gap-2 items-center my-2">
      <button className="btn-filled">Contact us</button>
      <div className="flex flex-row gap-2">
        <button className="btn-outline">
          <TextsmsOutlinedIcon fontSize="small" /> Adopt the pet
        </button>
      </div>
      <button
        onClick={onFavoriteClickHandler}
        className={`${
          favorite.includes(id) ? "p-3" : `px-2.5 py-2`
        } border border-darkBlue rounded-full text-darkBlue cursor-pointer`}
      >
        {favorite.includes(id) ? (
          <FcLike />
        ) : (
          <FavoriteBorderOutlinedIcon fontSize="small" />
        )}
      </button>
    </div>
  );
};

export default ContactButtons;
