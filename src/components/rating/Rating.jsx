import React from "react";

const Rating = () => {
  return (
    <div className="bg-linear-to-r from-[#5039F7] to-[#9416FB]">
      <div className="container mx-auto lg:flex justify-between items-center text-center p-10 text-white">
        <div>
          <h1 className="text-5xl  font-bold">50K+</h1>
          <span className="text-sm opacity-80">Active Users</span>
        </div>
        <div className="divider lg:divider-horizontal before:bg-white after:bg-white opacity-60"></div>
        <div>
          <h1 className="text-5xl font-bold">200+</h1>
          <span className="text-sm  opacity-80">Premium Tools</span>
        </div>
        <div className="divider lg:divider-horizontal before:bg-white after:bg-white opacity-60"></div>
        <div>
          <h1 className="text-5xl font-bold">4.9</h1>
          <span className="text-sm opacity-80">Rating</span>
        </div>
      </div>
    </div>
  );
};

export default Rating;
