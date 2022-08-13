import { Link } from 'react-router-dom';

import './BurgerMenu.css';

function BurgerMenu() {
    return (
        <div className="burger-menu">
            <div className="grid-conteiner">
                <div className="burger-menu-title">
                    <h1>
                        Burger Menu
                    </h1>

                </div>
                <div className="burgers-information">
                    
                    <div className="grid-row">
                        <img src="pictures/burger-pictures/double-burger.jpg" alt="burger" />
                        <div className='grid-burger'>
                            <h4>
                                Double Burger
                            </h4>
                            <h6>
                                $7.50
                            </h6>
                            <Link to='/'>add</Link>
                            <Link to='/'>details</Link>

                        </div>
                    </div>

                    <div className="grid-row">
                        <img src="pictures/burger-pictures/farm-burger.jpg" alt="burger" />
                        <div className='grid-burger'>
                            <h4>
                                Ultimate Burger
                            </h4>
                            <h6>
                                $10.50
                            </h6>
                            <Link to='/'>add</Link>
                            <Link to='/'>details</Link>

                        </div>
                    </div>

                    <div className="grid-row">

                        <img src="pictures/burger-pictures/bacon-burger.jpg" alt="burger" />
                        <div className='grid-burger'>
                            <h4>
                                Bacon Burger
                            </h4>
                            <h6>
                                $8.50
                            </h6>
                            <Link to='/'>add</Link>
                            <Link to='/'>details</Link>

                        </div>
                    </div>

                    <div className="grid-row">

                        <img src="pictures/burger-pictures/black-burger.jpg" alt="burger" />
                        <div className='grid-burger'>
                            <h4>
                                Black Burger
                            </h4>
                            <h6>
                                $9.50
                            </h6>
                            <Link to='/'>add</Link>
                            <Link to='/'>details</Link>

                        </div>
                    </div>

                    <div className="grid-row">
                        <img src="pictures/burger-pictures/monster-burger.jpg" alt="burger" />
                        <div className='grid-burger'>
                            <h4>
                                King Burger
                            </h4>
                            <h6>
                                $11.50
                            </h6>
                            <Link to='/'>add</Link>
                            <Link to='/'>details</Link>

                        </div>
                    </div>

                    <div className="grid-row">
                        <img src="pictures/burger-pictures/ofer.jpg" alt="burger" />
                        <div className='grid-burger'>
                            <h4>
                                Special Offer
                            </h4>
                            <h6>
                                $15.50
                            </h6>
                            <Link to='/'>add</Link>
                            <Link to='/'>details</Link>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;