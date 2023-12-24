import Image from "next/image";
import ourshop from "/public/aboutPage/ourshop.jpg";
import H4 from "@/components/Headings/H4";
import P3 from "@/components/Paragraph/P3";

const OurShop = () => {
  return (
    <section className="grid py-20 text-center grid-cols-2">
      <div className="flex justify-center items-center ">
        <div className=" relative rounded-xl">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" absolute top-0 right-0"
          >
            <line
              x1="197.5"
              y1="200"
              x2="197.5"
              y2="-1.09279e-07"
              stroke="#644321"
              strokeWidth="5"
            />
            <line x1="200" y1="2.5" y2="2.5" stroke="#644321" strokeWidth="5" />
          </svg>
          <Image src={ourshop} alt="/" className="m-6 rounded-xl" />
          <svg
            className=" absolute bottom-0 left-0"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.5"
              y1="1.09279e-07"
              x2="2.49999"
              y2="200"
              stroke="#644321"
              strokeWidth="5"
            />
            <line
              y1="197.5"
              x2="200"
              y2="197.5"
              stroke="#644321"
              strokeWidth="5"
            />
          </svg>
        </div>
      </div>{" "}
      <div className="flex flex-col gap-6 w-2/3 mx-auto justify-center items-center">
        <H4>Our shop</H4>
        <P3>
          Furniture consists of large objects such as tables, chairs, or beds
          that are used in a room for sitting or lying on or for putting things
          on or in. Each piece of furniture in their home suited the style of
          the house. Synonyms: household goods, furnishings, fittings, house
          fittings More Synonyms of furniture.
        </P3>
        <P3>
          Furniture design is a specialized field that combines utility and
          style. Furniture is considered by many interior designers to be one of
          the most significant parts of any interior space. It adds not only
          functionality and utility to a space, but also style and personality.
        </P3>
      </div>
    </section>
  );
};

export default OurShop;
