import React, { useState } from 'react';
import './GoalsStyle.css';

const Goals = (props) => {

   const[enteredValue, setEnteredValue] = useState('');
   const[currentValue, setCurrentValue] = useState('');
   const[checked, setChecked] = useState('');

   const goalInputHandler = (event) => {
    setEnteredValue(event.target.value);
   }

   const submitHandlerGoals = (event) => {
    event.preventDefault();
    setEnteredValue('');
    setCurrentValue(enteredValue);

   }

   const changeHandler = (event) => {
    setChecked(!checked);
   }

    return(
        <form className="goals" onSubmit={submitHandlerGoals}>
            <input className="input_goal" type='text' onChange={goalInputHandler} placeholder="your goal here"/>
            <div>
                 { checked && < input className="optional_input" type="text" placeholder="optional text" />  }
            </div>
            <div>
                <input className="checkbox_style" type="checkbox" checked={checked} onChange={changeHandler}/>
                <button className="button_goal" type='submit'> Add goal </button>
            </div>
            <div> {currentValue} </div>
        </form>
    );
}

export default Goals;