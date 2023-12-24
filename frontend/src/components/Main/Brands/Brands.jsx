import { BRANDS } from "@/data";

const Brands = () => {
  return (
    <section className="my-20 flex w-full gap-32 mx-auto justify-center items-center ">
      {BRANDS.map((item, idx) => (
        <div div key={idx}>
          {item.logo}
        </div>
      ))}
    </section>
  );
};

export default Brands;
