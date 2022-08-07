import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BurgerMenu from './components/Menu/BurgerMenu';
import Menu from './components/Menu/Menu';

function App() {
    return (
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
    );
};

export default App;