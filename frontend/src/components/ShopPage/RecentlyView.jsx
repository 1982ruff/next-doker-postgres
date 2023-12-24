import Image from "next/image";
import React from "react";
import H6 from "../Headings/H6";
import P2 from "../Paragraph/P2";

const RecentlyView = ({ image, title, price }) => {
  return (
    <div className=" cursor-pointer items-center justify-start gap-3 flex group">
      <div className=" bg-Lynx_White mt-2  rounded-xl size-24 flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          className="size-16 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-3">
        <H6>{title}</H6>
        <P2 textColor={"#644321"}>$ {price}</P2>
      </div>
    </div>
  );
};

export default RecentlyView;
