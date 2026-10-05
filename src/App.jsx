

import "./App.css";
import Compnay from "./components/Company/Compnay";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PremiumTools from "./components/PremiumTools/PremiumTools";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";


const productsPromise=fetch("/public/product.json")
.then(res=>res.json())


function App() {


  return <div >

  <Navbar></Navbar>
  <Hero></Hero>
  <Compnay></Compnay>
  <PremiumTools></PremiumTools>
  <Products productsPromise={productsPromise}></Products>
  <Testimonials></Testimonials>




 

  
  </div>;
}

export default App;
