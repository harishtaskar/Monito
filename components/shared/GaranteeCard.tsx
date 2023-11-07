import Image from "next/image";
import React from "react";

const GaranteeCard = () => {
  return (
    <div className="flex flex-row items-center gap-2 sm:gap-1 sm:p-3 sm:px-4 p-2 px-3 rounded-xl bg-lightYellow">
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/assets/images/smallLogo1.svg"}
          width={50}
          height={50}
          alt="small"
          className="w-8"
        />
        <span className="sm:text-sm text-[0.725rem] font-semibold text-darkBlue">
          100% health guarantee for pets
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/assets/images/smallLogo2.svg"}
          width={50}
          height={50}
          alt="small"
          className="w-8"
        />
        <span className="sm:text-sm text-[0.725rem] font-semibold text-darkBlue">
          100% guarantee of pet identification
        </span>
      </div>
    </div>
  );
};

export default GaranteeCard;
