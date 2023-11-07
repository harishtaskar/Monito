"use client";
import React from "react";
import Link from "next/link";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Socials = () => {
  return (
    <ul className="flex justify-between w-full sm:w-fit font-semibold text-black my-6 sm:px-0 px-[10%] sm:gap-6">
      <Link href={"/"}>
        <FacebookRoundedIcon />
      </Link>
      <Link href={"/"}>
        <TwitterIcon />
      </Link>
      <Link href={"/"}>
        <InstagramIcon />
      </Link>
      <Link href={"/"}>
        <YouTubeIcon />
      </Link>
    </ul>
  );
};

export default Socials;
