import H4 from "@/components/Headings/H4";
import P4 from "@/components/Paragraph/P4";
import { PROMO } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Promo = () => {
  return (
    <div className="grid p-10 lg:p-10 grid-cols-1 gap-16 my-6 lg:my-10 lg:grid-cols-2 ">
      {PROMO.map((item, idx) => (
        <PromoSection
          key={idx}
          title={item.title}
          link={item.link}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Promo;

const PromoSection = ({ title, description, link, image }) => {
  return (
    <div className="justify-center items-center gap-4 p-8 rounded-xl bg-Lynx_White grid grid-cols-1 sm:grid-cols-2">
      <Image src={image} alt={title} />
      <div className="flex space-y-6 w-[80%] items-start flex-col">
        <H4>{title}</H4>
        <P4>{description}</P4>
        <button className="text-xl underline-offset-8 hover:underline">
          <Link href={link}>Shop Now</Link>
        </button>
      </div>
    </div>
  );
};
