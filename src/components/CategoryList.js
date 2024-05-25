import React from 'react';
import { CDN_URL } from '../utils/constants';

const CategoryList = (props) => {
    const {menuItems} = props;
    return (
        menuItems.map(menuItem => (
            <div key={menuItem.card.info.id} className='flex m-2 justify-between py-4 border-b border-gray-400'>
            <div className='w-9/12 px-4'>
                <span className='font-bold'>{menuItem.card.info.name}- ₹{ (menuItem.card.info.price/100) || (menuItem.card.info.defaultPrice/100) }</span> 
                <p className='text-xs'>{menuItem.card.info.description}</p>
            </div>
            <div className='w-3/12 relative'>
                <img src={CDN_URL + menuItem.card.info.imageId} alt="Menu image" className='w-full'/>
                <button className='px-2 bg-white text-green-500 rounded-lg border-green-500 border relative bottom-6 left-16'>Add+</button>
            </div>
        </div>
        ))
        
    );
}

export default CategoryList;
