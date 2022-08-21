import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';
import { OrderContext } from '../../../context/OrderContext';

import * as userService from '../../../services/userService';

function Logout() {

    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);
    const { newUser } = useContext(OrderContext);


    useEffect(() => {
        userService.logout(user.accessToken)
            .then(async (response) => {
                if(response.ok) {
                    userLogout();
                    newUser();
                    navigate('/');
                } else {
                    const result = await response.json();
                    console.log(result);
                    navigate('/login');
                }
            })
            .catch(() => {
                navigate('/');
            })
    })

    return null
};

export default Logout;