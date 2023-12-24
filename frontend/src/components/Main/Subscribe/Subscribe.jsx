"use client";
import Image from "next/image";
import { useId, useState } from "react";
import bg_subscribe from "/public/bg-subscribe.jpg";
import H1 from "@/components/Headings/H1";
import P1 from "@/components/Paragraph/P1";
import Button from "@/components/Buttons/Button";

const Subscribe = () => {
  const id = useId();
  const [state, setState] = useState();

  return (
    <section className="h-[450px] flex justify-center items-center flex-col rounded-t-xl relative z-10">
      <div className=" absolute w-full h-[450px] bg-black rounded-t-xl"></div>
      <Image
        className="z-0 opacity-50 rounded-t-xl"
        src={bg_subscribe}
        alt={"background"}
        quality={100}
        fill={true}
        sizes="100vw"
        placeholder="blur"
      />
      <div className=" absolute flex flex-col gap-6 justify-center items-center z-10">
        <H1 textColor="#fff">Subscribe Now To Get Services Best Of Us</H1>
        <P1 textColor={"#fff"}>
          We recommended you subscribe to our newspaper, enter your email below
          to get our daily update about us.
        </P1>
        <form className="bg-white flex py-3 items-center rounded-xl w-2/3 px-4">
          <input
            type="email"
            placeholder="Enter your email address"
            id={`${id}-email`}
            className="w-full text-xl px-6 focus:outline-none"
          />
          <Button link={"/"}>Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
