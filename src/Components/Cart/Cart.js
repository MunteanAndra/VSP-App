import './CartStyle.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {useSelector} from 'react-redux';
import {itemsSelector, totalAmountSelector} from "../../store/Cart";
import CartItem from './CartItem';
import React from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Cart = (props) => {

    const storeItems = useSelector(state => itemsSelector(state) );
    const storeTotalAmount = useSelector(state => totalAmountSelector(state) );

    const handleOrder = () => {
        console.log("ordering");
    };

    return(
        <Modal open onClose={props.onClose} >
            <Box sx={style} className="cart_text">
                {
                    storeItems.length ?
                        <table className="displayed_items">
                            <thead>
                                <tr>
                                    <td><b>Meal</b></td>
                                    <td><b>Price</b></td>
                                </tr>
                            </thead>
                            <tbody>
                                {storeItems.map((item) => <CartItem key={item.id} item={item}/>)}
                            </tbody>
                        </table>
                    :
                        <div> Your cart is empty, add something </div>
                }
                <div className="amount">
                    { storeItems.length>0 && <div> Total Amount </div> }
                    <div> { storeItems.length > 0 && storeTotalAmount && `$${storeTotalAmount.toFixed(2)}`} </div>
                </div>
                <div className="actions">
                    { storeItems && storeItems.length > 0 && <button onClick={handleOrder} > Order </button>}
                    <button onClick={props.onClose} > Close cart </button>
                </div>
            </Box>
        </Modal>

    );
}

export default Cart;