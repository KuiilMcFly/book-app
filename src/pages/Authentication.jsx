import { useState } from "react";
import "../components/componentsStyles/AuthStyle/auth.css"
import MyButton from "../components/MyButton";
import { useDispatch } from "react-redux";
import { auth } from "../store/actions/handleAuth";



const Auth = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignup, setIsSignup] = useState(true);

    const dispatch = useDispatch();
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(auth(email, password, isSignup));
        setEmail("");
        setPassword("");
    }

    const changeMode = (e) => {
        e.preventDefault();
        setIsSignup(!isSignup);
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <p>Email</p>
                    <input type="email" value={email} onChange={handleEmail} placeholder={"Scrivi la tua Email"} autoComplete="username" />
                </div>

                <div className="inputContainer">
                    <p>Password</p>
                    <input type="password" value={password} onChange={handlePassword} placeholder={"Scrivi la tua Password"} autoComplete="current-password" />
                </div>

                <MyButton handleClick={handleSubmit} title={isSignup ? 'Signup' : 'Login' }/>
                <MyButton handleClick={changeMode} title={isSignup ? 'Vai al login' : 'Vai al Signup'}/>
                
            </form>
        </div>
    )
}

export default Auth;