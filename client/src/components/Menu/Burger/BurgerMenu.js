import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import foodService from '../../../services/foodService';
import BurgerItem from './BurgerItem/BurgerItem';

import styles from  './BurgerMenu.module.css';

function BurgerMenu() {
    const [burgers, setBurgers] = useState([]);

    
    useEffect(() => {
        foodService.getAllBurgers()
            .then(result => setBurgers(result))
            .catch((err) => console.log(err));

    }, [])
    
    return (
        <div className={styles["burger-menu"]}>
            <div className={styles["grid-conteiner"]}>
                <div className={styles["burger-menu-title"]}>
                    <h1>
                        Burger Menu
                    </h1>
                </div>
                <div className={styles["burgers-information"]}>

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