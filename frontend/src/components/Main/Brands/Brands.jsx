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
    <section className="my-20 flex w-full gap-32 mx-auto justify-center items-center ">
      <Carousel>
        <CarouselContent>
          {BRANDS.map((item, idx) => (
            <CarouselItem>
              <div div key={idx}>
                {item.logo}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Brands;
