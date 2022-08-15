import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext';

const PrivateRoute = ({
    children
}) => {
    const { user } = useAuthContext();
    if (!user.email) {
        return <Navigate to="/login" replace />
    }

    return children ? children : <Outlet />  
};

export default PrivateRoute;
