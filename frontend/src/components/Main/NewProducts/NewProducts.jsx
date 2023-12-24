import ProductCard from "@/components/Product/ProductCard";
import { PRODUCTS } from "@/data";
import React from "react";

const NewProducts = () => {
  return (
    <div className="grid gap-16 my-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {PRODUCTS.map((item, idx) => (
        <ProductCard
          key={idx}
          title={item.title}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default NewProducts;
