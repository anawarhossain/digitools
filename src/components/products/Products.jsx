import React, { use } from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ pricingDataPromise }) => {
  const datas = use(pricingDataPromise);
  
  

  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-4xl">Premium Digital Tools</h1>
        <p className="text-sm text-gray-500">
          Choose from our curated collection of premium digital products
          designed
          <br />
          to boost your productivity and creativity.
        </p>

        <div className="tabs tabs-box items-center justify-center gap-2 bg-transparent">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab btn bg-linear-to-r from-[#5039F7] to-[#9416FB] text-white rounded-full w-32"
            aria-label="Products"
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab btn bg-linear-to-r from-[#5039F7] to-[#9416FB] text-white rounded-full w-32"
            aria-label="Cart"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10">
        {datas.map((data) => {
          return <ProductsCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Products;
