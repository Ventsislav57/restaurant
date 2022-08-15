import { Link } from 'react-router-dom';


import styles from './Menu.module.css';

function Menu() {
    return (
        <div className={styles["menu-layot"]}>
            <div className={styles["menu-layot-row"]}>
                <div className={styles["pizza"]}>
                    <div className={styles["pizza-info"]}>
                        <p>Neque viverra justo nec ultrices dui sapien eget mi. Enim ut sem viverra aliquet eget sit. Nam at lectus urna duis convallis convallis tellus id interdum. Varius quam quisque id diam vel.</p>
                        <Link to="/pizza-menu"><img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YHtjmUczfzQdy_DCno_ehQHaFS%26pid%3DApi&f=1' alt="broke"/></Link>
                    </div>
                </div>
                <div className={styles["taco"]}>
                    <div className={styles["taco-info"]}>
                    <img src="//images03.nicepage.com/c461c07a441a5d220e8feb1a/ab03c60950dc569e87869d8a/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg" alt="broke"/>
                    </div>
                </div>
                <div className={styles["burger"]}>
                    <div className={styles["burger-info"]}>
                        <Link to="/burger-menu"><img src="//images03.nicepage.com/c461c07a441a5d220e8feb1a/df671a0076c05458a713f064/delicious-beef-burgers-wooden-board_23-2148290634.jpg" alt="broke"/></Link>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore voluptates dolore impedit laudantium et rem vero, placeat veniam nesciunt dolores dolor delectus molestiae rerum, soluta atque officiis adipisci aut!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;