import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';


import { AuthContext } from '../../context/AuthContext';
import { createReservation } from '../../services/reservationService';


import styles from './Reservation.module.css';


function Reservation() {


    const [values, setValue] = useState({
        email: '',
        firstName: '',
        phoneNumber: '',
        guest: '',
        date: ''
    });

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});


    const submitHandler = async (e) => {

        e.preventDefault();
        createReservation({ ...values, owner: user._id })
            .then((result) => {
                if (!result.message) {
                    navigate('/');
                }else {
                    setErrors(state => ({
                        ...state,
                        error: result.message
                    }))
                }
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
                <div className={styles["box-information"]}>Make reservation</div>

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