import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
    return (
        <header>
            <div className="navbar">
                <div className="logo-title"><Link to="/">Hong Kong</Link></div>

                <div className="navbar-links">
                    <ul>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/order">order</Link></li>
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;