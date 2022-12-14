import { NavLink } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { getOne } from '../../../services/userService';
import { AuthContext } from '../../../context/AuthContext'

import styles from './Reservation.module.css';
import ReservationItem from './ReservationItem/ReservationItem';


function ReservationInformation() {

    const [errors, setErrors] = useState({});
    const [reservations, setReservations] = useState([]);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        getOne(user._id)
            .then((result) => {
                setReservations(result.reservations);
            })
            .catch((error) => {
                setErrors(state => ({
                    ...state,
                    error: error.message
                }))
            })
    }, [user]);


    return (
        <div className={styles["profile-conteiner"]}>
            <div className={styles["box"]}>

                <div className={styles['reservation-box']}>

                    <h1 className={styles['componets-title']}>
                        Your reservation
                    </h1>
                    {errors.error &&
                        <div className={styles['error']}>
                            <p>{errors.error}</p>
                        </div>
                    }
                    <div className={styles['reservation']}>

                        {reservations
                            ? reservations.map(x => <ReservationItem key={x._id} reservation={x} />)
                            : null
                        }
                    </div>

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

export default ReservationInformation;