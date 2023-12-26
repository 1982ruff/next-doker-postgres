import H4 from "@/components/Headings/H4";
import P4 from "@/components/Paragraph/P4";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Promo = ({ product }) => {
  return (
    <div className="grid grid-cols-1 gap-16 p-10 my-6 lg:p-10 lg:my-10 lg:grid-cols-2 ">
      {product.map((item, idx) => (
        <PromoSection
          key={idx}
          title={item.title}
          link={item.slug}
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
    <div className="grid items-center justify-center grid-cols-1 gap-4 p-8 rounded-xl bg-Lynx_White sm:grid-cols-2">
      <Image width={500} height={500} src={image} alt={title} />
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
