import Headinfo from "@/components/HeadInfo/Headinfo";
import Subscribe from "@/components/Main/Subscribe/Subscribe";
import ShopFilter from "@/components/ShopPage/ShopFilter";
import React from "react";

const ShopPageLayout = ({ children }) => {
  return (
    <section className="px-20">
      <Headinfo
        title={"Shops"}
        description={
          "We display products based on the latest products we have, if you want to see our old products please enter the name of the item."
        }
      />
      <div className="flex py-10 gap-10 text-start items-start justify-start ">
        <div className="basis-3/4"> {children}</div>
        <div className="basis-1/4">
          <ShopFilter />
        </div>
      </div>
    </section>
  );
};

export default ShopPageLayout;
