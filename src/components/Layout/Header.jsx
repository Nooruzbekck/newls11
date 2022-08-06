import mealsImage from '../../img/photo.jpeg'
import classes from './Header.module.css'
import { HeaderCartButton } from './HeaderCartButton'

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