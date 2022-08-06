import mealsImage from '../img/meals.jpeg'
import classes from './Header.module.css'

export const Header = () => {
    return (
     <>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt='food'/>
    </div>
    </>
    )
}