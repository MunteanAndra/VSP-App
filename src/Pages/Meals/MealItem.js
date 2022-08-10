import React from 'react';
import Card from '@mui/material/Card';
import './MealItemStyle.css';
import CartContext from '../../store/CartContext';
import Alert from '@mui/material/Alert';
import { useState, useContext } from 'react';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    //const price = `$${props.price.toFixed(2)}`;
    const [added, setAdded] = useState(false);

    const addItem = () => {
        const item = {
            id: props.id,
            name: props.name,
            //price: props.price,
            amount: document.getElementById('amount_' + props.id).value
        };
        cartCtx.addItem(item);

        setAdded(!added);
    }

    return(
        <li className="meal">
            <Card className="card_meal">
                <div className="item_text">
                    <h3 className="meal_name"> {props.name} </h3>
                    <div className="meal_description"> {props.description} </div>
                    <div className="meal_price"> </div>
                </div>
                <input id={'amount_' + props.id} type="number" min="1" max='5' step='1' defaultValue='1'></input>
                <button onClick={addItem} className="button8"> Add </button>
                {added && <Alert severity='success'> Meal was added to your cart </Alert> }
            </Card>
        </li>
    );
};

export default MealItem;