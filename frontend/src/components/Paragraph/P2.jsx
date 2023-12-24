const P2 = ({ children, textColor }) => {
  return (
    <p
      style={{ color: textColor }}
      className=" font-bold text-xl leading-[100%]"
    >
      {children}
    </p>
  );
};

export default P2;
