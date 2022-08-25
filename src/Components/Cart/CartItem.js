import './CartStyle.css';
import React from "react";
import {removeItemFromCart, updateItemQuantity} from "../../store/Cart";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

const CartItem = (props) => {

    const dispatch = useDispatch();
    const [addedQuantity, setAddedQuantity] = useState(props.item.quantity);

    useEffect(() => {
        if( addedQuantity === '') {
            return;
        }
        dispatch(updateItemQuantity({
            id: props.item.id,
            quantity: addedQuantity
        }));
    },[addedQuantity, dispatch]);

    const handleAddedQuantity = (event) => {
        const value = event.target.value;
        if ((+value && +value >= 0) || value === ''){
            setAddedQuantity(value);
        }
    }

    const increaseQuantityInCart = () => setAddedQuantity(addedQuantity + 1);

    const decreaseQuantityInCart = () => {
        if (addedQuantity > 0) {
            setAddedQuantity(addedQuantity - 1);
        }
    }

    const handleQuantityOnBlur = (event) => {
        if(event.target.value === ''){
            setAddedQuantity(props.item.quantity);
        }
    }

    const handlerRemoveItem = () => {
        dispatch(removeItemFromCart(props.item.id));
    }

    return(
        <tr>
            <td>{ props.item.name + " "}</td>
            <td>{ (props.item.price * props.item.quantity).toFixed(2) }</td>
            <td style={{paddingLeft: 70}}>
                <button onClick={decreaseQuantityInCart} className="minus">-</button>
                <input id={'quantity_' + props.id} style={{ width: 40}} type="text" value={addedQuantity}
                       onChange={handleAddedQuantity} onBlur={handleQuantityOnBlur}></input>
                <button onClick={increaseQuantityInCart} className="plus">+</button>
                <IconButton aria-label="delete" color="error" onClick={handlerRemoveItem}>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    );
};

export default CartItem;