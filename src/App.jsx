

import { useState } from "react";
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


  const [selproducts,setproducts]=useState([])

  const handleProdcut=(prod)=>{
    const newproductAdd=[...selproducts,prod]
    setproducts(newproductAdd)
  }


  return (
  <div >

  <Navbar selproducts={selproducts}></Navbar>
  <Hero></Hero>
  <Compnay></Compnay>
  <PremiumTools selproducts={selproducts}></PremiumTools>
  <Products productsPromise={productsPromise} handleProdcut={handleProdcut} ></Products>
  <Testimonials ></Testimonials>




 

  
  </div>
  );
}

export default App;
