import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './BurgerDetails.module.css';

import foodService from '../../../services/foodService';

function BurgerDetails() {

    const [burger, setBurger] = useState({});
    const { burgerId } = useParams();

    useEffect(() => {
        foodService.getOneBurger(burgerId)
            .then((result) => setBurger(result))
            .catch((err) => console.log(err));
    }, [burgerId]);


    return (
        <div className={styles['conteiner']}>

            <img src={burger.image} alt="bacon-burger" />

            <div className={styles["box-information"]}>

                <h1 className={styles['burger-title']}>
                    {burger.title}
                </h1>
                <span className={styles['burger-price']}>
                    price: {burger.price}$
                </span>

                <p className={styles['burger-description']}>
                    description:  {burger.description}
                </p>

                {/* <div className={styles['buttons']}>
                    <Link to='/edit/:burgerId'>Edit</Link>
                    <button>delete</button>
                </div> */}
            </div>
        </div>
    );
};

export default BurgerDetails;