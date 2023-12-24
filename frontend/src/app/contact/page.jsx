import ContactBlock from "@/components/ContactPage/ContactBlock";
import Headinfo from "@/components/HeadInfo/Headinfo";
import React from "react";

const ContactPage = () => {
  return (
    <section className="px-20">
      <Headinfo
        title={"Contact"}
        description={
          "We display products based on the latest products we have, if you want to see our old products please enter the name of the item."
        }
      />
      <ContactBlock />
    </section>
  );
};

export default ContactPage;
