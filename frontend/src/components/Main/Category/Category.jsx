import H6 from "@/components/Headings/H6";
import P4 from "@/components/Paragraph/P4";
import { CATEGORIES } from "@/data";

const Category = () => {
  return (
    <div className="grid gap-16 my-20 grid-cols-6 ">
      {CATEGORIES.map((item, idx) => (
        <CategoryCard key={idx} title={item.title} icon={item.icon} />
      ))}
    </div>
  );
};

export default Category;

const CategoryCard = ({ title, icon }) => {
  return (
    <div className="justify-center cursor-pointer flex items-center flex-col gap-y-3 text-center rounded-xl ">
      <div className="bg-Lynx_White w-[200px] h-[200px] rounded-lg flex justify-center items-center">
        <span className=" duration-150 ease-in-out transition-transform hover:scale-110">
          {icon}
        </span>
      </div>
      <H6>{title}</H6>
    </div>
  );
};
