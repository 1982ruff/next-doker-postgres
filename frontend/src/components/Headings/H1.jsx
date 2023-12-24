import React from "react";

const H1 = ({ children, textColor }) => {
  return (
    <h1
      style={{ color: textColor }}
      className={` font-bold text-6xl leading-[140%]`}
    >
      {children}
    </h1>
  );
};

export default H1;
