import Image from "next/image";
import offerBanner from "/public/aboutPage/offerBanner.jpeg";
import H1 from "@/components/Headings/H1";
import H3 from "@/components/Headings/H3";
import Button from "@/components/Buttons/Button";

const OfferBanner = () => {
  return (
    <section className="relative my-20 z-10 h-[500px] flex justify-center items-center flex-col rounded-xl ">
      <Image
        className="z-0 rounded-xl transform -scale-x-100"
        src={offerBanner}
        alt={"background"}
        quality={100}
        fill={true}
        sizes="100vw"
        placeholder="blur"
      />

      <div className="absolute top-0 gap-2 left-0 w-1/3 h-full flex flex-col justify-center items-center">
        <H1 textColor={"#fff"}>UP TO 40% OFF</H1>
        <H3>Modern Furniture</H3>

        <Button link={"/"}>Shop Now</Button>
      </div>
    </section>
  );
};

export default OfferBanner;
