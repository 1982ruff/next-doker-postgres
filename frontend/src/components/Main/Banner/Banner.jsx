import Image from "next/image";
import banner from "/public/banner/banner.jpg";
import H4 from "@/components/Headings/H4";
import P4 from "@/components/Paragraph/P4";
import Button from "@/components/Buttons/Button";
import P3 from "@/components/Paragraph/P3";

const Banner = () => {
  return (
    <div className="flex gap-4 my-20">
      <div className="max-w-[1000px] max-h-[668px] basis-2/3">
        <Image
          src={banner}
          alt="/"
          className=" rounded-xl w-full h-full object-cover"
        />
      </div>
      <div className=" basis-1/3 flex px-20 text-start flex-col justify-center items-start gap-6">
        <H4>Match Furniture Styles</H4>
        <P3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </P3>
        <Button link={"/"}> Shop Now </Button>
      </div>
    </div>
  );
};

export default Banner;
