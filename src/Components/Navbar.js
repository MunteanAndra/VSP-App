import './NavbarStyle.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import CartContext from '../store/CartContext';

const Navbar = (props) => {

    const cartCtx = useContext(CartContext);

    let navigateToLogIn = useNavigate('');
    let navigateToHome = useNavigate();
    let navigateToProfile = useNavigate();
    let navigateToCart = useNavigate();

    const clickHandlerLogin = () => {
        navigateToLogIn('/Login');
    }

    const clickHandlerCart = () => {
        navigateToCart('/Cart');
    }

    const clickHandlerHome = () => {
        navigateToHome('/Home');
    };

    const clickHandlerProfile = () => {
        navigateToProfile('/Profile');
    }

    const CustomButton = styled(Button)(({ theme }) => ({
      marginLeft: '1000px',
      color: theme.palette.getContrastText(deepOrange[500]),
    }));

    const numberCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + +item.amount;
    },0);

    function HomeIcon(props) {
      return (
        <SvgIcon {...props}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
      );
    }

    return (
        <div className='navbar'>
            <div className='navbar_items'> Real Life Sciences </div>
            <CustomButton type="submit" variant="outlined" onClick={clickHandlerLogin}> Log in </CustomButton>
            <Badge badgeContent={numberCartItems} color="warning">
                <ShoppingCartIcon onClick={props.onShowCart} className="cart"/>
            </Badge>
            <HomeIcon className="home" onClick={clickHandlerHome}/>
            <Avatar className="avatar" sx={{ bggcolor: deepOrange[500], width: 36, height: 36 }} onClick={clickHandlerProfile}> AM </Avatar>
        </div>
    );
}

export default Navbar;
