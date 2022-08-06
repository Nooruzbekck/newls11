import mealsImage from '../img/meals.jpeg'
import classes from './Header.module.css'
import { HeaderCartButton } from './Layout/HeaderCartButton'

export const Header = () => {
    return (
      <>
        <header className={classes.header}>
          <h1>React Meals</h1>
          <HeaderCartButton />
        </header>
        <div className={classes["main-image"]}>
          <img src={mealsImage} alt="food" />
        </div>
      </>
    );
}