import { Link } from 'react-router-dom';

import styles from './Register.module.css';

function Register() {


    const onClickHandler = (e) => {
        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.log(data);
    }

    return (
        <div id='login-form' className={styles['login-page']}>
            <div className={styles["form-box"]}>
                <div className={styles["box-information"]}>Sing up</div>

                <form onClick={onClickHandler} id='login' className={styles['input-group-register']} >
                    <label htmlFor="email"></label>
                    <input id="email" type='text' className={styles['input-field']} name="email" placeholder='Enter your email address...' defaultValue='' />
                    <label htmlFor="firstName"></label>
                    <input id="firstName" type='text' className={styles['input-field']} name="firstName" placeholder='Enter your first name...' defaultValue='' />
                    <label htmlFor="lastName"></label>
                    <input id="lastName" type='text' className={styles['input-field']} name="lastName" placeholder='Enter your last name...' defaultValue='' />
                    <label htmlFor="phonenumber"></label>
                    <input id="phonenumber" type='text' className={styles['input-field']} name="phonenumber" placeholder='Enter your phonenumber...' defaultValue='' />
                    <label htmlFor="password"></label>
                    <input id="password" type='text' className={styles['input-field']} name="password" placeholder='Enter your password...' defaultValue='' />
                    <label htmlFor="rePasssword"></label>
                    <input id="rePasssword" type='password' className={styles['input-field']} name="rePasssword" placeholder='Enter your re-password...' defaultValue='' />
                    <div className={styles['conteiner-register']}>
                        <div className={styles["register-redirect"]}>
                            Already have an account?
                        </div>
                        <div className={styles['have-account']}>
                            <Link to='/login'>Log in</Link>
                        </div>
                    </div>
                    <Link to='/register' >Create an account</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;