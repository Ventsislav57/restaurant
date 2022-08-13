import { Link } from 'react-router-dom';

function BurgerItem() {
    return (

        <div className="grid-row">
            <img src="pictures/burger-pictures/double-burger.jpg" alt="burger" />
            <div className='grid-burger'>
                <h4>
                    Double Burger
                </h4>
                <h6>
                    $7.50
                </h6>
                <Link to='/'>add</Link>
                <Link to='/'>details</Link>

            </div>
        </div>
    );
};

export default BurgerItem;