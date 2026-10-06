

import React from 'react';

const PremiumTools = ({selproducts}) => {
    return (
        <div className='max-w-[1200px] mx-auto text-center mt-5'>
            <h1 className='font-extrabold text-6xl'>Premium Digital Tools</h1>
            <p className='text-center mt-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity</p>

            <button className="btn btn-active btn-info mt-5">Products</button>
            <button className="btn btn-active btn-info ml-2 mt-5">Cart({selproducts.length})</button>

        </div>
    );
};

export default PremiumTools;