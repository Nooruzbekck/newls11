import { CartIcon } from '../icons/CartIcon';
import classes from './HeaderCartButton.module.css'

export const HeaderCartButton = ()=> {
    return (
      <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span >Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    );
}