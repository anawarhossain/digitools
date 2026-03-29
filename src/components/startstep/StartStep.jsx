import React from "react";
import UserIcon from "../../assets/user.png";
import ProductIcon from "../../assets/package.png";
import CreatingIcon from "../../assets/rocket.png";

const StartStep = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Get Started in 3 Steps</h1>
        <span className="text-sm">
          Start using premium digital tools in minutes, not hours.
        </span>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 bg-gray-50">
          <div class="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <span class="absolute top-4 right-4 bg-[#7D26CD] text-white text-xs font-bold h-7 w-7 flex items-center justify-center rounded-full">
              01
            </span>
            <div class="w-20 h-20 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
              <img className="p-3" src={UserIcon} alt="Create Account" />
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-2">
              Create Account
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div class="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <span class="absolute top-4 right-4 bg-[#7D26CD] text-white text-xs font-bold h-7 w-7 flex items-center justify-center rounded-full">
              02
            </span>
            <div class="w-20 h-20 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
              <img className="p-3" src={ProductIcon} alt="Choose Products" />
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-2">
              Choose Products
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div class="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <span class="absolute top-4 right-4 bg-[#7D26CD] text-white text-xs font-bold h-7 w-7 flex items-center justify-center rounded-full">
              03
            </span>
            <div class="w-20 h-20 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
              <img className="p-3" src={CreatingIcon} alt="Start Creating" />
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-2">
              Start Creating
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartStep;
