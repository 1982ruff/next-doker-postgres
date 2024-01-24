import Button from "@/components/Buttons/Button";
import P2 from "@/components/Paragraph/P2";
import Image from "next/image";

export const metadata = {
  title: "Wishlist | Furnitura",
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

const Wishlist = async () => {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-2 gap-10 p-20">
      {products.map((item, idx) => (
        <WishlistCard
          key={idx}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Wishlist;

const WishlistCard = ({ image, title, price }) => {
  return (
    <div className="flex gap-10 p-10 shadow-gray-100 rounded-xl hover:shadow-xl">
      <div className="flex items-center justify-center rounded-xl bg-Lynx_White w-52 h-52">
        {image ? (
          <Image
            width={150}
            height={150}
            src={image}
            alt={title}
            className="object-cover w-36 h-36 hover:scale-110"
          />
        ) : (
          "No Image"
        )}
      </div>

      <div className="flex flex-col items-start justify-center gap-3 text-start">
        <p className="text-Lead text-center font-normal text-2xl leading-[140%]">
          {title}
        </p>
        <P2 textColor={"#644321"}>${price}</P2>
        <Button link={"/"}>Add To Cart</Button>
      </div>
    </div>
  );
};
