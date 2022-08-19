import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../../../context/AuthContext';
import { OrderContext } from '../../../../context/OrderContext';

import styles from '../BurgerMenu.module.css'

function BurgerItem({
    burger
}) {
    const { user } = useContext(AuthContext);
    const { addProduct } = useContext(OrderContext);

    const addClickHandler = () => {
        
        addProduct(burger);
    }

    return (
        <div className={styles["grid-row"]}>
            <img src={burger.image} alt="burger" />
            <div className={styles['grid-burger']}>
                <h4>
                    {burger.title}
                </h4>
                <h6>
                    ${burger.price}
                </h6>

                {user.email
                    ? <button onClick={addClickHandler}>add to cart</button>
                    : null
                }
                <Link to={`/burger/details/${burger._id}`}>details</Link>

            </div>
        </div>
    );
};

export default BurgerItem;