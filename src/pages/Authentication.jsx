import { useState } from "react";
import "../components/componentsStyles/AuthStyle/auth.css"




const Auth = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log('autenticami');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <p>Email</p>
                    <input type="email" value={email} onChange={handleEmail} placeholder={"Scrivi la tua Email"} />
                </div>

                <div className="inputContainer">
                    <p>Password</p>
                    <input type="password" value={password} onChange={handlePassword} placeholder={"Scrivi la tua Password"} />
                </div>

                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Auth;