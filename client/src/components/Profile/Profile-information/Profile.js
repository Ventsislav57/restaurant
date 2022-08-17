import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';

import styles from './Profile.module.css';

function Profile() {

    const { user } = useContext(AuthContext);

    return (
        <div className={styles["profile-conteiner"]}>
            <div className={styles["box"]}>

                <h1 className={styles['first-name']}>
                    {user.firstName}
                </h1>
                <h3 className={styles['email']}>
                    email: {user.email}
                </h3>
                <h3 className={styles['phonenumber']}>
                    phone number: 0{user.phoneNumber}
                </h3>

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

export default Profile;