import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import Navbar from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Logout from './components/Auth/Logout/Logout';
import BurgerMenu from './components/Menu/BurgerMenu';
import Menu from './components/Menu/Menu';

function App() {

    return (
        <AuthProvider>

            <div className="menu">

                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/burger-menu' element={<BurgerMenu />} />
                </Routes>

            </div>

        </AuthProvider>
    );
};

export default App;