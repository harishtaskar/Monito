import Link from "next/link";
import React from "react";

const DonatePetButton = () => {
  return (
    <Link href={"/donate-pet"}>
      <button>Donate Your Pet</button>
    </Link>
  );
};

export default DonatePetButton;
