import H3 from "../Headings/H3";

const SectionDivider = ({ title }) => {
  return (
    <div className="flex my-20 text-center justify-center items-center gap-6">
      <span className="w-[70px] rounded-lg h-[3px] bg-black/70"></span>
      <H3>{title}</H3>
      <span className="w-[70px] rounded-lg h-[3px] bg-black/70"></span>
    </div>
  );
};

export default SectionDivider;
