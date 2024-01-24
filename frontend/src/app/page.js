import SectionDivider from "@/components/AboutPage/SectionDivider";
import Banner from "@/components/Main/Banner/Banner";
import Brands from "@/components/Main/Brands/Brands";
import Category from "@/components/Main/Category/Category";
import Slider from "@/components/Main/Hero/Slider";
import NewProducts from "@/components/Main/NewProducts/NewProducts";
import ProductOfTheWeek from "@/components/Main/ProductOfTheWeek/ProductOfTheWeek";
import Promo from "@/components/Main/Promo/Promo";
import RecentBlogs from "@/components/Main/RecentBlogs/RecentBlogs";
import SectionChair from "@/components/Main/SectionChair/SectionChair";
import NoDBConnection from "@/components/NoDBConnection";

const getCategory = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getSlides = async () => {
  const res = await fetch("http://localhost:3000/api/slides", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getBrands = async () => {
  const res = await fetch("http://localhost:3000/api/brands", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getBlogs = async () => {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export default async function Home() {
  const category = await getCategory();
  const product = await getProducts();
  const slides = await getSlides();
  const brands = await getBrands();
  const blogs = await getBlogs();

  return (
    <main className="">
      {category && product && slides && brands && blogs ? (
        <>
          <Slider slides={slides} />
          <Promo product={product} />

          {/* Categories */}
          <section className="px-10 text-center lg:px-20">
            <SectionDivider title={"Categories"} />
            <Category category={category} />
          </section>

          {/* New Products */}
          <section className="px-10 text-center lg:px-20">
            <SectionDivider title={"New Products"} />
            <NewProducts product={product} />
          </section>

          {/* Match Furniture Styles Banner*/}
          <section className="px-10 text-center lg:px-20">
            <Banner />
          </section>

          {/* Products of the week */}
          <section className="px-10 text-center lg:px-20">
            <SectionDivider title={"Products of the week"} />
            <ProductOfTheWeek product={product} />
          </section>

          {/* Stylish minimal chair */}
          <SectionChair />

          {/* Brands */}
          <Brands brands={brands} />

          {/* Recent Blogs */}
          <section className="px-20 text-center">
            <SectionDivider title={"Recent Blogs"} />
            <RecentBlogs blogs={blogs} />
          </section>
        </>
      ) : (
        <NoDBConnection />
      )}
    </main>
  );
}
