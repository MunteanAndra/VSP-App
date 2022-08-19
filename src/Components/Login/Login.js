import './LoginStyle.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useReducer} from 'react';
import Alert from '@mui/material/Alert';
import {useDispatch} from "react-redux";
import { authActions } from '../../store/Auth';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@')};
    }
    return { value: '', isValid: false};
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6};
    }
    return { value: '', isValid: false};
};

const Login = () => {

    const dispatch = useDispatch();

    let navigateToLogin = useNavigate('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [confirm,setConfirm] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',          //initialState
        isValid: null,     //initialFn
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null,
    });

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect ( () => {
        const identifier = setTimeout(() => {
            console.log('Checking form validity');
            setConfirm(
               emailIsValid && passwordIsValid
            );
        },500);

        return () => {
            console.log('CLEANUP');
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const changeHandlerEmail = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

        setEnteredEmail(event.target.value);
    }

    const changeHandlerPassword = (event) => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

        setEnteredPassword(event.target.value);
    }

    const submitHandlerLogin = (event) => {

        event.preventDefault();
        if(emailState.value.trim().length === 0 || !emailState.value.includes('@') || passwordState.value.trim().length < 6)
        {
            setConfirm(!confirm);
            return;
        }
        navigateToLogin("/Home");

        dispatch(authActions.login(confirm));
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