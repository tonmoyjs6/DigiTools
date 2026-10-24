import React from "react";

const CartCard = ({cProduct,handleRemove}) => {
   
  return (

    <div>
    
      <div className="card w-full bg-base-100 card-xs shadow-sm">
        <div className="card-body">
         <div className="flex ">
             <img src={cProduct.icon} alt="pic" srcset="" />

          <h2 className="ml-4 font-bold text-2xl">
            {cProduct.name}
          </h2>
          

          
         </div>

         <div className="flex flex-col text-2xl">
            price:${cProduct.price}
          </div>
          <div className="justify-end card-actions ">
            <button className="btn btn-error mb-20" onClick={()=>handleRemove(cProduct)}>Remove</button>
          </div>
        </div>
       
      </div>
     
     
    </div>
  );
};

export default CartCard;
