import React from "react";
import Link from "next/link";

const Links = () => {
  return (
    <ul className="w-full sm:w-fit gap-8 flex justify-between font-semibold text-black my-6">
      <li className="hover:text-neutral-60">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="hover:text-neutral-60">
        <Link href={"/category"}>Category</Link>
      </li>
      <li className="hover:text-neutral-60">
        <Link href={"/about"}>About</Link>
      </li>
      <li className="hover:text-neutral-60">
        <Link href={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
};

export default Links;
