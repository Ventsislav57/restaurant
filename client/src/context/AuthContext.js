import { createContext, useContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    
    const userHandler = (userData) => {
        setAuth(userData);
    };
 
    return (
        <AuthContext.Provider value={{
            user: auth,
            userHandler,

        }}>
            {children}
        </AuthContext.Provider>
    ); 
}
 
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
};