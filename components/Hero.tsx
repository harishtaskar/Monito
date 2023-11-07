import React from "react";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-[5rem] sm:pt-[1.75rem] flex flex-col sm:flex-row p-[1rem] pb-0 gap-8 sm:px-40 sm:items-center">
      <div className="flex flex-col text-darkBlue mt-[1rem] gap-2 flex-auto sm:gap-[1.75rem]">
        <span className="font-extrabold text-[2rem] sm:text-[3rem]">
          One More Friend
        </span>
        <span className="font-semibold  text-2xl sm:text-[2rem]">
          Thousands More Fun!
        </span>
        <p className="text-[0.75rem] sm:text-sm font-light text-black tracking-wide sm:font-normal">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="flex gap-3">
          <button className="btn-outline">
            View Intro <PlayCircleOutlineRoundedIcon fontSize="small" />
          </button>
          <button className="btn-filled">Explore Now</button>
        </div>
      </div>
      <div className="sm:mt-2">
        <Image
          src={"/assets/images/heroImage.png"}
          width={1500}
          height={1500}
          alt="heroImage"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
