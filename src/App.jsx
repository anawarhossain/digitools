import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import PriceCart from "./components/pricecart/PriceCart";
import Products from "./components/products/Products";
import Rating from "./components/rating/Rating";
import StartStep from "./components/startstep/StartStep";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Rating />
      <Products />
      <StartStep />
      <PriceCart/>
    </div>
  );
}

export default App;
