import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import PriceCart from "./components/pricecart/PriceCart";
import Card from "./components/products/Card";
import Products from "./components/products/Products";
import Rating from "./components/rating/Rating";
import StartStep from "./components/startstep/StartStep";
import Workflow from "./components/workflow/Workflow";

const getPricingData = async () => {
  const res = await fetch("/PricingData.json");
  return res.json();
};
const pricingDataPromise = getPricingData();

function App() {
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="">
      <Navbar carts={carts} />
      <Banner />
      <Rating />

      <div className="container mx-auto pt-6 pb-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
          <p className="text-sm text-gray-500">
            Choose from our curated collection of premium digital products
            designed
            <br />
            to boost your productivity and creativity.
          </p>

          <div className="tabs tabs-box items-center justify-center gap-2 bg-transparent border-none">
            <input
              type="radio"
              name="my_tabs_1"
              className={`tab btn rounded-full w-32 border-2 transition-all ${
                activeTab === "Products"
                  ? "bg-linear-to-r from-[#5039F7] to-[#9416FB] text-white border-transparent" // Active Style
                  : "btn-outline border-[#5039F7] text-[#5039F7] bg-transparent" // Inactive (Outline) Style
              }`}
              aria-label="Products"
              onClick={() => handleTabChange("Products")}
              defaultChecked
            />
            <input
              type="radio"
              name="my_tabs_1"
              className={`tab btn rounded-full w-32 border-2 transition-all ${
                activeTab === "Cart"
                  ? "bg-linear-to-r from-[#5039F7] to-[#9416FB] text-white border-transparent" // Active Style
                  : "btn-outline border-[#5039F7] text-[#5039F7] bg-transparent" // Inactive (Outline) Style
              }`}
              aria-label={`Cart (${carts.length})`}
              onClick={() => handleTabChange("Cart")}
            />
          </div>
        </div>
      </div>

      {activeTab === "Products" && (
        <Products
          pricingDataPromise={pricingDataPromise}
          carts={carts}
          setCarts={setCarts}
        />
      )}
      {activeTab === "Cart" && <Card carts={carts} setCarts={setCarts} />}
      <StartStep />
      <PriceCart />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
