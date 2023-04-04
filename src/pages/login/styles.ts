import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginContainer = styled.div`
    width: 420px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 8px;
    border: 1px solid #c3c3c3;
`;

export const LoginGoogleCard = styled.img`
    padding: 30px 0px 0px 0px;
    height: 30px;
`;

export const LoginTitle = styled.span`
    font-size: 24px;
    font-weight: 500;
`;

export const LoginSubTitle = styled.span`
    font-size: 16px;
`;

export const LoginTextCard = styled.div`
    font-size: 14px;
`;

export const LoginInputEmail = styled.input`
    width: 300px;
    height: 40px;
    margin: 0px 0px 20px 0px;
    border-radius: 8px;
    border: 1px solid #c3c3c3;

    :hover {
        border: 2px solid #1f5c85;
    }
`;

export const LoginInputPassword = styled.input`
    width: 300px;
    height: 40px;
    margin: 0px 0px 20px 0px;
    border-radius: 8px;
    border: 1px solid #c3c3c3;

    :hover {
        border: 2px solid #1f5c85;
    }
`;

export const LoginRegisterContainer = styled.div`
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: space-between;
`;

export const RegisterButton = styled.span`
    padding: 10px 10px 10px 10px;
    border-radius: 8px;
    color: #1c74ec;
    font-weight: 500;

    :hover {
        background-color: #bccce4;
    }
`;

export const LoginButton = styled.button`
    width: 100px;
    height: 40px;
    margin: 0px 0px 20px 0px;
    border-radius: 8px;
    border: none;
    background-color: #1c74ec;
    color: #fff;
    font-weight: 600;

    :hover {
        background-color: #2464a5;
    }
`;