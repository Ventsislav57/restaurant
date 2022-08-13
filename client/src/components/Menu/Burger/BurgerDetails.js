// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './BurgerDetails.css'

function BurgerDetails() {
    return (
        <div className='conteiner'>

            <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/c9d623f81f7f5cb6a02150ad/rtrtrt.jpg" alt="bacon-burger" />

            <div className="box-information">

                <h1 className='burger-title'>
                    Mega Burger
                </h1>
                <span className='burger-price'>
                    price:  7.50$
                </span>
               
                <p className='burger-description'>
                    description:  This burger is very good, must be tried!!
                </p>

                <div className='buttons'>
                    <Link to='/edit/:burgerId'>Edit</Link>
                    <button>delete</button>
                </div>
            </div>
        </div>
    );
};

export default BurgerDetails;