import Headinfo from "@/components/HeadInfo/Headinfo";
import ShopFilter from "@/components/ShopPage/ShopFilter";

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

const ShopPageLayout = async ({ children }) => {
  const products = await getProducts();
  return (
    <section className="px-20">
      <Headinfo
        title={"Shops"}
        description={
          "We display products based on the latest products we have, if you want to see our old products please enter the name of the item."
        }
      />
      <div className="flex items-start justify-start gap-10 py-10 text-start ">
        <div className="basis-3/4"> {children}</div>
        <div className="basis-1/4">
          <ShopFilter products={products} />
        </div>
      </div>
    </section>
  );
};

export default ShopPageLayout;
