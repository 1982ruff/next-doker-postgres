const P1 = ({ children, textColor }) => {
  return (
    <p
      style={{ color: textColor }}
      className=" text-Lynx_White w-[702px] text-center font-normal text-2xl leading-[140%]"
    >
      {children}
    </p>
  );
};

export default P1;
