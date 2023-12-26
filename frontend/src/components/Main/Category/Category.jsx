import H6 from "@/components/Headings/H6";
import Image from "next/image";

const Category = ({ category }) => {
  console.log(category);
  return (
    <div className="grid grid-cols-2 gap-6 my-6 lg:gap-16 xl:my-20 sm:grid-cols-3 xl:grid-cols-6 ">
      {category.map((item, idx) => (
        <CategoryCard key={idx} title={item.title} img={item.img} />
      ))}
    </div>
  );
};

export default Category;

const CategoryCard = ({ title, img }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center cursor-pointer gap-y-3 rounded-xl ">
      <div className="bg-Lynx_White size-[150px] 2xl:size-[200px] xl:size-[150px]  lg:size-[200px] rounded-lg flex justify-center items-center">
        <Image
          src={img}
          width={100}
          height={100}
          alt={title}
          className="transition-transform duration-150 ease-in-out scale-75 hover:scale-90"
        />
      </div>
      <H6>{title}</H6>
    </div>
  );
};
