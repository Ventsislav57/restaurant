import { Link } from 'react-router-dom'

import './Home.css';

function Home() {
    return (
        <div className="content">
            <h1>Visit this super restaurant</h1>
            <p>Best food in city!</p>

            <div className="home-buttons">
                <Link to="/menu"><span></span>оrder online</Link>
                <Link to="/reservation"><span></span>reservation</Link>
            </div>
        </div>
    );
};

export default Home;