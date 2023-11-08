import React from "react";
import RegisterForm from "./shared/RegisterForm";
import Socials from "./shared/Socials";
import Links from "./shared/Links";
import Image from "next/image";

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex flex-col gap-4 items-center bg-lightYellow p-4 sm:gap-8 rounded-t-lg w-full sm:px-[15%]"
    >
      <div className="sm:px-[2%]">
        <RegisterForm />
      </div>
      <div className="flex flex-col justify-center items-center sm:w-full">
        <div className="sm:flex sm:flex-row sm:justify-between sm:w-full sm:items-center">
          <Links />
          <Socials />
        </div>
        <div className=" bg-darkBlue w-full h-0.5"></div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:w-full justify-center items-center">
          <Image
            src={"/assets/images/logo.svg"}
            width={100}
            height={100}
            alt="logo"
            className="w-[12rem] my-12 sm:my-6"
          />
          <div className="flex flex-row justify-between gap-8">
            <span className="text-base font-medium text-neutral-60">
              Terms of Service
            </span>
            <span className="text-base font-medium text-neutral-60">
              Privacy Policy
            </span>
          </div>
          <span className="text-sm font-normal text-neutral-60 my-6 sm:my-0">
            © 2022 Monito. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
