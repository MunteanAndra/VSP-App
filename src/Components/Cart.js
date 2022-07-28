import './CartStyle.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState, useContext } from 'react';
import CartContext from '../store/CartContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const handleOrder = () => {
        console.log("ordering");
    };

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    return(
        <Modal open onClose={props.onClose} >
            <Box sx={style} className="cart_text">
                <div className="amount">
                    <div> Total Amount </div>
                    <div> {totalAmount} </div>
                </div>
                <div className="actions">
                    {hasItems && <button onClick={handleOrder} > Order </button>}
                    <button onClick={props.onClose} > Close cart </button>
                </div>
            </Box>
        </Modal>

    );
}

export default Cart;