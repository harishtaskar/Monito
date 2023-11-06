"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavBar = () => {
  const [searchIsVisisble, setSearchIsVisisble] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-box w-52 text-darkBlue"
            style={{ fontFamily: "gilroy, sans-serif" }}
          >
            <li className="font-semibold text-white">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="font-semibold text-white">
              <Link href={"/category"}>Category</Link>
            </li>
            <li className="font-semibold text-white">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="font-semibold text-white">
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

      <div className="navbar-end sm:gap-3 gap-1">
        {searchIsVisisble && (
          <div>
            <input
              type="text"
              className="px-4 py-2 rounded-full border border-neutral-20 text-sm"
              placeholder="search..."
              onChange={onSerchChangeListner}
            />
          </div>
        )}
        <button
          className="btn btn-ghost btn-circle"
          onClick={searchClickHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <ShoppingCartOutlinedIcon fontSize="small" />
            <span className="badge badge-xs badge-primary indicator-item text-xm p-0.5">
              {1}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
