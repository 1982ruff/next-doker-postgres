import TestimonialCard from "./TestimonialCard";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="grid grid-cols-2 gap-16 px-20">
      {testimonials.map((item, idx) => (
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
