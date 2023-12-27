import Image from "next/image";

const Brands = ({ brands }) => {
  return (
    <section className="flex flex-wrap items-center justify-center w-full gap-32 mx-auto my-6 lg:my-20 ">
      {brands.map((item, idx) => (
        <Image
          width={120}
          height={50}
          src={item.logo}
          key={idx}
          alt={item.title}
        />
      ))}
    </section>
  );
};

export default Brands;
