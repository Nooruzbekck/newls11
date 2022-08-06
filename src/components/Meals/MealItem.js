import classes from './MealsItem.module.css'

export const MealsItem = ({name, description, price:propPrice}) => {
    const price = `${propPrice.toFixed(2)}`

    return (
        <li className={classes.meal} >
            <div>
                <h3>{name}</h3>
                <p className={classes.description}>{description}</p>
                <div className={classes.price}>{price}</div>
            </div>
        </li>
    )
}