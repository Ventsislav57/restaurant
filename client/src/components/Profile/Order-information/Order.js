import { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';

import styles from './Order.module.css';

function OrderInformation() {


    return (
        <div className={styles["profile-conteiner"]}>
            <div className={styles["box"]}>

                <h1 className={styles['first-name']}>
                    Name
                </h1>
                <h3 className={styles['email']}>
                    email: 
                </h3>
                <h3 className={styles['phonenumber']}>
                    phone number: 
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

export default OrderInformation;