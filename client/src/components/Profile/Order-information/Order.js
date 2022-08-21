import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { OrderContext } from '../../../context/OrderContext';
import { AuthContext } from '../../../context/AuthContext';
import { createOrder } from '../../../services/orderService';
import OrderItem from './OrderItem/OrderItem'


import styles from './Order.module.css';

function OrderInformation() {

    const [errors, setErrors] = useState({});
    let { order, removeOrder } = useContext(OrderContext);
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();


    const createHandler = () => {

        createOrder(order, user._id)
            .then((result) => {
                removeOrder();
                navigate('/');
            })
            .catch((error) => {
                setErrors(state => ({
                    ...state,
                    error: error.message
                }))
            })
    }


    return (
        <div className={styles["profile-conteiner"]}>
            <div className={styles["box"]}>

                <h1 className={styles['componets-title']}>
                    Your order
                </h1>

                {errors.error &&
                    <div className={styles['error']}>
                        <p>{errors.error}</p>
                    </div>
                }

                {order.length > 0
                    ? order.map(x => <OrderItem key={x._id} order={x} />)
                    : null
                }

                {order.length > 0
                    ? <button onClick={createHandler} className={styles['button-create']}>Make order</button>
                    : null
                }

                <div className={styles['buttons']}>
                    <NavLink className={({ isActive }) => isActive ? styles['actiove-button'] : styles['togle-button']} to='/profile'>
                        Profile
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles['actiove-button'] : styles['togle-button']} to='/order'>
                        Order
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles['actiove-button'] : styles['togle-button']} to='/reservation'>
                        Reservation
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default OrderInformation;