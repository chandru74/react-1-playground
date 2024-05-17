import { LOGO_URL } from "../utils/constants";

export const HeaderLayout =() => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}/>
            </div>
            <div className='nav-items-list'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default HeaderLayout;