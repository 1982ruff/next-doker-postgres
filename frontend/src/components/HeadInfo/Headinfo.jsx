import React from "react";
import H1 from "../Headings/H1";
import P1 from "../Paragraph/P1";

const Headinfo = ({ title, description }) => {
  return (
    <div className="w-full pt-20  flex gap-2 flex-col justify-center items-center">
      <H1>{title}</H1>
      <P1 textColor={"#999"}>{description}</P1>
    </div>
  );
};

export default Headinfo;
