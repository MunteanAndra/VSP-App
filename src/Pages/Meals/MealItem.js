import React from 'react';
import Card from '@mui/material/Card';
import './MealItemStyle.css';
import { useDispatch } from "react-redux";
import { add } from '../../store/Cart';
import {openSnackbar} from "../../store/Snackbar";

const MealItem = (props) => {

    const dispatch = useDispatch();
    const price = `$${props.price.toFixed(2)}`;

    const addItem = () => {
        const item = {
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: +document.getElementById('quantity_' + props.id).value
        };

        dispatch(openSnackbar(item.quantity === 1 ? item.quantity + ' ' + item.name + ' ' + 'meal was added to your cart'
            : item.quantity + ' ' + item.name + ' ' + 'meals were added to your cart'));

        dispatch(add(item));
    };


    return(
        <li className="meal">
            <Card className="card_meal">
                <div className="item_text">
                    <h3 className="meal_name"> {props.name} </h3>
                    <div className="meal_description"> {props.description} </div>
                    <div className="meal_price"> {price} </div>
                </div>
                <input id={'quantity_' + props.id} type="number" min='1' max='50' step='1' defaultValue='1'></input>
                <button onClick={addItem} className="button8"> Add </button>
            </Card>
        </li>
    );
};

export default MealItem;