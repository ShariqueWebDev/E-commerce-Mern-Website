import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const LastestProductSection = () => {
  return (
    <div className="mt-16">
      <div className="flex justify-between">
        <h2 className="uppercase font-medium">Lastest Products</h2>
        <h3 className="uppercase font-medium">See More</h3>
      </div>
      <div className=" mt-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
        {Array.from({ length: 6 })
          ?.slice(0, 4)
          ?.map((_, index) => {
            return <ProductCard key={index} />;
          })}
      </div>
    </div>
  );
};

export default LastestProductSection;
