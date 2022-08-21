import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../context/AuthContext';
import userService from '../../services/userService';
import OrderItem from './OrderItem/OrderItem';

import styles from './OrderInformation.module.css';

function CreatedOrder() {

    const [errors, setErrors] = useState({});
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    
    useEffect(() => {
        userService.getOne(user._id)
            .then((result) => {
                setOrders(result);
            })
            .catch((error) => {
                setErrors(state => ({
                    ...state,
                    error: error.message
                }))
            })
    }, [user._id]);


    return (
        <div className={styles["profile-conteiner"]}>
            <div className={styles["box"]}>

                <h1>
                    Orders
                </h1>

                {errors.error &&
                    <div className={styles['error']}>
                        <p>{errors.error}</p>
                    </div>
                }

                {orders.orders?.length > 0
                    ? orders.orders.map(x => <OrderItem key={orders} orders={x} />)
                    : <h1>No have order</h1>
                }
                {/* <button>
                Details
            </button> */}

            </div>
        </div>
    );
};

export default CreatedOrder;