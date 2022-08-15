import { useState, useEffect } from 'react';

import foodService from '../../../services/foodService';
import PizzaItem from './PizzaItem/PizzaItem';

import styles from './PizzaMenu.module.css';

function PizzaMenu() {
    const [pizzas, setPizzas] = useState([]);

    useEffect (() => {
        foodService.getAllPizzas()
            .then((result) => setPizzas(result))
            .catch((err) => console.log(err));
    },[]);

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
            {pizzas
                ? pizzas.map(x => <PizzaItem key={x._id} pizza={x}/>)
                : <p>No have pizzas</p>
            }
                
            </div>
        </div>
    );
};

export default PizzaMenu;