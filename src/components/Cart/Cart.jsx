import React from 'react';
import CartCard from '../CartCard/CartCard';

const Cart = ({selproducts,handleProceed,total,handleRemove}) => {
    return (
        <div className="max-w-[1200px] mx-auto mt-10">
            {
                selproducts.map(cProduct=><CartCard key={cProduct.id} handleRemove={handleRemove} cProduct={cProduct}></CartCard>)
            }



                <div className='flex justify-center items-center gap-40'>
                    <div>
                     <span className="font-extrabold text-2xl"> Total:${total}</span>
                </div>
                <div className='text-center' onClick={()=>handleProceed(true)}>
                     <button className="btn btn-secondary">Proceed To Checkout</button>
                </div>
                </div>
                
            
        </div>
    );
};

export default Cart;