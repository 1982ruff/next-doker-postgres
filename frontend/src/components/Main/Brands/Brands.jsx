"use client";
import { BRANDS } from "@/data";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Brands = () => {
  return (
    <section className="flex items-center justify-center w-full gap-32 mx-auto my-20 ">
      <Carousel>
        <CarouselContent>
          {BRANDS.map((item, idx) => (
            <CarouselItem key={idx}>{item.logo}</CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Brands;
