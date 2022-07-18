import React, { useState } from 'react';
import './GoalsStyle.css';

const Goals = (props) => {

   const[enteredValue, setEnteredValue] = useState('');
   const[currentValue, setCurrentValue] = useState('');

   const goalInputHandler = (event) => {
    setEnteredValue(event.target.value);
   }

   const submitHandlerGoals = (event) => {
    event.preventDefault();
    setEnteredValue('');
    setCurrentValue(enteredValue);

   }

    return(
        <form className="goals" onSubmit={submitHandlerGoals}>
            <input  className="input_goal" type='text' onChange={goalInputHandler} placeholder="your goal here"/>
            <button className="button_goal" type='submit'> Add goal </button>
            <div> {currentValue} </div>
        </form>
    );
}

export default Goals;