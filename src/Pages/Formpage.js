import React, {useState} from 'react';
import './FormpageStyle.css';
import {useNavigate} from 'react-router-dom';

const FormPage = (props) => {

    const [enteredText,setEnteredText] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const [enteredNumber,setEnteredNumber] = useState('');

    let navigateToInfo = useNavigate('');

    const textEventhandler = (event) => {
        //console.log("text changed");
        //console.log(event);
        setEnteredText(event.target.value);
    };

    const dateEventhandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const numberEventhandler = (event) => {
        setEnteredNumber(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const writtenData = {
            text: enteredText,
            date: enteredDate,
            number: enteredNumber
        };

        console.log(writtenData);

        setEnteredText('');
        setEnteredNumber('');
        setEnteredDate('');

        props.setFormData(writtenData);

        navigateToInfo("/Infopage");

    };

    return (
    <form onSubmit={submitHandler} className="form_style">
        <div className="form_controls">
            <div className="form_control">
                <label> Some text </label>
                <input type='text' placeholder="text" value={enteredText} onChange={textEventhandler}/>
            </div>
            <div className="form_control">
                <label> Date </label>
                <input type='date' min="2022-07-13" max="2023-01-01" value={enteredDate} onChange={dateEventhandler}/>
            </div>
            <div className="form_control">
                <label> Some numbers </label>
                <input type='number' placeholder="numbers" min="0.1" step="0.1" value={enteredNumber} onChange={numberEventhandler}/>
            </div>
            <button className='form_button' type='submit' > Click me </button>
            <div className="displayed_text">
                <div>{enteredText}</div>
                <div>{enteredDate}</div>
                <div>{enteredNumber}</div>
            </div>
        </div>
    </form>
    );
}

export default FormPage;