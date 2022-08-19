import styles from '../OrderInformation.module.css';

function OrderItem({
    orders
}) {
    return (
        <div className={styles['order-information']}>

            {orders?.length > 0
                ? orders.map(x => <h3>{x.title}</h3>)
                : null
            }
            {/* <button className={styles['details-button']}>
                details
            </button> */}
            <br />
        </div>
    );
};

export default OrderItem;