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
import Subscribe from "@/components/Main/Subscribe/Subscribe";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <Promo />

      {/* Categories */}
      <section className="lg:px-20 px-10 text-center">
        <SectionDivider title={"Categories"} />
        <Category />
      </section>

      {/* New Products */}
      <section className="lg:px-20 px-10 text-center">
        <SectionDivider title={"New Products"} />
        <NewProducts />
      </section>

      {/* Match Furniture Styles Banner*/}
      <section className="lg:px-20 px-10 text-center">
        <Banner />
      </section>

      {/* Products of the week */}
      <section className="lg:px-20 px-10 text-center">
        <SectionDivider title={"Products of the week"} />
        <ProductOfTheWeek />
      </section>

      {/* Stylish minimal chair */}
      <SectionChair />

      {/* Brands */}
      <Brands />

      {/* Recent Blogs */}
      {/* <section className="px-20 text-center">
        <SectionDivider title={"Recent Blogs"} />
        <RecentBlogs />
      </section> */}
    </main>
  );
}
