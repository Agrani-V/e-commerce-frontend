import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className = "navbar__logo">
                <h2>Products</h2>
            </div>
            
            {/*links*/}
            <ul className="main__links">
                <li>
                    <Link to="/favourites">
                    {/*icon */}
                    Favourites
                    <span className = "cartlogo__badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/add-new-product"> {/*add new product*/}
                    Add New Product
                    </Link>
                </li>
            </ul>
            {/*hamburger menu*/}
            <div className="hamburger__menu">
            <div></div>
            <div></div>
            <div></div>
            </div>
        </nav>
    )
}

export default Navbar