import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const PriceCart = () => {
  return (
    <div className="container mx-auto text-center pt-6 pb-6">
      <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
      <p className="text-sm mb-8">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10 ">
        <div className="card p-10 bg-[#f9fafc] shadow-sm text-left">
          <div className="card-body">
            <div className="">
              <h2 className="text-3xl font-bold mb-2">Starter</h2>
              <span className="text-sm">Perfect for getting started</span>
              <h1 className="text-4xl text-gray-400 mt-6">
                <span className="text-5xl text-black">$0</span>/month
              </h1>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-green-400" />
                  Access to 10 free tools
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-green-400" />
                  Basic templates
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-green-400" />
                  Community support
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-green-400" />1 project per
                  month
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-[#5039F7] to-[#9416FB] text-white">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
        <div className="relative card p-10 bg-linear-to-r from-[#5039F7] to-[#9416FB] text-white shadow-sm text-left ">
          <div className="flex justify-center items-center">
            <span className="absolute -top-4 badge badge-xs badge-warning p-4 rounded-full">
              Most Popular
            </span>
          </div>
          <div className="card-body">
            <div className="">
              <h2 className="text-3xl font-bold mb-2">Pro</h2>
              <span className="text-sm">Best for professionals</span>
              <h1 className="text-4xl text-gray-400 mt-6">
                <span className="text-5xl text-white">$29</span>/month
              </h1>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-white-400" />
                  Access to all premium tools
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-white-400" />
                  Unlimited templates
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-white-400" />
                  Priority support
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-white-400" />
                  Unlimited projects
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-white-400" />
                  Cloud sync
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-white-400" />
                  Advanced analytics
                </span>
              </li>
            </ul>
            <div className="mt-6 bg-white rounded-full overflow-hidden">
              <button className="btn btn-block  bg-linear-to-r from-[#5039F7] to-[#9416FB] bg-clip-text text-transparent">
                Start Pro Trial
              </button>
            </div>
          </div>
        </div>
        <div className="card p-10 bg-[#f9fafc] shadow-sm text-left">
          <div className="card-body">
            <div className="">
              <h2 className="text-3xl font-bold mb-2">Enterprise</h2>
              <span className="text-sm">For teams and businesses</span>
              <h1 className="text-4xl text-gray-400 mt-6">
                <span className="text-5xl text-black">$99</span>/month
              </h1>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-green-400" />
                  Everything in Pro
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-green-400" />
                  Team collaboration
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-green-400" />
                  Custom integrations
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-green-400" />
                  Dedicated support
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-green-400" />
                  SLA guarantee
                </span>
              </li>
              <li>
                <span className="flex gap-1">
                  <IoCheckmarkSharp className="text-green-400" />
                  Custom branding
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block rounded-full bg-linear-to-r from-[#5039F7] to-[#9416FB] text-white">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCart;
