import React from 'react';
import CategoryList from './CategoryList';
import { useState } from 'react';

const RestaurantCategory = (props) => {
    const {data, showItems, showIndex} = props;

    const handleClick = () => {
        showIndex();
    }
    
    return (
        <div className='w-6/12 bg-gray-100 my-4 p-2 shadow-lg rounded-lg'>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span className='font-bold text-xl'>{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>

            {showItems && <CategoryList menuItems={data.itemCards} /> }
        </div>
    );
}

export default RestaurantCategory;
