import PetsList from "@/components/PetsList";
import ContactButtons from "@/components/shared/ContactButtons";
import CustomersList from "@/components/shared/CustomersList";
import FirstBlock from "@/components/shared/FirstBlock";
import Information from "@/components/shared/Information";
import React from "react";

const product = {
  title: "Pomeranian White",
  id: "MO231",
  sku: "1000078",
  colors: ["Appriot", "Tan"],
  size: "small",
  vaccinated: true,
  microchip: true,
  location: "India",
  additionInfo:
    "Pure breed Shih Tzu.Good body structure.With MKA cert and microchip. Father from champion lineage",
  name: "Pomeranian White",
  gene: "Male",
  age: "2 Months",
  price: 19000,
  images: [
    "/assets/images/dog1.png",
    "/assets/images/dog2.png",
    "/assets/images/dog3.png",
    "/assets/images/dog4.png",
    "/assets/images/dog5.png",
    "/assets/images/dog6.png",
  ],
};

const customers = [
  "/assets/images/customer4.png",
  "/assets/images/customer3.png",
  "/assets/images/customer2.png",
  "/assets/images/customer5.png",
  "/assets/images/customer.png",
  "/assets/images/customer2.png",
];

type Props = {
  params: {
    id: string;
  };
};

const Detail = ({ params: { id } }: Props) => {
  return (
    <section className="bg-white pt-[4rem] sm:pt-[1.75rem] flex flex-col sm:flex-col pb-0 gap-8 sm:items-center">
      <div className="grid sm:flex sm:mt-[4rem] sm:gap-4 sm:px-[20%]">
        <div className="sm:flex-1">
          <FirstBlock images={product.images} />
        </div>
        <div className="py-4 px-3 sm:py-0 flex flex-col gap-1 sm:flex-1">
          <span className="text-neutral-80 text-xl font-semibold">
            {product.name}
          </span>
          <span className="text-darkBlue text-base font-semibold">
            {product.price}.00 INR
          </span>
          <ContactButtons />
          <span className="text-neutral-60 text-sm font-semibold">
            Information
          </span>
          <Information product={product} />
        </div>
      </div>
      <CustomersList images={customers} />
      <PetsList heading="" title="See More Pets" />
    </section>
  );
};

export default Detail;
