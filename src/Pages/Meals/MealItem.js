import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './MealItemStyle.css';
import CartContext from '../../store/CartContext';
import { useContext } from 'react';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addItem = () => {
        const item = {
            id: props.id,
            price: props.price,
            amount: document.getElementById('amount_' + props.id).value
        };
        cartCtx.addItem(item);
    }

    return(
        <li className="meal">
            <Card className="card_meal">
                <h3 className="meal_name"> {props.name} </h3>
                <div className="meal_description"> {props.description} </div>
                <div className="meal_price"> {price} </div>
                <input id={'amount_' + props.id} type="number" min="1" max='5' step='1' defaultValue='1'></input>
                <button onClick={addItem} className="button8"> Add </button>
            </Card>
        </li>
    );
};

export default MealItem;