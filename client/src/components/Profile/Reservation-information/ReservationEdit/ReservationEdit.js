import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editReservation, getOneReservation } from '../../../../services/reservationService';


import styles from './Reservation.module.css';


function Reservation() {

    const [errors, setErrors] = useState({});

    const [values, setValue] = useState({
        email: '',
        firstName: '',
        phoneNumber: '',
        guest: '',
        date: ''
    });

    const { reservationId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneReservation(reservationId)
            .then((result) => {
                setValue(result);
            })
            .catch((error) => {
                setErrors(state => ({
                    ...state,
                    error: error.message
                }))
            })
    }, [reservationId])


    const submitHandler = async (e) => {

        e.preventDefault();

        editReservation(reservationId, values)
            .then(() => {
                navigate('/reservation')
            })
            .catch((error) => {
                setErrors(state => ({
                    ...state,
                    error: error.message
                }))
            })
    }
    const changeHandler = (e) => {
        setValue(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));
    }
    return (
        <div id='login-form' className={styles['login-page']}>
            <div className={styles["form-box"]}>
                <div className={styles["box-information"]}>Edit reservation</div>

                {errors.error &&
                <div className={styles['error']}>
                    <p>{errors.error}</p>
                </div>
            }

                <form onSubmit={submitHandler} className={styles['input-group-register']}>
                    <label htmlFor="email"></label>
                    <input
                        id="email"
                        type='text'
                        className={styles['input-field']}
                        name="email"
                        onChange={changeHandler}
                        value={values.email}
                        placeholder='Enter email address...'
                    />
                    <label htmlFor="firstName"></label>
                    <input
                        id="firstName"
                        type='text'
                        className={styles['input-field']}
                        name="firstName"
                        placeholder='Enter first name...'
                        value={values.firstName}
                        onChange={changeHandler}
                    />
                    <label htmlFor="phoneNumber"></label>
                    <input
                        id="phoneNumber"
                        type='text'
                        className={styles['input-field']}
                        name="phoneNumber"
                        placeholder='Enter phoneNumber...'
                        value={values.phoneNumber}
                        onChange={changeHandler}
                    />
                    <label htmlFor="guest"></label>
                    <input
                        id="guest"
                        type='text'
                        className={styles['input-field']}
                        name="guest"
                        placeholder='Enter number of guests...'
                        value={values.guest}
                        onChange={changeHandler}
                    />
                    <label htmlFor="date"></label>
                    <input
                        id="date"
                        type='date'
                        className={styles['input-field']}
                        name="date"
                        placeholder='Enter date...'
                        value={values.date}
                        onChange={changeHandler}
                    />

                    <button type='submit'>Make reservation</button>
                </form>
            </div>
        </div>
    );
};

export default Reservation;