"use client";
import Image from "next/image";
import H6 from "../Headings/H6";
import { useState } from "react";
import { motion } from "framer-motion";

const ProductCard = ({ title, image, price }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="justify-center cursor-pointer relative  flex items-center flex-col gap-y-3 rounded-xl "
    >
      <div className="bg-Lynx_White  w-full h-[420px] rounded-lg flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          className="duration-150 ease-in-out transition-transform hover:scale-110"
        />
      </div>
      <div className="text-start place-self-start px-4 mt-2">
        <H6>{title}</H6>
        <h6 className="text-xl text-Satoimo_Brown font-bold">$ {price} </h6>
      </div>
      {show && (
        <>
          <button className=" absolute top-4 group right-4 justify-center items-center bg-white rounded-full">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" group-hover:scale-125 ease-in-out duration-200 transition-transform"
            >
              <path
                d="M19.9904 28.5597C19.7763 28.5597 19.5612 28.5212 19.3452 28.4443C19.1291 28.3674 18.9391 28.2468 18.775 28.0827L17.3385 26.777C15.5654 25.1603 13.9824 23.5722 12.5894 22.0126C11.1965 20.453 10.5 18.7821 10.5 17.0001C10.5 15.5809 10.9785 14.3927 11.9356 13.4357C12.8926 12.4786 14.0808 12.0001 15.5 12.0001C16.3064 12.0001 17.1029 12.186 17.8894 12.5578C18.6759 12.9296 19.3795 13.5335 20 14.3694C20.6205 13.5335 21.324 12.9296 22.1105 12.5578C22.8971 12.186 23.6936 12.0001 24.5 12.0001C25.9192 12.0001 27.1073 12.4786 28.0644 13.4357C29.0214 14.3927 29.5 15.5809 29.5 17.0001C29.5 18.8014 28.7916 20.4908 27.375 22.0683C25.9583 23.6459 24.3788 25.2206 22.6365 26.7924L21.2154 28.0827C21.0513 28.2468 20.8596 28.3674 20.6404 28.4443C20.4211 28.5212 20.2045 28.5597 19.9904 28.5597ZM19.2808 15.8886C18.7397 15.0642 18.1702 14.46 17.5721 14.0761C16.974 13.6921 16.2833 13.5001 15.5 13.5001C14.5 13.5001 13.6666 13.8334 13 14.5001C12.3333 15.1668 12 16.0001 12 17.0001C12 17.8027 12.2586 18.6418 12.7759 19.5174C13.2932 20.393 13.9426 21.2635 14.724 22.1289C15.5054 22.9943 16.3519 23.8398 17.2634 24.6654C18.1749 25.4911 19.0198 26.2584 19.798 26.9674C19.8557 27.0187 19.923 27.0443 20 27.0443C20.0769 27.0443 20.1442 27.0187 20.2019 26.9674C20.9801 26.2584 21.825 25.4911 22.7366 24.6654C23.6481 23.8398 24.4946 22.9943 25.276 22.1289C26.0574 21.2635 26.7067 20.393 27.224 19.5174C27.7413 18.6418 28 17.8027 28 17.0001C28 16.0001 27.6666 15.1668 27 14.5001C26.3333 13.8334 25.5 13.5001 24.5 13.5001C23.7166 13.5001 23.0259 13.6921 22.4279 14.0761C21.8298 14.46 21.2602 15.0642 20.7192 15.8886C20.6346 16.0168 20.5282 16.1129 20.4 16.177C20.2718 16.2411 20.1384 16.2732 20 16.2732C19.8615 16.2732 19.7282 16.2411 19.6 16.177C19.4718 16.1129 19.3654 16.0168 19.2808 15.8886Z"
                fill="#FA2020"
              />
            </svg>
          </button>
          <button className=" absolute group top-16 right-4 justify-center w-10 h-10 flex items-center bg-white rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" group-hover:scale-110 ease-in-out duration-200 transition-transform"
            >
              <path
                d="M12.0021 15.5769C13.1352 15.5769 14.0976 15.1803 14.8892 14.3871C15.6809 13.5939 16.0767 12.6308 16.0767 11.4977C16.0767 10.3646 15.6802 9.40224 14.887 8.61058C14.0938 7.81891 13.1307 7.42308 11.9976 7.42308C10.8645 7.42308 9.9021 7.81966 9.11044 8.61282C8.31877 9.40601 7.92294 10.3692 7.92294 11.5023C7.92294 12.6353 8.31952 13.5977 9.11269 14.3894C9.90587 15.181 10.869 15.5769 12.0021 15.5769ZM11.9998 14.2C11.2498 14.2 10.6123 13.9375 10.0873 13.4125C9.56234 12.8875 9.29984 12.25 9.29984 11.5C9.29984 10.75 9.56234 10.1125 10.0873 9.58748C10.6123 9.06248 11.2498 8.79998 11.9998 8.79998C12.7498 8.79998 13.3873 9.06248 13.9123 9.58748C14.4373 10.1125 14.6998 10.75 14.6998 11.5C14.6998 12.25 14.4373 12.8875 13.9123 13.4125C13.3873 13.9375 12.7498 14.2 11.9998 14.2ZM11.9998 18.5C9.89472 18.5 7.96941 17.9384 6.22391 16.8153C4.47839 15.6923 3.08513 14.2147 2.04411 12.3827C1.96078 12.2391 1.89988 12.0944 1.86141 11.9485C1.82294 11.8027 1.80371 11.653 1.80371 11.4995C1.80371 11.346 1.82294 11.1965 1.86141 11.051C1.89988 10.9054 1.96078 10.7609 2.04411 10.6173C3.08513 8.78525 4.47839 7.30769 6.22391 6.18463C7.96941 5.06154 9.89472 4.5 11.9998 4.5C14.105 4.5 16.0303 5.06154 17.7758 6.18463C19.5213 7.30769 20.9145 8.78525 21.9556 10.6173C22.0389 10.7609 22.0998 10.9056 22.1383 11.0514C22.1767 11.1973 22.196 11.347 22.196 11.5005C22.196 11.654 22.1767 11.8035 22.1383 11.949C22.0998 12.0945 22.0389 12.2391 21.9556 12.3827C20.9145 14.2147 19.5213 15.6923 17.7758 16.8153C16.0303 17.9384 14.105 18.5 11.9998 18.5ZM11.9998 17C13.8832 17 15.6123 16.5041 17.1873 15.5125C18.7623 14.5208 19.9665 13.1833 20.7998 11.5C19.9665 9.81664 18.7623 8.47914 17.1873 7.48748C15.6123 6.49581 13.8832 5.99998 11.9998 5.99998C10.1165 5.99998 8.38734 6.49581 6.81234 7.48748C5.23734 8.47914 4.03317 9.81664 3.19984 11.5C4.03317 13.1833 5.23734 14.5208 6.81234 15.5125C8.38734 16.5041 10.1165 17 11.9998 17Z"
                fill="#222222"
              />
            </svg>
          </button>
          <button className=" absolute bottom-20  group right-4 bg-Satoimo_Brown w-10 h-10 flex justify-center items-center rounded-lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:rotate-90 transition-transform ease-in-out duration-200"
            >
              <path
                d="M11.0769 12.923H4.92308C4.66154 12.923 4.44231 12.8346 4.26538 12.6576C4.08846 12.4806 4 12.2612 4 11.9996C4 11.7379 4.08846 11.5187 4.26538 11.342C4.44231 11.1653 4.66154 11.077 4.92308 11.077H11.0769V4.92308C11.0769 4.66154 11.1654 4.44231 11.3424 4.26539C11.5194 4.08846 11.7387 4 12.0004 4C12.262 4 12.4812 4.08846 12.6579 4.26539C12.8346 4.44231 12.923 4.66154 12.923 4.92308V11.077H19.0768C19.3384 11.077 19.5576 11.1654 19.7345 11.3424C19.9115 11.5194 19.9999 11.7388 19.9999 12.0004C19.9999 12.2621 19.9115 12.4813 19.7345 12.658C19.5576 12.8347 19.3384 12.923 19.0768 12.923H12.923V19.0769C12.923 19.3385 12.8345 19.5577 12.6575 19.7346C12.4805 19.9115 12.2612 20 11.9996 20C11.7379 20 11.5187 19.9115 11.342 19.7346C11.1653 19.5577 11.0769 19.3385 11.0769 19.0769V12.923Z"
                fill="white"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default ProductCard;
