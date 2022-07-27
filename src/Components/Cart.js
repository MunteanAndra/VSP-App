import './CartStyle.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {useState} from 'react';

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

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOrder = () => {
        console.log("ordering");
    };

    return(
        <Modal open={handleOpen} onClose={handleClose} >
            <Box sx={style} className="cart_text">
                <div className="amount">
                    <div> Total Amount </div>
                    <div> 36.75 </div>
                </div>
                <div className="actions">
                    <button onClick={handleOrder} > Order </button>
                    <button onClick={props.onClose} > Close cart </button>
                </div>
            </Box>
        </Modal>

    );
}

export default Cart;