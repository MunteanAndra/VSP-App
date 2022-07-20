import React, { useState } from 'react';
import './GoalsStyle.css';
import {useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';

const Goals = (props) => {

   let navigateToGoals = useNavigate('');

   const [enteredValue, setEnteredValue] = useState('');
   const [currentValue, setCurrentValue] = useState('');
   const [optionalValue, setOptionalValue] = useState('');
   const [currentOptionalValue, setCurrentOptionalValue] = useState('');
   const [checked, setChecked] = useState('');
   const [show,setShow] = useState(false);

   const goalInputHandler = (event) => {
    setEnteredValue(event.target.value);
   }

   const changeHandler = () => {
    setChecked(!checked);
   }

   const optionalInputHandler = (event) => {
    setOptionalValue(event.target.value);
   }

   const submitHandlerGoals = (event) => {
       event.preventDefault();

       if(enteredValue.trim().length === 0)
       {
            setShow(!show);
            return;
       }

       setEnteredValue('');
       setOptionalValue('');
       setCurrentValue(enteredValue);
       setCurrentOptionalValue(optionalValue);

       props.setFormGoals(enteredValue, optionalValue);

       navigateToGoals("/SeeGoals");
   }

    return(
        <form className="goals" onSubmit={submitHandlerGoals}>
            <input className="input_goal" type='text' value={enteredValue} onChange={goalInputHandler} placeholder="your goal here"/>
            <div>
                 { checked && < input className="optional_input" onChange={optionalInputHandler} type="text" value={optionalValue} placeholder="optional text" />  }
            </div>
            <div>
                <input className="checkbox_style" type="checkbox" checked={checked} onChange={changeHandler}/>
                <button className="button_goal" type='submit'> Add goal </button>
            </div>
            <div> {currentValue} </div>
            <div> {currentOptionalValue} </div>
            <div>
                { show && <Alert severity="warning">Write your goal !</Alert>}
            </div>
        </form>
    );
}

export default Goals;