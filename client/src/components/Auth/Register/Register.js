import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { register } from '../../../services/userService';
import { AuthContext } from '../../../context/AuthContext';

import styles from './Register.module.css';

function Register() {
    const { userLogin } = useContext(AuthContext);

    const [errors, setErrors] = useState({});

    const [values, setValue] = useState({
        email: '',
        firstName: '',
        phoneNumber: '',
        password: '',
        rePassword: ''
    });
    const navigate = useNavigate()


    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const user = await register(values);
            if (!user.message) {
                userLogin(user);
                navigate('/');
            }
        } catch (error) {
            setErrors(state => ({
                ...state,
                error: error.message
            }))
        }
    };

    const changeHandler = (e) => {
        setValue(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));
    }


    return (
        <div id='login-form' className={styles['login-page']}>
            <div className={styles["form-box"]}>
                <div className={styles["box-information"]}>Sing up</div>

                {errors.error &&
                    <div className={styles['error']}>
                        <p>{errors.error}</p>
                    </div>
                }

                <form onSubmit={submitHandler} className={styles['input-group-register']}>
                    <label htmlFor="email" />
                    <input
                        id="email"
                        type='text'
                        className={styles['input-field']}
                        name="email"
                        onChange={changeHandler}
                        value={values.email}
                        placeholder='Enter your email address...'
                    />
                    <label htmlFor="firstName" />
                    <input
                        id="firstName"
                        type='text'
                        className={styles['input-field']}
                        name="firstName"
                        placeholder='Enter your first name...'
                        value={values.firstName}
                        onChange={changeHandler}
                    />
                    <label htmlFor="phoneNumber" />
                    <input
                        id="phoneNumber"
                        type='text'
                        className={styles['input-field']}
                        name="phoneNumber"
                        placeholder='Enter your phoneNumber...'
                        value={values.phoneNumber}
                        onChange={changeHandler}
                    />
                    <label htmlFor="password" />
                    <input
                        id="password"
                        type='password'
                        className={styles['input-field']}
                        name="password"
                        placeholder='Enter your password...'
                        value={values.password}
                        onChange={changeHandler}
                    />
                    {errors.rePassword &&
                        <label htmlFor="rePassword" className={styles['error']}>re-password should be at least 7 characters long!</label>
                    }
                    <input
                        id="rePassword"
                        type='password'
                        className={styles['input-field']}
                        name="rePassword"
                        placeholder='Enter your re-password...'
                        value={values.rePassword}
                        onChange={changeHandler}
                    />
                    <div className={styles['conteiner-register']}>
                        <div className={styles["register-redirect"]}>
                            Already have an account?
                        </div>
                        <div className={styles['have-account']}>
                            <Link to='/login'>Log in</Link>
                        </div>
                    </div>
                    <button type='submit'>Create an account</button>
                </form>
            </div>
        </div>
    );
};

export default Register;