import './NavbarStyle.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';

const Navbar = () => {

    let navigateToLogIn = useNavigate('');

    const clickHandlerLogin = () => {
        navigateToLogIn('/Login');
    }

    const CustomButton = styled(Button)(({ theme }) => ({
      marginLeft: '1150px',
      color: theme.palette.getContrastText(deepOrange[500]),
    }));

    return (
        <div className='navbar'>
            <div className='navbar_items'> <b>Real</b> Life Sciences </div>
            <CustomButton variant="outlined" onClick={clickHandlerLogin}> Log in </CustomButton>
        </div>
    );
}

export default Navbar;
