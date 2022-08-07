import styles from './Login.module.css';

import { Link } from 'react-router-dom';

function Login() {
    return (
        <div id='login-form' className={styles["login-page"]}>
            <div className={styles["form-box"]}>
                <div className={styles["box-information"]}>Log In</div>

                <form id='login' className={styles["input-group-login"]}>
                    <input type='text' className={styles["input-field"]} placeholder='Enter your email address...' />
                    <input type='password' className={styles["input-field"]} placeholder='Enter your password...' />
                    <div className={styles["conteiner-register"]}>
                        <div className={styles["register-redirect"]}>
                            Don't have a account?
                        </div>
                        <div className={styles["have-account"]}>
                            <Link to='/register'>Create an account</Link>
                        </div>
                    </div>
                    <Link to='/'>Log in</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;