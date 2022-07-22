import './LoginStyle.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Alert from '@mui/material/Alert';

const Login = () => {

    let navigateToLogin = useNavigate('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [confirm,setConfirm] = useState(false);

    const changeHandlerEmail = (event) => {
        setEnteredEmail(event.target.value);
    }

    const changeHandlerPassword = (event) => {
        setEnteredPassword(event.target.value);
    }

    const submitHandlerLogin = (event) => {

        event.preventDefault();
        if(enteredEmail.trim().length === 0 || !enteredEmail.includes('@') || enteredPassword.trim().length < 6)
        {
            setConfirm(!confirm);
            return;
        }
        navigateToLogin("/Home");
    }

    return(
        <div className="login">
            <form className="login_form" onSubmit={submitHandlerLogin}>
                <input type="email" id="email" className="input1" placeholder="email" onChange={changeHandlerEmail}/>
                <input type="password" id="password" className="input2" placeholder="password" onChange={changeHandlerPassword}/>
                <button type="submit" className="button1" > Login </button>
            </form>
            { confirm && <Alert severity="warning" className="alert_form"> Your email must contain '@' and your password should be at least 6 characters long </Alert> }
        </div>

    );

}

export default Login;