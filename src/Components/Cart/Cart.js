import './CartStyle.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import {itemsSelector, totalAmountSelector} from "../../store/Cart";

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

    const storeItems = useSelector(state => itemsSelector(state) );
    const storeTotalAmount = useSelector(state => totalAmountSelector(state) );
    const handleOrder = () => {
        console.log("ordering");
    };

    return(
        <Modal open onClose={props.onClose} >
            <Box sx={style} className="cart_text">
                <div className="cart_items_details" >
                    <ul className="displayed_items">
                    {storeItems ? storeItems.map((item) => (
                        <div key={item.id}>
                            <li className="item_param">
                                { item.name + " "}
                                { item.amount + " "}
                                { item.price }
                                <button className="plus">+</button>
                                <button className="minus">-</button>
                            </li>
                        </div>
                    ))
                    :
                    <div>No items added to cart</div>}
                </ul>
                </div>
                <div className="amount">
                    <div> Total Amount </div>
                    <div> { storeTotalAmount && `$${storeTotalAmount.toFixed(2)}`} </div>
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