import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

export const HeaderLayout =() => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}/>
            </div>
            <div className='nav-items-list'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        </li>
                    <li>
                        <Link to='/about'>About</Link>
                        </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default HeaderLayout;