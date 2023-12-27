import Button from "@/components/Buttons/Button";
import Headinfo from "@/components/HeadInfo/Headinfo";
import H4 from "@/components/Headings/H4";
import P2 from "@/components/Paragraph/P2";
import P3 from "@/components/Paragraph/P3";
import Quantity from "@/components/Quantity";
import Image from "next/image";

export const metadata = {
  title: "Cart | Furnitura",
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

const CartPage = async () => {
  const product = await getProducts();
  return (
    <section className="">
      <Headinfo title={"Cart"} />

      <div className="grid grid-cols-3 p-20 gap-14">
        {/* Cart  */}
        <div className="col-span-2 p-10 border rounded-2xl">
          {product.map((item, idx) => (
            <CartDetail
              key={idx}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>

        {/* Order Summary */}
        <div className="flex flex-col justify-start w-full col-auto gap-6 p-10 text-start rounded-2xl">
          <H4>Order Summary</H4>

          <div className="flex flex-col gap-4 pb-4 border-b ">
            <div className="flex justify-between ">
              <p className="text-Lead text-start font-normal text-2xl leading-[140%]">
                Price
              </p>
              <P3>$80.00</P3>
            </div>

            <div className="flex justify-between ">
              <p className="text-Lead text-start font-normal text-2xl leading-[140%]">
                Discount
              </p>
              <P3>$15.05</P3>
            </div>

            <div className="flex justify-between ">
              <p className="text-Lead text-start font-normal text-2xl leading-[140%]">
                Shipping
              </p>
              <P3>Free</P3>
            </div>

            <div className="flex justify-between ">
              <p className="text-Lead text-start font-normal text-2xl leading-[140%]">
                Coupon Applied
              </p>
              <P3>$0.00</P3>
            </div>
          </div>

          <div className="flex justify-between ">
            <p className="text-Lead text-start font-normal text-2xl leading-[140%]">
              TOTAL
            </p>
            <P3>$54.95</P3>
          </div>

          <div className="flex justify-between ">
            <p className="text-Lead text-start font-normal text-2xl leading-[140%]">
              Estimated Delivery by
            </p>
            <P3>02 July, 2023</P3>
          </div>

          <Button link={"/"}>Proceed To Checkout</Button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;

const CartDetail = ({ image, title, price, color }) => {
  return (
    <div className="flex justify-between gap-10 p-10 border-b text-start last:border-none border-Basalt_grey/30 shadow-gray-100">
      <div className="flex items-center justify-center rounded-xl bg-Lynx_White w-52 h-52">
        <Image
          width={120}
          height={120}
          src={image}
          alt={title}
          className="object-cover w-36 h-36 hover:scale-110"
        />
      </div>

      <div className="flex flex-col items-start justify-center gap-3 justify-self-start text-start">
        <p className="text-Lead text-center font-normal text-2xl leading-[140%]">
          {title}
        </p>
        <P3>Color: Gunnared biege</P3>

        <Quantity />
      </div>

      <div className="flex flex-col items-start justify-center gap-8">
        <P2>${price}</P2>

        <button className="flex items-center justify-center rounded-lg size-10 hover:text-red-500 bg-Lynx_White">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.3077 20.5C6.80898 20.5 6.38302 20.3234 6.02982 19.9702C5.67661 19.617 5.5 19.191 5.5 18.6923V6.00005H5.25C5.03718 6.00005 4.85898 5.92826 4.7154 5.78468C4.5718 5.6411 4.5 5.46289 4.5 5.25008C4.5 5.03726 4.5718 4.85906 4.7154 4.71548C4.85898 4.57188 5.03718 4.50008 5.25 4.50008H8.99997C8.99997 4.25521 9.08619 4.04656 9.25863 3.87413C9.43106 3.7017 9.63971 3.61548 9.88457 3.61548H14.1154C14.3602 3.61548 14.5689 3.7017 14.7413 3.87413C14.9138 4.04656 15 4.25521 15 4.50008H18.75C18.9628 4.50008 19.141 4.57188 19.2845 4.71548C19.4281 4.85906 19.5 5.03726 19.5 5.25008C19.5 5.46289 19.4281 5.6411 19.2845 5.78468C19.141 5.92826 18.9628 6.00005 18.75 6.00005H18.5V18.6923C18.5 19.191 18.3233 19.617 17.9701 19.9702C17.6169 20.3234 17.191 20.5 16.6922 20.5H7.3077ZM17 6.00005H6.99997V18.6923C6.99997 18.7821 7.02883 18.8558 7.08652 18.9135C7.14423 18.9712 7.21795 19.0001 7.3077 19.0001H16.6922C16.782 19.0001 16.8557 18.9712 16.9134 18.9135C16.9711 18.8558 17 18.7821 17 18.6923V6.00005ZM9.40385 17.0001H10.9038V8.00005H9.40385V17.0001ZM13.0961 17.0001H14.5961V8.00005H13.0961V17.0001Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
