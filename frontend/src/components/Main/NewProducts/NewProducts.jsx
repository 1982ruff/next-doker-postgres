import ProductCard from "@/components/Product/ProductCard";

const NewProducts = ({ product }) => {
  return (
    <div className="grid grid-cols-1 gap-16 my-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {product.map((item, idx) => (
        <ProductCard
          key={idx}
          slug={item.slug}
          title={item.title}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default NewProducts;
