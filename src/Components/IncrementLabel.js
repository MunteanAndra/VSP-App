import { useState } from 'react';

const IncrementLabel = () => {

    const [count, setCount] = useState(0);
    const [label, setLabel] = useState('0');

    const handleIncrement = () => {
        let newCount = count + 1;

        if( newCount % 3 === 0 && newCount % 5 === 0 ){
            setLabel('fizzbuzz');
        } else if( newCount % 3 === 0) {
            setLabel('fizz');
        } else if( newCount % 5 === 0) {
            setLabel('buzz');
        } else {
            setLabel('' + newCount);
        }

        setCount(newCount);
    }

    return(
        <div style={{marginLeft: 20, marginTop: 20}}>
            <span style={{color: 'black'}}> {label} </span>
            <button onClick={handleIncrement}> Increment </button>
            <span style={{color: 'black'}}> Fizz, buzz or fizzbuzz? </span>
        </div>
    );
}

export default IncrementLabel;