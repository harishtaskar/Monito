"use client";
import React from "react";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { RecoilRoot } from "recoil";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <RecoilRoot>
        <body
          className="bg-[#FCEED5] w-full text-black"
          style={{
            background: `url("/assets/images/backCards.png") no-repeat fixed top center`,
            backgroundColor: "#FCEED5",
          }}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </RecoilRoot>
    </html>
  );
};

export default RootLayout;
