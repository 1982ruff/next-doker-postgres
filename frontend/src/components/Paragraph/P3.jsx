const P3 = ({ children, textColor }) => {
  return (
    <p
      style={{ color: textColor }}
      className="text-xl text-Basalt_grey font-light leading-[150%]"
    >
      {children}
    </p>
  );
};

export default P3;
