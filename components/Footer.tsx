import React from "react";
import RegisterForm from "./shared/RegisterForm";
import Socials from "./shared/Socials";
import Links from "./shared/Links";
import Image from "next/image";

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex flex-col gap-4 items-center bg-lightYellow p-4 rounded-t-lg"
    >
      <RegisterForm />
      <div className="flex flex-col justify-center items-center">
        <Links />
        <Socials />
        <div className=" bg-darkBlue w-full h-0.5"></div>
        <Image
          src={"/assets/images/logo.svg"}
          width={100}
          height={100}
          alt="logo"
          className="w-[12rem] my-8"
        />
      </div>
    </section>
  );
};

export default Footer;
