import { useContext } from 'react';

import { AuthContext } from '../../../../context/AuthContext';
import { OrderContext } from '../../../../context/OrderContext';

import styles from '../PizzaMenu.module.css';

function PizzaItem({
    pizza,
}) {

    const { user } = useContext(AuthContext);
    const { addProduct } = useContext(OrderContext);

    const addClcikHandler = () => {
        addProduct(pizza);
    }

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
                        ? <button onClick={addClcikHandler}>Add to cart</button>
                        : null
                    }

                </div>
            </div>
        </div>
    );
};

export default PizzaItem;