import './CartStyle.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {useSelector, useDispatch} from 'react-redux';
import {itemsSelector, totalAmountSelector} from "../../store/Cart";
import {removeItemFromCart, addItemInCart} from '../../store/Cart';

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

    const dispatch = useDispatch();

    const handleOrder = () => {
        console.log("ordering");
    };

    const addItemInCartHandler = (itemId) => {
        dispatch(addItemInCart({
                id: itemId
            })
        );
    };

    const removeItemFromCartHandler = (itemId) => {
        dispatch(removeItemFromCart(itemId));
    };

    return(
        <Modal open onClose={props.onClose} >
            <Box sx={style} className="cart_text">
                <div className="cart_items_details" >
                    <ul className="displayed_items">
                    {storeItems ? storeItems.map((item) => {
                        return (
                        <div key={item.id}>
                            <li className="item_param">
                                { item.name + " "}
                                { item.quantity + " "}
                                { item.price * item.quantity }
                                <button onClick={() => addItemInCartHandler(item.id) } className="plus">+</button>
                                <button onClick={() => removeItemFromCartHandler(item.id) } className="minus">-</button>
                            </li>
                        </div>
                    )})
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