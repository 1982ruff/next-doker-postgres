import H6 from "@/components/Headings/H6";
import P1 from "@/components/Paragraph/P1";
import Image from "next/image";

const MeetOurTeam = ({ team }) => {
  return (
    <section className="grid grid-cols-4">
      {team.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center gap-2 "
        >
          <Image width={365} height={500} src={item.image} alt={item.name} />
          <P1 textColor={"#000"}>{item.name}</P1>
          <H6>{item.description}</H6>
        </div>
      ))}
    </section>
  );
};

export default MeetOurTeam;
