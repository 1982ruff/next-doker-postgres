import Button from "@/components/Buttons/Button";
import P1 from "@/components/Paragraph/P1";
import P2 from "@/components/Paragraph/P2";
import { PRODUCT_OF_THE_WEEK } from "@/data";
import Image from "next/image";

const Wishlist = () => {
  return (
    <div className="grid gap-10 grid-cols-2 p-20">
      {PRODUCT_OF_THE_WEEK.map((item, idx) => (
        <WishlistCard
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
    <div className="flex p-10 shadow-gray-100 rounded-xl hover:shadow-xl gap-10">
      <div className="flex justify-center items-center rounded-xl bg-Lynx_White w-52 h-52">
        <Image
          src={image}
          alt={title}
          className=" w-36 h-36 object-cover hover:scale-110"
        />
      </div>

      <div className="flex justify-center gap-3 items-start text-start flex-col">
        <p
          className="text-Lead text-center font-normal text-2xl leading-[140%]"
          textColor={"#222222"}
        >
          {title}
        </p>
        <P2 textColor={"#644321"}>${price}</P2>
        <Button link={"/"}>Add To Cart</Button>
      </div>
    </div>
  );
};
