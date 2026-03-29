import React from "react";
import playIcons from "../../assets/Play.png";
import bannerImages from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-6 mt-5 mb-5">
      <div className="text-center lg:text-left flex-1">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8EBFF] rounded-full">
          <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-[#C9B3FF]">
            <div className="h-2 w-2 rounded-full bg-[#7D26CD]"></div>
          </div>

          <span className="bg-[#E1E7FF] text-[#7D26CD] rounded-full p-1 text-sm">
            New: AI-Powered Tools Available
          </span>
        </div>
        <h1 className="text-5xl font-bold mt-5 mb-4">
          Supercharge Your <br />
          <span className="bg-linear-to-r from-[#5039F7] to-[#9416FB] bg-clip-text text-transparent">
            Digital Workflow
          </span>
        </h1>
        <p className="text-sm mb-6">
          Access premium AI tools, design assets, templates, and productivity
          <br />
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <button className="btn bg-linear-to-r from-[#5039F7] to-[#9416FB] text-white rounded-full">
            Explore Products
          </button>
          <button className="flex btn btn-primary btn-outline rounded-full">
            <img src={playIcons} alt="Play Icon" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="">
        <img className="flex justify-between items-center" src={bannerImages} alt="" />
      </div>
    </div>
  );
};

export default Banner;
