import ProductCard from "@/components/Product/ProductCard";

export const metadata = {
  title: "Shop | Furnitura",
};

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const ShopPage = async () => {
  const products = await getProducts();

  return (
    <div className="text-start">
      <p className=" text-Lead w-[702px] text-start font-normal text-2xl leading-[140%]">
        Showing 1-9 of 57 results
      </p>

      <div className="grid grid-cols-3 gap-16 my-20 ">
        {products.map((item, idx) => (
          <ProductCard
            key={idx}
            id={item.id}
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
