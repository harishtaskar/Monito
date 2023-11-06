import React from "react";
import Link from "next/link";

const Links = () => {
  return (
    <ul className="w-full gap-12 flex justify-between font-semibold text-black my-6">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/"}>Category</Link>
      </li>
      <li>
        <Link href={"/"}>About</Link>
      </li>
      <li>
        <Link href={"/"}>Contact</Link>
      </li>
    </ul>
  );
};

export default Links;
