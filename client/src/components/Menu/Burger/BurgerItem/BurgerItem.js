import { Link } from 'react-router-dom';

import styles from '../BurgerMenu.module.css'

function BurgerItem({
    burger
}){
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
                <Link to='/'>add to cart</Link>
                <Link to={`/burger/details/${burger._id}`}>details</Link>

            </div>
        </div>
    );
};

export default BurgerItem;