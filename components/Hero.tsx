import React from "react";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-[5rem] sm:pt-[1.75rem] flex flex-col sm:flex-row p-[1rem] pb-0 sm:px-40 min-h-[70%] sm:items-center justify-between gap-4">
      <div className="flex flex-col text-darkBlue mt-[1rem] gap-1 flex-auto sm:gap-2">
        <span className="font-extrabold text-4xl sm:text-6xl">
          One More Friend
        </span>
        <span className="font-bold text-[1.5rem] sm:text-[3rem]">
          Thousands More Fun!
        </span>
        <p className="text-[0.75rem] sm:text-sm font-light text-black tracking-wide sm:font-normal">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="flex gap-3">
          <button className="btn-outline mt-3">
            View Intro <PlayCircleOutlineRoundedIcon fontSize="small" />
          </button>
          <button className="btn-filled mt-3">Explore Now</button>
        </div>
      </div>
      <div className="sm:mt-2">
        <Image
          src={"/assets/images/heroImage.png"}
          width={1500}
          height={1500}
          alt="heroImage"
          className="min-w-full min-h-full sm:min-h-[25rem] sm:min-w-[35rem] block max-w-[100%]"
        />
      </div>
    </section>
  );
};

export default Hero;
