import React from "react";
import playIcons from "../../assets/Play.png"
import bannerImages from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className="container mx-auto flex justify-between items-center  mt-5 mb-5">
      <div className="">
        <span>New: AI-Powered Tools Available</span>
        <h1 className="text-5xl font-bold mt-5 mb-4">
          Supercharge Your <br />
          <span className="text-primary">Digital Workflow</span>
        </h1>
        <p className="text-sm mb-6">
          Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-2">
          <button className="btn btn-primary rounded-full">
            Explore Products
          </button>
          <button className="flex btn btn-primary btn-outline rounded-full">
            <img src={playIcons} alt="Play Icon" />
            Watch Demo
          </button>
        </div>
      </div>
      <div>
        <img src={bannerImages} alt="" />
      </div>
    </div>
  );
};

export default Banner;
