import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

export const HeaderLayout =() => {

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)
    return (
        <div className='flex justify-between m-4 shadow-lg bg-lime-100'>
            <div className='logo-container'>
                <img className='w-56' src={LOGO_URL}/>
            </div>
            <div className='flex items-center'>
                <ul className="flex">
                    <li className="px-4">
                        <Link to='/'>Home</Link>
                        </li>
                    <li className="px-4">
                        <Link to='/about'>About</Link>
                        </li>
                    <li className="px-4">
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                        </li>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
}

export default HeaderLayout;