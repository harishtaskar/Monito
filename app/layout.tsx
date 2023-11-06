import React from "react";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body
        className="bg-[#FCEED5] w-full"
        style={{
          background: `url("/assets/images/backCards.png") no-repeat fixed top left`,
          backgroundColor: "#FCEED5",
        }}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
