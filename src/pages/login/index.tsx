import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import { Body, LoginButton, LoginInputEmail, LoginInputPassword } from "./styles";

function Login(){   
    const { handleLogin } = useContext(userContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Body>
                Login
            <LoginInputEmail type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <LoginInputPassword type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <LoginButton onClick={() => handleLogin(email, password, navigate('/'))}> Login </LoginButton>
            </Body> 
        </> 
    )
}

export default Login;
