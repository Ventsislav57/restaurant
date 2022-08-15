import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../../../context/AuthContext';

import styles from '../PizzaMenu.module.css';

function PizzaItem({
    pizza,
}) {

    const { user } = useContext(AuthContext);

    return (
        <div className={styles['grid-row-pizza']}>
            <img src={pizza.image} alt="pizzaPicture" />

            <div className={styles['pizza-information']}>
                <h3 className={styles['pizza-title']}>
                    {pizza.title}
                </h3>
                <p className={styles['pizza-description']}>
                    {pizza.description}
                </p>
                <h6 className={styles['pizza-price']}>
                    ${pizza.price}
                </h6>
                <div className={styles['pizza-button']}>
                    
                    {user.email
                        ? <Link to='/pizza-menu'>Add to cart</Link>
                        : null
                    }

                </div>
            </div>
        </div>
    );
};

export default PizzaItem;