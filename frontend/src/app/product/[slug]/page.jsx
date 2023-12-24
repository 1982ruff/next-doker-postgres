import SectionDivider from "@/components/AboutPage/SectionDivider";
import Button from "@/components/Buttons/Button";
import H2 from "@/components/Headings/H2";
import H5 from "@/components/Headings/H5";
import H6 from "@/components/Headings/H6";
import P3 from "@/components/Paragraph/P3";
import ProductCard from "@/components/Product/ProductCard";
import Quantity from "@/components/Quantity";
import { PRODUCTS, PRODUCT_OF_THE_WEEK } from "@/data";
import Image from "next/image";

const ProductDetailPage = () => {
  return (
    <section className="p-20">
      <div className="grid grid-cols-2 gap-20">
        {/* Detailed Information */}
        <div className=" flex flex-col  gap-11">
          {/* Breadcrumbs */}
          <div className="flex">
            <H6>Chair / Comfort furniture commode chair</H6>
          </div>

          {/* Main title */}
          <H2>{PRODUCTS[0].title}</H2>

          {/* Price & Rating */}
          <div className="flex justify-between">
            {/* Price */}
            <div className="flex gap-3">
              <H5 textColor={"#644321"}>${PRODUCTS[0].price}</H5>
              <H5 textColor={"#999999"}>${PRODUCTS[0].priceOld}</H5>
            </div>

            {/* Rating */}
            <div className="flex gap-1">
              {[...Array(5)].map((u, i) => (
                <svg
                  key={i}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9996 17.6884L8.10924 20.0345C7.96437 20.1191 7.81919 20.1547 7.67369 20.1412C7.52817 20.1278 7.39644 20.0787 7.27849 19.9941C7.16055 19.9095 7.06954 19.7989 7.00544 19.6624C6.94132 19.5259 6.93106 19.3749 6.97466 19.2095L8.00734 14.7922L4.57274 11.8192C4.44454 11.7076 4.36281 11.5785 4.32756 11.4317C4.29231 11.2849 4.3016 11.1423 4.35544 11.0038C4.40929 10.8653 4.48685 10.7522 4.58814 10.6644C4.68942 10.5766 4.82788 10.5192 5.00351 10.4923L9.53619 10.0961L11.2958 5.92499C11.3599 5.76987 11.457 5.65513 11.5871 5.58076C11.7172 5.50641 11.8547 5.46924 11.9996 5.46924C12.1445 5.46924 12.282 5.50641 12.4121 5.58076C12.5422 5.65513 12.6393 5.76987 12.7034 5.92499L14.463 10.0961L18.9957 10.4923C19.1713 10.5192 19.3098 10.5766 19.4111 10.6644C19.5124 10.7522 19.5899 10.8653 19.6438 11.0038C19.6976 11.1423 19.7069 11.2849 19.6717 11.4317C19.6364 11.5785 19.5547 11.7076 19.4265 11.8192L15.9919 14.7922L17.0246 19.2095C17.0682 19.3749 17.0579 19.5259 16.9938 19.6624C16.9297 19.7989 16.8387 19.9095 16.7207 19.9941C16.6028 20.0787 16.4711 20.1278 16.3255 20.1412C16.18 20.1547 16.0349 20.1191 15.89 20.0345L11.9996 17.6884Z"
                    fill="#644321"
                  />
                </svg>
              ))}

              <P3 textColor="#000">5.0</P3>
              <P3>(345)</P3>
            </div>
          </div>

          {/* Description */}
          <P3>{PRODUCTS[0].description}</P3>

          {/* Quantity and Button */}
          <div className=" flex gap-10">
            <Quantity />
            <Button link={"/"}>Add To Cart</Button>
          </div>

          {/* Category */}
          <P3>Category: {PRODUCTS[0].category}</P3>

          {/* Tags */}
          <P3>Tag: {PRODUCTS[0].tags}</P3>

          {/* Shipping */}
          <P3 textColor={"#000"}>Shipping: {PRODUCTS[0].shipping}</P3>

          {/* Add to wishlist */}
          <button className="flex gap-3 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9904 20.5596C11.7763 20.5596 11.5612 20.5211 11.3452 20.4442C11.1291 20.3672 10.9391 20.2467 10.775 20.0826L9.33848 18.7769C7.56539 17.1602 5.98238 15.5721 4.58943 14.0125C3.19648 12.4528 2.5 10.782 2.5 8.99998C2.5 7.58076 2.97852 6.39263 3.93558 5.43558C4.89263 4.47853 6.08076 4 7.49998 4C8.30638 4 9.10285 4.1859 9.8894 4.5577C10.6759 4.9295 11.3795 5.53335 12 6.36925C12.6205 5.53335 13.324 4.9295 14.1105 4.5577C14.8971 4.1859 15.6936 4 16.5 4C17.9192 4 19.1073 4.47853 20.0644 5.43558C21.0214 6.39263 21.5 7.58076 21.5 8.99998C21.5 10.8012 20.7916 12.4907 19.375 14.0682C17.9583 15.6458 16.3788 17.2205 14.6365 18.7923L13.2154 20.0826C13.0513 20.2467 12.8596 20.3672 12.6404 20.4442C12.4211 20.5211 12.2045 20.5596 11.9904 20.5596ZM11.2808 7.88845C10.7397 7.06408 10.1702 6.45992 9.5721 6.07595C8.97402 5.69197 8.28331 5.49998 7.49998 5.49998C6.49998 5.49998 5.66664 5.83331 4.99998 6.49998C4.33331 7.16664 3.99998 7.99998 3.99998 8.99998C3.99998 9.80254 4.25863 10.6416 4.77593 11.5173C5.29323 12.3929 5.94257 13.2634 6.72398 14.1288C7.50539 14.9942 8.35187 15.8397 9.2634 16.6653C10.1749 17.491 11.0198 18.2583 11.798 18.9673C11.8557 19.0186 11.923 19.0442 12 19.0442C12.0769 19.0442 12.1442 19.0186 12.2019 18.9673C12.9801 18.2583 13.825 17.491 14.7366 16.6653C15.6481 15.8397 16.4946 14.9942 17.276 14.1288C18.0574 13.2634 18.7067 12.3929 19.224 11.5173C19.7413 10.6416 20 9.80254 20 8.99998C20 7.99998 19.6666 7.16664 19 6.49998C18.3333 5.83331 17.5 5.49998 16.5 5.49998C15.7166 5.49998 15.0259 5.69197 14.4279 6.07595C13.8298 6.45992 13.2602 7.06408 12.7192 7.88845C12.6346 8.01665 12.5282 8.11281 12.4 8.17693C12.2718 8.24103 12.1384 8.27308 12 8.27308C11.8615 8.27308 11.7282 8.24103 11.6 8.17693C11.4718 8.11281 11.3654 8.01665 11.2808 7.88845Z"
                fill="#644321"
              />
            </svg>
            <P3 textColor={"#644321"}>Add To Wishlist</P3>
          </button>
        </div>

        {/* Image & Thumbs */}
        <div className="flex  flex-col">
          <div className=" flex w-[550px] h-[550px] flex-col gap-4 justify-center items-center rounded-xl bg-Lynx_White">
            <Image
              src={PRODUCTS[0].image}
              alt={PRODUCTS[0].title}
              className=" scale-150"
            />
          </div>

          <div className="flex mt-6 gap-14">
            <Image
              src={PRODUCTS[0].image}
              alt={PRODUCTS[0].title}
              className="size-24 cursor-pointer hover:border-2 border rounded-lg"
            />
            <Image
              src={PRODUCTS[0].image}
              alt={PRODUCTS[0].title}
              className="size-24 cursor-pointer hover:border-2 border rounded-lg"
            />
            <Image
              src={PRODUCTS[0].image}
              alt={PRODUCTS[0].title}
              className="size-24 cursor-pointer hover:border-2 border rounded-lg"
            />
            <Image
              src={PRODUCTS[0].image}
              alt={PRODUCTS[0].title}
              className="size-24 cursor-pointer hover:border-2 border rounded-lg"
            />
          </div>
        </div>
      </div>

      <SectionDivider title={"Related Products"} />
      <div className="grid gap-16 my-20 grid-cols-4 ">
        {PRODUCT_OF_THE_WEEK.map((item, idx) => (
          <ProductCard
            key={idx}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductDetailPage;
