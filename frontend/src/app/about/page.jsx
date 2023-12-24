import MeetOurTeam from "@/components/AboutPage/MeetOurTeam/MeetOurTeam";
import OfferBanner from "@/components/AboutPage/OfferBanner/OfferBanner";
import OurShop from "@/components/AboutPage/OurShop/OutShop";
import SectionDivider from "@/components/AboutPage/SectionDivider";
import Testimonials from "@/components/AboutPage/Testimonials/Testimonials";
import Headinfo from "@/components/HeadInfo/Headinfo";
import Brands from "@/components/Main/Brands/Brands";
import Subscribe from "@/components/Main/Subscribe/Subscribe";
import React from "react";

const AboutPage = () => {
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
      <MeetOurTeam />

      <SectionDivider title={"Our Customers Are Saying"} />
      <Testimonials />

      <Brands />
    </section>
  );
};

export default AboutPage;
