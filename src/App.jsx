

import { useEffect, useState } from "react";
import "./App.css";
import Compnay from "./components/Company/Compnay";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
// import PremiumTools from "./components/PremiumTools/PremiumTools";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Cart from "./components/Cart/Cart";


const productsPromise=fetch("/public/product.json")
.then(res=>res.json())


function App() {


  const [selproducts,setproducts]=useState([])
  const [productShow,setProductShow]=useState(true)
  const [addtocartShow,setAddCart]=useState(false)

  const [afterclick,setClick]=useState([])
  const [val,setVal]=useState([])

  const [totalCartPrice,setTotalCartPrice]=useState(0)

  const handleProdcut=(prod)=>{
    const newproductAdd=[...selproducts,prod]
    // console.log(prod,"handle")
    
    setproducts(newproductAdd)
   
    
  }
  
  const handleBuyNow=(id)=>{
   

  //setClick(id)

  const newClick=[...afterclick,id]
  setClick(newClick)
  

 
    
 
    
    
    

  }

  const handleProceed=(isClick)=>{

    if(isClick){
      setproducts([])
      setClick([])
    }

  }





  const total=selproducts.reduce((ac,curValue)=>ac+curValue.price,0)
  

  const handleRemove=(removeproduct)=>{

    const afterremoveProdcut=selproducts.filter(product=>product!==removeproduct)
    setproducts(afterremoveProdcut)
    
    

  }


  return (
  <>

  <Navbar selproducts={selproducts}></Navbar>
  <Hero></Hero>
  <Compnay></Compnay>
 
   <div className='max-w-[1200px] mx-auto text-center mt-5'>
            <h1 className='font-extrabold text-6xl'>Premium Digital Tools</h1>
            <p className='text-center mt-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity</p>

            <button onClick={()=>setProductShow(true)} className="btn btn-active btn-info mt-5">Products</button>
            <button onClick={()=>{
              setProductShow(false)
           
              }} className="btn btn-active btn-info ml-2 mt-5">Cart({selproducts.length})</button>

   </div>
    {
      productShow?  <Products productsPromise={productsPromise} val={val} handleProdcut={handleProdcut} addtocartShow={addtocartShow} selproducts={selproducts} handleBuyNow={handleBuyNow} afterclick={afterclick}></Products>:<Cart handleProceed={handleProceed} selproducts={selproducts} total={total}  handleRemove={handleRemove}></Cart>
 
    }
  <Testimonials ></Testimonials>


  




 

  
  </>
  );
}

export default App;
