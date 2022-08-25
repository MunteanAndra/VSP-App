import './NavbarStyle.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import {useDispatch, useSelector} from "react-redux";
import {totalNumberOfItems} from "../../store/Cart";
import {logout, authSelector} from "../../store/Auth";

const Navbar = (props) => {

    let navigateToLogIn = useNavigate();
    let navigateToHome = useNavigate();
    let navigateToProfile = useNavigate();

    const storeAuth = useSelector( state => authSelector(state));
    const dispatch = useDispatch();

    const clickHandlerLogin = () => {
        navigateToHome('/Home');
    }

    const clickHandlerLogout = () => {
        navigateToLogIn('/Login');
        localStorage.removeItem("token");
        dispatch(logout(false));
    };

    const clickHandlerHome = () => {
        navigateToHome('/Home');
    };

    const clickHandlerProfile = () => {
        navigateToProfile('/Profile');
    }

    const CustomButton1 = styled(Button)(({ theme }) => ({
      marginLeft: '1150px',
      color: theme.palette.getContrastText(deepOrange[500]),
    }));

    const CustomButton2 = styled(Button)(({ theme }) => ({
        marginLeft: '1000px',
        color: theme.palette.getContrastText(deepOrange[500]),
    }));

    const numberCartItems = useSelector( state => totalNumberOfItems(state) );

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
            { !storeAuth && <CustomButton1 type="submit" variant="outlined" onClick={clickHandlerLogin}> Log in </CustomButton1> }
            { storeAuth && <CustomButton2 type="submit" variant="outlined" onClick={clickHandlerLogout}> Log out </CustomButton2> }
            { storeAuth &&
                <Badge badgeContent={numberCartItems} color="warning">
                    <ShoppingCartIcon onClick={props.onShowCart} className="cart"/>
                </Badge> }
            { storeAuth && <HomeIcon className="home" onClick={clickHandlerHome}/> }
            { storeAuth && <Avatar className="avatar" sx={{ bggcolor: deepOrange[500], width: 36, height: 36 }} onClick={clickHandlerProfile}> AM </Avatar> }

        </div>
    );
}

export default Navbar;
