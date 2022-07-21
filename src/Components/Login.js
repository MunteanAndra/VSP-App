import './LoginStyle.css';

const Login = () => {

    return(
        <div className="login">
            <form className="login_form">
                <input type="text" className="input1" placeholder="email"/>
                <input type="text" className="input2" placeholder="password"/>
                <button className="button1"> Login </button>
            </form>
        </div>

    );

}

export default Login;