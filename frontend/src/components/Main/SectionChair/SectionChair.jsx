import Button from "@/components/Buttons/Button";
import H4 from "@/components/Headings/H4";
import P3 from "@/components/Paragraph/P3";
import Image from "next/image";
import chair from "/public/section_chair/chair.png";

const SectionChair = () => {
  return (
    <section className="xl:mx-20 xl:mt-40 gap-10 mb-20 min-h-[360px] bg-Lynx_White rounded-xl grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col gap-y-7 p-10 lg:p-24">
        <H4>Stylish minimal chair</H4>
        <P3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </P3>
        <Button link={"/"}>Shop Now</Button>
      </div>
      <div className=" place-self-center">
        <Image src={chair} alt="" className="-mt-20" />
      </div>
    </section>
  );
};

export default SectionChair;
