import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './BurgerMenu.css';

import foodService from '../../../services/foodService';
import BurgerItem from './BurgerItem/BurgerItem';

function BurgerMenu() {
    const [burgers, setBurgers] = useState([]);

    useEffect(() => {
        foodService.getAllBurgers()
            .then((result) => setBurgers(result))
            .catch((err) => console.log(err));

    }, [])

    return (
        <div className="burger-menu">
            <div className="grid-conteiner">
                <div className="burger-menu-title">
                    <h1>
                        Burger Menu
                    </h1>
                </div>
                <div className="burgers-information">

                    {burgers
                        ? burgers.map(x => <BurgerItem key={x._id} burger={x} />)
                        : <p>No have burgers!</p>
                    }

                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;

