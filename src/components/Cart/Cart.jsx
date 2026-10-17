import React from 'react';
import CartCard from '../CartCard/CartCard';

const Cart = ({selproducts,handleProceed}) => {
    return (
        <div className="max-w-[1200px] mx-auto mt-10">
            {
                selproducts.map(cProduct=><CartCard key={cProduct.id} cProduct={cProduct}></CartCard>)
            }

            
                <div className='text-center' onClick={()=>handleProceed(true)}>
                     <button className="btn btn-secondary">Proceed To Checkout</button>
                </div>
            
        </div>
    );
};

export default Cart;