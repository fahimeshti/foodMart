import React, { useRef, useState } from 'react';
import classes from './MealForm.module.css'
import Input from '../../UI/Input';

const MealForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()

    const submitHandler = (e)=> {
        e.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount

        if (
            enteredAmount.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false)
            return
        } else {
            setAmountIsValid(true)
        }
        props.onAddtoCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef}
            label="Amount" 
            input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
            }}/>
            <button>+ Add</button>
            {/* <button>+</button> */}
            {/* <button>-</button> */}
            {!amountIsValid && <p>Please Enter a valid amount (1-5).</p>}
        </form>
    );
};

export default MealForm;