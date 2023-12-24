import P1 from "@/components/Paragraph/P1";
import ProductCard from "@/components/Product/ProductCard";
import { PRODUCTS } from "@/data";

const ShopPage = () => {
  return (
    <div className="text-start">
      <p className=" text-Lead w-[702px] text-start font-normal text-2xl leading-[140%]">
        Showing 1-9 of 57 results
      </p>

      <div className="grid gap-16 my-20 grid-cols-3 ">
        {PRODUCTS.map((item, idx) => (
          <ProductCard
            key={idx}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
