import React, {useContext} from 'react';
import Modal from './Modal'
import CartItem from './CartItem';
import classes from './Cart.module.css'
import CartContext from '../store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const CartItemAddHandler = (item) => {
        cartCtx.addItem(item)
    }
    const CartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    
    
    const cartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map(item => 
        <CartItem 
        key={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price} 
        onAdd={CartItemAddHandler.bind(null, item)} 
        onRemove={CartItemRemoveHandler.bind(null, item.id)} />
        )
    }</ul>
    return (
        <Modal onclose={props.onHideCart}>
            <h2 className={classes.headingCart}>Your Cart</h2>
            {cartItems}
            {!hasItems && <div className={classes.order}>Time to Order something!</div>}
            <div className={classes.total}>
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
        
    );
};

export default Cart;