import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSession from '../../../hooks/useSession';
import { loginUserValidate } from '../../../utils/userUtils';
import './styles/Login.css';

export default function Login() {
    const {verifyLogin} = useSession();
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState({ status: false, msg: '' });
    const [spinnerLogin, setSpinnerLogin] = useState(false);
    const [emailValidator, setEmailValidator] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [loged, setLoged] = useState(false);

    const inputEmail = useRef();
    const inputPassword = useRef();

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (!emailValidator) {
            inputEmail.current.focus();
            return;
        }

        setSpinnerLogin(prevState => !prevState)

        loginUserValidate(inputEmail.current.value, inputPassword.current.value)
            .then(data => {
                if (data.loged) {
                    verifyLogin();
                    navigate('/');
                } else {
                    setErrorMsg({ status: true, msg: data.msg })
                    setEmailValidator(false);
                }
                setSpinnerLogin(prevState => !prevState)
            })

    }

    const validateEmail = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.current.value)) {
            setEmailValidator(true)
            setEmailError(false)
        } else {
            setEmailValidator(false)
            setEmailError(true)
        }
    }

    return (
        <div className="form-login__div">
            {
                spinnerLogin ?
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831' />
                        <p>Starting Session</p>
                    </div>
                    :
                    <form onSubmit={handleSubmit} className="form-login__form">
                        <label htmlFor="email">Email</label>
                        <input id='email' onChange={validateEmail} ref={inputEmail} name='email' type="text" placeholder='Email' />
                        {
                            emailError && <p>This is not an email. [ie:example@example.com]</p>
                        }
                        <label htmlFor="password">Password</label>
                        <input type='password' ref={inputPassword} name='password' id='password' placeholder="*****" />
                        <button>Login</button>
                        {
                            errorMsg.status && <p>{errorMsg.msg}</p>
                        }
                    </form>
            }
        </div>
    )
}