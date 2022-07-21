import './NavbarStyle.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';

const Navbar = () => {

    let navigateToLogIn = useNavigate('');
    let navigateToHome = useNavigate();

    const clickHandlerLogin = () => {
        navigateToLogIn('/Login');
    }

    const clickHandlerHome = () => {
        navigateToHome('/Home');
    };

    const CustomButton = styled(Button)(({ theme }) => ({
      marginLeft: '1100px',
      color: theme.palette.getContrastText(deepOrange[500]),
    }));

    function HomeIcon(props) {
      return (
        <SvgIcon {...props}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
      );
    }

    return (
        <div className='navbar'>
            <div className='navbar_items'> <b>Real</b> Life Sciences </div>
            <CustomButton type="submit" variant="outlined" onClick={clickHandlerLogin}> Log in </CustomButton>
            <HomeIcon className="home" onClick={clickHandlerHome}/>
        </div>
    );
}

export default Navbar;
