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
        debugger
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
                <input type="text" className="input1" placeholder="email" onChange={changeHandlerEmail}/>
                <input type="text" className="input2" placeholder="password" onChange={changeHandlerPassword}/>
                <button type="submit" className="button1" > Login </button>
            </form>

        </div>

    );

}

export default Login;