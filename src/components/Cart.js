import React from 'react';
import CategoryList from './CategoryList';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className='m-4 p-4'>
           <h1 className='font-bold text-center text-xl'>Cart</h1>
           { (cartItems.length === 0) ? (<h1 className='text-center'>Cart is empty, please add items from the menu.</h1>):   (<div className='w-6/12 m-auto'>
            <CategoryList menuItems={cartItems}/>
            <button className='bg-black text-white rounded-lg float-right p-2'
            onClick={handleClearCart}>Clear Cart</button>
           </div>)}
          
        </div>
        
    );
}

export default Cart;
