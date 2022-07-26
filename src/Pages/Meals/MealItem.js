import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './MealItemStyle.css';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return(
        <li className="meal">
            <Card className="card_meal">
                <h3 className="meal_name"> {props.name} </h3>
                <div className="meal_description"> {props.description} </div>
                <div className="meal_price"> {price} </div>
                <input id={'amount_' + props.id} type="number" min="1" max='5' step='1' defaultValue='1'></input>
                <button className="button8"> Add </button>
            </Card>
        </li>
    );
};

export default MealItem;