"use client";
import React from "react";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type Props = {
  children: React.ReactNode;
  session: Session;
};

const RootLayout = ({ session, children }: Props) => {
  return (
    <html lang="en">
      <SessionProvider session={session}>
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
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
