import React from "react";

import * as LucideIcons from "lucide-react";
import { toast } from "react-toastify";

const Card = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
    const handlePayment = () => {
        setCarts([])
        toast.success(`Payment successfully!`);
    }
    const handleDelete = (item) => {
        const cartsFilter = carts.filter(c => c.id !== item.id)
        setCarts(cartsFilter)
        toast.success(`Deleted ${item.name}`);
    }
  return (
    <div className="container mx-auto p-7 border border-gray-200 rounded-xl min-h-75">
      <h1 className="text-3xl font-bold mb-6">Your Cart ({carts.length})</h1>
      {carts.length === 0 ? (
        <p className="text-gray-400 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {carts.map((item, index) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.HelpCircle;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 shadow-sm rounded-lg"
              >
                <Icon size={24} className="text-blue-500" />
                <div className="flex-1">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
                <button
                  onClick={()=> handleDelete(item)}
                  className="btn btn-ghost btn-sm text-red-500"
                >
                  Remove
                </button>
              </div>
            );
          })}
          <div className="flex justify-between text-2xl font-bold">
            <div>Total</div>
            <div>{totalPrice}</div>
          </div>
          <button
            onClick={handlePayment}
            className="btn btn-block rounded-full  bg-linear-to-r from-[#5039F7] to-[#9416FB] text-white"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
