import H6 from "@/components/Headings/H6";
import P1 from "@/components/Paragraph/P1";
import { OUR_TEAM } from "@/data";
import Image from "next/image";

const MeetOurTeam = () => {
  return (
    <section className="grid grid-cols-4">
      {OUR_TEAM.map((item, idx) => (
        <div
          key={idx}
          className=" flex flex-col gap-2 justify-center items-center"
        >
          <Image src={item.image} alt={item.name} />
          <P1 textColor={"#000"}>{item.name}</P1>
          <H6>{item.description}</H6>
        </div>
      ))}
    </section>
  );
};

export default MeetOurTeam;
