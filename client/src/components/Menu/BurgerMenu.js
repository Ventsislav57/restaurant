// import { Link } from 'react-router-dom';

import './BurgerMeun.css';

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
                    <div className='current-burger-info1'>
                        <div className='grid-burger1'>
                            <h4>
                                Double Burger
                            </h4>
                            <h6>
                                $7.50
                            </h6>
                            <a href='/'>add</a>
                        </div>
                    </div>

                    <div className='current-burger-info2'>
                        <div className='grid-burger2'>
                            <h4>
                                Ultimate Burger
                            </h4>
                            <h6>
                                $10.50
                            </h6>
                            <a href='/'>add</a>
                        </div>
                    </div>
                    <div className='current-burger-info3'>
                        <div className='grid-burger3'>
                            <h4>
                                Bacon Burger
                            </h4>
                            <h6>
                                $8.50
                            </h6>
                            <a href='/'>add</a>
                        </div>
                    </div>
                    <div className='current-burger-info4'>
                        <div className='grid-burger3'>
                            <h4>
                                Black Burger
                            </h4>
                            <h6>
                                $9.50
                            </h6>
                            <a href='/'>add</a>
                        </div>
                    </div>
                    <div className='current-burger-info5'>
                        <div className='grid-burger3'>
                            <h4>
                                King Burger
                            </h4>
                            <h6>
                                $11.50
                            </h6>
                            <a href='/'>add</a>
                        </div>
                    </div>
                    <div className='current-burger-info6'>
                        <div className='grid-burger3'>

                            <h4>
                                Special Offer
                            </h4>
                            <h6>
                                $15.50
                            </h6>
                            <a href='/'>add</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BurgerMenu;