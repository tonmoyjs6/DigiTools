import React from 'react';

const Compnay = () => {
    return (
        <div className=' flex justify-evenly bg-blue-600 mt-10 h-[150px]'>
            <div className='mt-5'>
                <h1 className='text-white font-extrabold text-6xl'>50K+</h1>
                <p className='text-white text-3xl'>Active Users</p>
            </div>

            <div className='mt-5 font-extrabold '>
                <h1 className='text-white text-6xl'>200+</h1>
                <p className='text-white text-3xl'>Premium Tools</p>
            </div>

            <div className='mt-5'>
                <h1 className='text-white font-extrabold text-6xl'>4.9</h1>
                <p className='text-white text-3xl'>Rating</p>
            </div>
        </div>
    );
};

export default Compnay;