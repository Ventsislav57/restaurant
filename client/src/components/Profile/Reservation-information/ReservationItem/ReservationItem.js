import { Link } from 'react-router-dom';

import styles from './ReservationItem.module.css';

function ReservationItem({
    reservation
}) {

    return (
        <div className={styles['reservaion-item']}>

            <h1>
                {reservation.firstName}
            </h1>
            <h3>
                {reservation.date}
            </h3>
            <h3>
                guests - {reservation.guest}
            </h3>
            <Link className={styles['button']} to={`/reservation/details/${reservation._id}`}>
                Details
            </Link>

        </div>
    );
};

export default ReservationItem;