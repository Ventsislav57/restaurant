import { useEffect, useState } from 'react';
import { Link, NavLink, useParams, useNavigate } from 'react-router-dom';

import { deleteReservation, getOneReservation } from '../../../../services/reservationService';

import styles from './ReservationDetail.module.css';

function ReservationDetail() {

    const [errors, setErrors] = useState({});

    const [reservation, setReservation] = useState({})

    const { reservationId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneReservation(reservationId)
            .then((result) => {
                setReservation(result);
            })
            .catch((error) => {
                setErrors(state => ({
                    ...state,
                    error: error.message
                }))
            })


    }, [reservationId]);

    const reservationDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this reservation?');

        if (confirmation) {
            deleteReservation(reservation._id)
                .then((result) => {})
                .catch((error) => {
                    setErrors(state => ({
                        ...state,
                        error: error.message
                    }))
                })
            navigate('/');
        }
    }

    return (
        <div className={styles["box"]}>

            <div className={styles['details-box']}>

                {errors.error &&
                    <div className={styles['error']}>
                        <p>{errors.error}</p>
                    </div>
                }
                <h2>
                    {reservation.firstName}
                </h2>
                <h2>
                    {reservation.email}
                </h2>
                <h2>
                    0{reservation.phoneNumber}
                </h2>
                <h2>
                    {reservation.date}
                </h2>
                <h2>
                    {reservation.guest}
                </h2>

                <div className={styles['edit-delete-buttons']}>
                    <Link to={`/reservation/edit/${reservationId}`}>
                        Edit
                    </Link>
                    <button onClick={reservationDeleteHandler} className={styles['delete-button']}>
                        Delete
                    </button>

                </div>

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

export default ReservationDetail;