const H5 = ({ children, textColor }) => {
  return (
    <h5
      style={{ color: textColor }}
      className=" font-normal text-2xl leading-[140%]"
    >
      {children}
    </h5>
  );
};

export default H5;
