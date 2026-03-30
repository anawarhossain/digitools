import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { toast } from "react-toastify";

const ProductsCard = ({ data, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);
  const IconComponent = LucideIcons[data.icon];

  const handleBuy = () => {
    setIsBuy(true);
    const isFound = carts.find(item => item.id === data.id)
    if (isFound) {
      toast.error("Item Already in cart")
      return
    }
    setCarts([...carts, data])
    toast.success("Item add in card");
  };

  const buyButtonStyle = {
    true: "bg-linear-to-r from-[#2a014b] to-[#15028f]",
    false: "bg-linear-to-r from-[#5039F7] to-[#9416FB]",
  };

  return (
    <div key={data.id} className="card bg-[#f9fafc] shadow-sm">
      <div className="card-body">
        <span className="badge badge-sm badge-warning mb-2">{data.tag}</span>

        <div className="mb-4">
          {IconComponent ? (
            <IconComponent size={32} className="text-blue-500" />
          ) : (
            <LucideIcons.HelpCircle size={32} className="text-gray-400" />
          )}
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{data.name}</h2>
          <span className="text-xl font-semibold text-primary">
            ${data.price}/{data.period === "monthly" ? "mo" : "yr"}
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-2">{data.description}</p>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {data.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <LucideIcons.Check size={16} className="me-2 text-success" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={handleBuy}
            className={`btn btn-primary btn-block border-none text-white ${buyButtonStyle[isBuy]}`}
          >
            {isBuy ? "Added to car" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
