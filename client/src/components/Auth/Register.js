import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom';
import userService from '../../services/userService';

import styles from './Register.module.css';

function Register() {

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

        const { email, firstName, phoneNumber, password, rePassword } = values;

        if (password !== rePassword) {
           throw {message: 'Password don\'t match!'};
        }

        try {
            const user = await userService.create(values);
            navigate('/');
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }
    const changeHandler = (e) => {
        setValue(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }


    return (
        <div id='login-form' className={styles['login-page']}>
            <div className={styles["form-box"]}>
                <div className={styles["box-information"]}>Sing up</div>

                <form onSubmit={submitHandler} className={styles['input-group-register']}>
                    <label htmlFor="email"></label>
                    <input
                        id="email"
                        type='text'
                        className={styles['input-field']}
                        name="email"
                        onChange={changeHandler}
                        value={values.email}
                        placeholder='Enter your email address...'
                    />
                    <label htmlFor="firstName"></label>
                    <input
                        id="firstName"
                        type='text'
                        className={styles['input-field']}
                        name="firstName"
                        placeholder='Enter your first name...'
                        value={values.firstName}
                        onChange={changeHandler}
                    />
                    <label htmlFor="phoneNumber"></label>
                    <input
                        id="phoneNumber"
                        type='text'
                        className={styles['input-field']}
                        name="phoneNumber"
                        placeholder='Enter your phoneNumber...'
                        value={values.phoneNumber}
                        onChange={changeHandler}
                    />
                    <label htmlFor="password"></label>
                    <input
                        id="password"
                        type='password'
                        className={styles['input-field']}
                        name="password"
                        placeholder='Enter your password...'
                        value={values.password}
                        onChange={changeHandler}
                    />
                    <label htmlFor="rePassword"></label>
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
                            <button to='/login'>Log in</button>
                        </div>
                    </div>
                    <button to='/register' type='submit'>Create an account</button>
                </form>
            </div>
        </div>
    );
};

export default Register;