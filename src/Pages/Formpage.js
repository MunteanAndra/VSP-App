import React from 'react';
import './FormpageStyle.css';

const FormPage = () => {

    const textEventhandler = (event) => {
        console.log("text changed");
        console.log(event);
        console.log(event.target.value);
    }

    const dateEventhandler = (event) => {
        console.log("date changed");
        console.log(event);
    }

    const numberEventhandler = (event) => {
        console.log("number changed");
        console.log(event);
    }

    return (
        <div className="form" >
            <div className="form_controls">
                <div className="form_control">
                    <label>Some text</label>
                    <input type='text' onChange={textEventhandler}/>
                </div>
                <div className="form_control">
                    <label>Date</label>
                    <input type='date' min="2022-07-13" max="2023-01-01" onChange={dateEventhandler}/>
                </div>
                <div className="form_control">
                    <label>Some numbers</label>
                    <input type='number' min="0.1" step="0.1" onChange={numberEventhandler}/>
                </div>
            </div>
        </div>
    );
}

export default FormPage;