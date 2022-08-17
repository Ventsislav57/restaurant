import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import './Header.css'


function Navbar() {

    const { user } = useContext(AuthContext);


    return (
        <header>
            <div className="navbar">
                <div className="logo-title"><Link to="/">Hong Kong</Link></div>

                <div className="navbar-links">
                    <ul>
                        {user?.email && <span>Welcome, {user?.email}!</span>}
                        <li><Link to="/menu">Menu</Link></li>

                        {user?.email
                            ?
                            <>
                                <li><Link to="/profile">profile</Link></li>
                                <li><Link to="/logout">Logout</Link></li>
                            </>
                            : <li><Link to="/login">Log in</Link></li>
                        }
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </header >
    );
};

export default Navbar;