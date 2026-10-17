import React, { use } from 'react';
import Product from '../Product/Product';

const Products = ({productsPromise,handleProdcut,addtocartShow,selproducts,handleBuyNow,afterclick,val}) => {
    const products=use(productsPromise)
    
    return (
        <div className='grid grid-cols-3 mt-10 gap-5'>
            {
                products.map(product=><Product product={product} val={val} handleProdcut={handleProdcut}  addtocartShow={addtocartShow} selproducts={selproducts} handleBuyNow={handleBuyNow} afterclick={afterclick}></Product>)
            }
        </div>
    );
};

export default Products;