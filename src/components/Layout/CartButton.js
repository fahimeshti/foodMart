import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../store/cart-context';
import classes from './CartButton.module.css'

const CartButton = (props) => {
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const NumOfCartItems = cartCtx.items.reduce((initialNum, item) => {
        return initialNum + item.amount
    },0)
    return (
        <div className={classes.cartButton} onClick={props.onClick}>
           
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className={classes.badge}>{NumOfCartItems}</span>
            <span className={classes.totalAmount}>{totalAmount}</span>
        </div>
    );
};

export default CartButton;