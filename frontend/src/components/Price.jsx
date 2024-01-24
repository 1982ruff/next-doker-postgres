"use client";
import { useEffect, useState } from "react";
import H5 from "./Headings/H5";
import { useCartStore } from "@/utils/store";
import { toast } from "./ui/use-toast";

const Price = ({ product }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const decQty = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const incQty = () => {
    setQuantity((prev) => (prev < 9 ? prev + 1 : 9));
  };

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    setTotal(quantity * product.price);
  }, [quantity, product]);

  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.image,
      price: total,
      quantity: quantity,
    });
    toast({
      title: `${product.title} added to the cart!`,
    });
  };

  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-6 px-4 py-2 border rounded-xl border-Satoimo_Brown">
        <button onClick={decQty} className="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 13C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H6Z"
              fill="#999999"
            />
          </svg>
        </button>
        <span className="text-xl ">{quantity}</span>
        <button onClick={incQty} className="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 13H6C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H11V6C11 5.71667 11.0958 5.47917 11.2875 5.2875C11.4792 5.09583 11.7167 5 12 5C12.2833 5 12.5208 5.09583 12.7125 5.2875C12.9042 5.47917 13 5.71667 13 6V11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H13V18C13 18.2833 12.9042 18.5208 12.7125 18.7125C12.5208 18.9042 12.2833 19 12 19C11.7167 19 11.4792 18.9042 11.2875 18.7125C11.0958 18.5208 11 18.2833 11 18V13Z"
              fill="#644321"
            />
          </svg>
        </button>
      </div>

      <button onClick={handleCart}>Add To Cart</button>

      <div className="flex gap-3">
        <H5 textColor={"#644321"}>Итого: ${total}</H5>
      </div>
    </div>
  );
};

export default Price;
