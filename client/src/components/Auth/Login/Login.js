import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Login.module.css';

import { login } from '../../../services/userService';
import { AuthContext } from '../../../context/AuthContext';

function Login() {
    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({});
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();


        try {
            const user = await login(values);
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

    }
    

    const changeHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div onSubmit={submitHandler} id='login-form' className={styles["login-page"]}>
            <div className={styles["form-box"]}>
                <div className={styles["box-information"]}>Log In</div>

                {errors.error &&
                    <div className={styles['error']}>
                        <p>{errors.error}</p>
                    </div>
                }

                <form id='login' className={styles["input-group-login"]}>
                    <label htmlFor="email"></label>
                    <input
                        type='text'
                        className={styles["input-field"]}
                        name='email'
                        placeholder='Enter your email address...'
                        onChange={changeHandler}
                    />
                    <label htmlFor="password"></label>
                    <input
                        type='password'
                        className={styles["input-field"]}
                        name='password'
                        placeholder='Enter your password...'
                        onChange={changeHandler}

                    />
                    <div className={styles["conteiner-register"]}>
                        <div className={styles["register-redirect"]}>
                            Don't have a account?
                        </div>
                        <div className={styles["have-account"]}>
                            <Link to='/register'>Create an account</Link>
                        </div>
                    </div>
                    <button type='submit'>Log in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;