import React, { use } from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ pricingDataPromise, }) => {
  const datas = use(pricingDataPromise);

  

  return (
    <div className="container mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10">
        {datas.map((data) => {
          return <ProductsCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Products;
