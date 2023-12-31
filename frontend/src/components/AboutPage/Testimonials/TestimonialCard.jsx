import H2 from "@/components/Headings/H2";
import H6 from "@/components/Headings/H6";
import P3 from "@/components/Paragraph/P3";
import P4 from "@/components/Paragraph/P4";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({ image, title, description, name, whoInCompany }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-6 p-16  bg-Lynx_White rounded-xl">
      <svg
        width="60"
        height="46"
        viewBox="0 0 60 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.234375 33.418C0.234375 39.9922 5.56641 45.3242 12.1406 45.3242C18.7148 45.3242 24.0469 39.9922 24.0469 33.418C24.0469 26.8438 18.7148 21.5117 12.1406 21.5117C10.1719 21.5117 8.35547 22.0273 6.71484 22.8711C8.82422 13.5898 17.1328 6.62891 27.0469 6.62891C28.6875 6.62891 30.0234 5.29297 30.0234 3.65234C30.0234 2.01172 28.6875 0.675781 27.0469 0.675781C12.2578 0.675781 0.234375 12.6992 0.234375 27.4883V33.418ZM29.9766 33.418C29.9766 39.9922 35.3086 45.3242 41.8828 45.3242C48.457 45.3242 53.7891 39.9922 53.7891 33.418C53.7891 26.8438 48.457 21.5117 41.8828 21.5117C39.9141 21.5117 38.0977 22.0273 36.457 22.8711C38.5664 13.5898 46.875 6.62891 56.7891 6.62891C58.4297 6.62891 59.7656 5.29297 59.7656 3.65234C59.7656 2.01172 58.4297 0.675781 56.7891 0.675781C42 0.675781 29.9766 12.6992 29.9766 27.4883V33.418Z"
          fill="#644321"
        />
      </svg>
      <div className="flex flex-col w-4/5 gap-6 ">
        <H2>{title}</H2>
        <P3>{description}</P3>
      </div>

      <div className="flex items-center gap-3">
        <Image
          width={55}
          height={55}
          src={image}
          alt={name}
          className="rounded-full  size-14"
        />
        <div className="flex flex-col ">
          <H6>{name}</H6>
          <P4>{whoInCompany}</P4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
