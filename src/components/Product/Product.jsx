import { Check } from "lucide-react";
import React from "react";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm max-w-[1200px] mx-auto ">
        <div className="card-body">
          <div className="flex justify-between">
            <img src={product.icon} alt="" srcset="" />
            <span className="badge badge-xs badge-warning">Best seller</span>
          </div>

          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{product.name}</h2>
          </div>

          <div>
            <p>{product.description}</p>
          </div>

           <div className="flex ">
            <h2 className="text-3xl font-bold">$ {product.price} </h2>
            <p>/month</p>
          </div>

          <div >
              {
                product.features.map((feature,index)=>(
                  <div key={index} className="flex">
                    <Check></Check> <p className="ml-2">{feature}</p>
                  </div>
                ))
              }
          </div>

          <div className="mt-6">
            <button className="btn btn-primary btn-block">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
