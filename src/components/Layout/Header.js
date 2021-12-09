import React from 'react';
import classes from './Header.module.css'
import foodImage from '../../assets/food.jpg'
import plateFoodImage from '../../assets/plate.png'
import CartButton from './CartButton';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Food Mart</h1>
                <CartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img className={classes.bg} src={foodImage} alt='A table with a bowl of food!' />
                <img className={classes.foodPlate} src={plateFoodImage} alt='A bowl of food!' />
                <h1>The Foods and groceries you need<br />
                 all in one place.</h1>
            </div>
        </>
    );
};

export default Header;