
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Rating from './components/rating/Rating'
import StartStep from './components/startstep/StartStep'

function App() {

  return (
    <div>
      <Navbar/>
      <Banner />
      <Rating />
      <Products />
      <StartStep/>
    </div>
  )
}

export default App
