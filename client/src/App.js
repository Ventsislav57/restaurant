import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './components/context/AuthContext'

import Navbar from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BurgerMenu from './components/Menu/BurgerMenu';
import Menu from './components/Menu/Menu';

function App() {
    const [auth, setAuth] = useState({});

    const userHandler = (authData) => {
        setAuth(authData);
    };

    return (
        <AuthContext.Provider value={{ user: auth, userHandler }}>

            <div className="menu">
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/burger-menu' element={<BurgerMenu />} />

                </Routes>

            </div>
        </AuthContext.Provider>
    );
};

export default App;