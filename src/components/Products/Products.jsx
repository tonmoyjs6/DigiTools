import React, { use } from 'react';
import Product from '../Product/Product';

const Products = ({productsPromise,handleProdcut}) => {
    const products=use(productsPromise)
    
    return (
        <div className='grid grid-cols-3 mt-10 gap-5'>
            {
                products.map(product=><Product product={product} handleProdcut={handleProdcut} ></Product>)
            }
        </div>
    );
};

export default Products;