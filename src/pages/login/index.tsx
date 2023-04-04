import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import { Body, LoginButton, LoginContainer, LoginGoogleCard, LoginInputEmail, LoginInputPassword, LoginRegisterContainer, LoginSubTitle, LoginTextCard, LoginTitle, RegisterButton } from "./styles";
import GoogleIcon from '../../assets/google.png'

function Login(){   
    const { handleLogin } = useContext(userContext);
    const navigate = useNavigate();

    const { login } = useContext(userContext)
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    
    // implementação para redirecionar para a página inicial se o login for concluído
    function handleNavigate() {
        if (login){
            navigate('/')
        };
    }

    useEffect(() => {
        handleNavigate();
    }, [login])

    return (
            <Body>
                <LoginContainer>
                    <LoginGoogleCard src={GoogleIcon}/>
                    <LoginTitle>Fazer Login</LoginTitle>
                    <LoginSubTitle>Prosseguir no Youtube</LoginSubTitle>
                    <LoginInputEmail type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Email"/>
                    <LoginInputPassword type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Senha"/>
                    <LoginRegisterContainer>
                        <RegisterButton>Criar Conta</RegisterButton>
                        <LoginButton onClick={() => handleLogin(email, password)}> Login </LoginButton>
                        </LoginRegisterContainer>
                    
                    <LoginTextCard>
                        Não está no seu computador? <br/>
                        Use uma janela de navegação privada para fazer login.
                        </LoginTextCard>
                </LoginContainer>
            </Body> 
    )
}

export default Login;
