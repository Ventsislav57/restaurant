import { Link } from 'react-router-dom';

import styles from './PizzaMenu.module.css';

function PizzaMenu() {
    return (
        <div className={styles['conteiner-pizza']}>

            <div className={styles['title']}>
                <h1>
                    Pizza Menu
                </h1>
                <p >
                    Unique wood fired pizzas or be tempted by our pasta, antipasto, focaccias, salads and Bruschetta dishes. Relax in the friendly ambience as you enjoy the aromas of the wood ovens or sit al fresco and soak up the Mildura sunshine.
                </p>
            </div>

            <div className={styles['grid-conteiner-pizza']}>
                <div className={styles['grid-row-pizza']}>
                    <img src="//images03.nicepage.com/c461c07a441a5d220e8feb1a/910bd281016d57a199450c15/3981417.jpg" alt="pizzaPicture" />

                    <div className={styles['pizza-information']}>
                        <h3 className={styles['pizza-title']}>
                            Original
                        </h3>
                        <p className={styles['pizza-description']}>
                            Tomato sauce, mozzarella & oregano
                        </p>
                        <h6 className={styles['pizza-price']}>
                            $18.00
                        </h6>
                        <div className={styles['pizza-button']}>
                            <Link to='/'>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles['grid-row-pizza']}>
                    <img src="//images03.nicepage.com/c461c07a441a5d220e8feb1a/d087beea5e3b5475974ecfe1/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg" alt="pizzaPicture" />

                    <div className={styles['pizza-information']}>
                        <h3 className={styles['pizza-title']}>
                            Chicken
                        </h3>
                        <p className={styles['pizza-description']}>
                            Tomato sauce, mozzarella, chicken, pineapple* & bbq sauce
                        </p>
                        <h6 className={styles['pizza-price']}>
                            $25.00
                        </h6>
                        <div className={styles['pizza-button']}>
                            <Link to='/'>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles['grid-row-pizza']}>
                    <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/457320aab346570eb0d91acd/sdw.jpg" alt="pizzaPicture" />

                    <div className={styles['pizza-information']}>
                        <h3 className={styles['pizza-title']}>
                            Hawaiian
                        </h3>
                        <p className={styles['pizza-description']}>
                            omato sauce, mozzarella, ham & pineapple
                        </p>
                        <h6 className={styles['pizza-price']}>
                            $16.00
                        </h6>
                        <div className={styles['pizza-button']}>

                            <Link to='/'>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles['grid-row-pizza']}>
                    <img src="//images03.nicepage.com/c461c07a441a5d220e8feb1a/6d842bd1e6e354edb2a8baed/pizza-dark-background-classic-italian-pizza-with-tomatoes-pepper-vegetables-sauce-mozarella-cheese-dark-kitchen-table-copy-space_90380-947.jpg" alt="pizzaPicture" />

                    <div className={styles['pizza-information']}>
                        <h3 className={styles['pizza-title']}>
                            Salami
                        </h3>
                        <p className={styles['pizza-description']}>
                            Tomato sauce, mozzarella & mild salami
                        </p>
                        <h6 className={styles['pizza-price']}>
                            $15.00
                        </h6>
                        <div className={styles['pizza-button']}>

                            <Link to='/'>
                                Add to cart
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PizzaMenu;