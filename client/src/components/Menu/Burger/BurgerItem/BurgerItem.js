import { Link } from 'react-router-dom';

function BurgerItem({
    burger
}){
    return (
        <div className="grid-row">
            <img src={burger.image} alt="burger" />
            <div className='grid-burger'>
                <h4>
                    {burger.title}
                </h4>
                <h6>
                    ${burger.price}
                </h6>
                <Link to='/'>add</Link>
                <Link to='/details/'>details</Link>

            </div>
        </div>
    );
};

export default BurgerItem;