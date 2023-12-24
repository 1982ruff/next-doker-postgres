import React from "react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "@/data";

const Testimonials = () => {
  return (
    <section className="px-20 grid grid-cols-2 gap-16">
      {TESTIMONIALS.map((item, idx) => (
        <TestimonialCard
          key={idx}
          image={item.image}
          title={item.title}
          description={item.description}
          name={item.name}
          whoInCompany={item.whoInCompany}
        />
      ))}
    </section>
  );
};

export default Testimonials;
