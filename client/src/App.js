import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { AuthProvider } from './context/AuthContext';

import Navbar from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Logout from './components/Auth/Logout/Logout';
import BurgerMenu from './components/Menu/Burger/BurgerMenu';
import Menu from './components/Menu/Menu';
import BurgerDetails from './components/Menu/Burger/BurgerDetails';
import PizzaMenu from './components/Menu/Pizza/PizzaMenu';
import Reservation from './components/Reservation/Reservation';
import PrivateRoute from './components/common/PrivateRoute';
import Profile from './components/Profile/Profile-information/Profile';

function App() {

    return (
        <AuthProvider>

            <div className="menu">

                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={
                        <PrivateRoute>
                            <Logout />
                        </PrivateRoute>
                    } />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/reservation' element={
                        <PrivateRoute>
                            <Reservation />
                        </PrivateRoute>
                    } />
                    <Route path='/burger-menu' element={
                        <Suspense fallback={<span>Loading....</span>}>
                            <BurgerMenu />
                        </Suspense>
                    } />
                    <Route path='/burger/details/:burgerId' element={<BurgerDetails />} />
                    <Route path='/pizza-menu' element={<PizzaMenu />} />
                    <Route path='/profile' element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    } />

                </Routes>

            </div>

        </AuthProvider>
    );
};

export default App;