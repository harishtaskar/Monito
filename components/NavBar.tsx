"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useRecoilValue } from "recoil";
import { favoriteState } from "@/store";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { signIn, useSession } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();
  const [searchIsVisisble, setSearchIsVisisble] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const favoriteList = useRecoilValue(favoriteState);

  const onSerchChangeListner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  const searchClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (searchInput === "") {
      setSearchIsVisisble((prev) => !prev);
    } else {
      console.log(searchInput);
      setSearchIsVisisble((prev) => !prev);
      setSearchInput("");
    }
  };

  return (
    <div className="navbar bg-monYellow fixed z-20 sm:px-[3rem]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <MenuRoundedIcon />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-box w-52 text-darkBlue"
            style={{ fontFamily: "gilroy, sans-serif" }}
          >
            <li className="font-semibold text-darkBlue">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="font-semibold text-darkBlue">
              <Link href={"/category"}>Category</Link>
            </li>
            <li className="font-semibold text-darkBlue">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="font-semibold text-darkBlue">
              <Link href={"/contact"}>Conatct</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          className="btn btn-ghost normal-case text-xl hover:bg-transparent"
          href={"/"}
        >
          <Image
            src={"/assets/images/logo.svg"}
            width={80}
            height={80}
            alt="logo"
          />
        </Link>
      </div>

      <div className="navbar-end sm:gap-3 ">
        {searchIsVisisble && (
          <div>
            <input
              type="text"
              className="px-4 py-2 rounded-full border border-neutral-20 text-sm sm:text-base w-56 sm:w-96"
              placeholder="search"
              onChange={onSerchChangeListner}
            />
          </div>
        )}
        <button
          className="btn btn-ghost btn-circle"
          onClick={searchClickHandler}
        >
          <SearchRoundedIcon />
        </button>
        <Link href={"/favorites"}>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FavoriteBorderOutlinedIcon />
              {favoriteList.length > 0 && (
                <span className="badge badge-xs badge-primary indicator-item text-xm p-0.5">
                  {favoriteList.length}
                </span>
              )}
            </div>
          </button>
        </Link>
        {!session && (
          <button
            className="btn-outline font-semibold m-2 text-black sm:w-fit"
            onClick={() => {
              signIn();
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
