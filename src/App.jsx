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
  return (
    <div>
      <Navbar />
      <Banner />
      <Rating />
      
      <Products pricingDataPromise={pricingDataPromise} />
      <Card/>
      <StartStep />
      <PriceCart />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
