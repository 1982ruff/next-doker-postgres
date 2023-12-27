import MeetOurTeam from "@/components/AboutPage/MeetOurTeam/MeetOurTeam";
import OfferBanner from "@/components/AboutPage/OfferBanner/OfferBanner";
import OurShop from "@/components/AboutPage/OurShop/OutShop";
import SectionDivider from "@/components/AboutPage/SectionDivider";
import Testimonials from "@/components/AboutPage/Testimonials/Testimonials";
import Headinfo from "@/components/HeadInfo/Headinfo";
import Brands from "@/components/Main/Brands/Brands";
import React from "react";

export const metadata = {
  title: "About | Furnitura",
};

const getTeam = async () => {
  const res = await fetch("http://localhost:3000/api/team", {
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

const getTestimonials = async () => {
  const res = await fetch("http://localhost:3000/api/testimonials", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const AboutPage = async () => {
  const team = await getTeam();
  const brands = await getBrands();
  const testimonials = await getTestimonials();

  return (
    <section className="">
      <Headinfo
        title={"About"}
        description={
          "We display products based on the latest products we have, if you want to see our old products please enter the name of the item."
        }
      />
      <OurShop />

      <OfferBanner />

      <SectionDivider title={"Meet Our Team"} />
      <MeetOurTeam team={team} />

      <SectionDivider title={"Our Customers Are Saying"} />
      <Testimonials testimonials={testimonials} />

      <Brands brands={brands} />
    </section>
  );
};

export default AboutPage;
