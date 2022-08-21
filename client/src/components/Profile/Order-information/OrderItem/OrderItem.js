
import { useContext } from 'react';
import { OrderContext } from '../../../../context/OrderContext';

import styles from '../Order.module.css';

function OrderItem({
    order,
}) {

    const { removeProduct } = useContext(OrderContext);

    const deleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this reservation?');

        if (confirmation) {
            removeProduct(order)
        }
    };

    return (
        <div className={styles['order-information']}>
            <p>
                {order.title}
            </p>
            <button onClick={deleteHandler} className={styles['delete-product']} >
                Delete
            </button>

        </div>
    );
};

export default OrderItem;