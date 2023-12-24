import H6 from "@/components/Headings/H6";
import { CATEGORIES } from "@/data";

const Category = () => {
  return (
    <div className="grid gap-6 lg:gap-16 my-6 xl:my-20 sm:grid-cols-3 grid-cols-2 xl:grid-cols-6 ">
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
      <div className="bg-Lynx_White size-[150px] 2xl:size-[200px] xl:size-[150px]  lg:size-[200px] rounded-lg flex justify-center items-center">
        <span className=" duration-150 ease-in-out transition-transform scale-75 hover:scale-90">
          {icon}
        </span>
      </div>
      <H6>{title}</H6>
    </div>
  );
};
