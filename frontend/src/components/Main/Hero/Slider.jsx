"use client";
import Button from "@/components/Buttons/Button";
import H1 from "@/components/Headings/H1";
import { SLIDES } from "@/data";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination, A11y]}
      className="flex relative h-[500px] rounded-lg"
    >
      {SLIDES.map((item, idx) => (
        <SwiperSlide
          key={idx}
          className="rounded-lg  relative overflow-hidden flex justify-center items-center"
        >
          <Image
            src={item.image}
            alt={item.title}
            className=" rounded-lg w-full h-full object-cover object-center"
          />

          <div className="flex flex-col gap-10 absolute px-28 lg:px-52 top-[50%] translate-y-[-50%] left-0 ">
            <div className="lg:w-[652px]">
              <H1 textColor="#000">{item.title}</H1>
            </div>
            <Button link={item.link}>Shop now</Button>
          </div>
        </SwiperSlide>
      ))}
      <SwiperButtons />
    </Swiper>
  );
};

export default Slider;

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute px-[30px] top-[50%] translate-y-[-50%] z-10 flex w-full justify-between">
      <button
        onClick={() => swiper.slidePrev()}
        className="border w-14 h-14 flex justify-center items-center  bg-white hover:opacity-100 opacity-60 rounded-full "
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.7599 11.9898L16.1676 5.57246C16.3524 5.39398 16.4431 5.17801 16.4396 4.92456C16.4361 4.6711 16.3404 4.45357 16.1525 4.27196C15.9645 4.08398 15.7436 3.98999 15.4899 3.98999C15.2361 3.98999 15.0152 4.08398 14.8273 4.27196L7.92118 11.1781C7.79903 11.3003 7.71043 11.4265 7.65539 11.5569C7.60033 11.6873 7.57279 11.8316 7.57279 11.9898C7.57279 12.1417 7.60033 12.2844 7.65539 12.4179C7.71043 12.5514 7.79903 12.6793 7.92118 12.8014L14.8425 19.7228C15.0209 19.9012 15.2369 19.9903 15.4903 19.99C15.7438 19.9897 15.9645 19.8955 16.1525 19.7076C16.3404 19.5196 16.4344 19.2988 16.4344 19.045C16.4344 18.7912 16.3404 18.5703 16.1525 18.3824L9.7599 11.9898Z"
            fill="#222222"
          />
        </svg>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="border w-14 h-14 flex justify-center items-center  bg-white hover:opacity-100 opacity-60 rounded-full "
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7883 11.9998L7.38046 5.58247C7.19567 5.40399 7.10501 5.18802 7.10849 4.93457C7.11198 4.68111 7.20769 4.46358 7.39564 4.28197C7.5836 4.09399 7.80446 4 8.05824 4C8.31202 4 8.53289 4.09399 8.72084 4.28197L15.627 11.1881C15.7492 11.3103 15.8378 11.4365 15.8928 11.5669C15.9479 11.6973 15.9754 11.8416 15.9754 11.9998C15.9754 12.1517 15.9479 12.2944 15.8928 12.4279C15.8378 12.5614 15.7492 12.6893 15.627 12.8114L8.70566 19.7328C8.52719 19.9112 8.31122 20.0003 8.05776 20C7.8043 19.9997 7.5836 19.9055 7.39564 19.7176C7.20769 19.5296 7.11371 19.3088 7.11371 19.055C7.11371 18.8012 7.20769 18.5803 7.39564 18.3924L13.7883 11.9998Z"
            fill="#222222"
          />
        </svg>
      </button>
    </div>
  );
};
