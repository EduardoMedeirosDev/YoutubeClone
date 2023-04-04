import React, { useState, useContext } from 'react';
import { userContext } from '../../contexts/userContext'
import './styles.css'

function DropdownMenu() {

    const { user, login } = useContext(userContext)
  
    const userName = user["name"];
  
    return (
        <NavItem icon={login? userName.charAt(0).toUpperCase() : null}>
            <DropdownMenuA />
        </NavItem>
    );
}

function DropdownMenuA(props: any) {
   
    function DropdownItem(props: any) {

        return (
        <a href='#' className='menu-item' onClick={props.onClick}>
            <span className="icon-button icon-button-dropdown">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </a>
    )}  

    const { user, login, logOut } = useContext(userContext)
    const userName = user["name"];

    return (
        <div className='dropdown'> 
            <div className='active-account-container'>
                <span className="icon-button icon-button-header">
                    {login? userName.charAt(0).toUpperCase() : null}
                </span>
                <span className='active-account-name'>{userName.charAt(0).toUpperCase() + userName.slice(1)}</span>
            </div>
            <div className='dividers'></div>
            <DropdownItem>Seu Canal</DropdownItem>
            <DropdownItem>Youtube Studio</DropdownItem>
            <DropdownItem>Alternar conta</DropdownItem>
            <DropdownItem onClick={() => logOut()}>Sair</DropdownItem>
            <div className='dividers'></div>
            <DropdownItem>Compras e Assinaturas</DropdownItem>
            <DropdownItem>Seus dados no Youtube</DropdownItem>
            <div className='dividers'></div>
            <DropdownItem>Aparência: claro</DropdownItem>
            <DropdownItem>Idioma: Português</DropdownItem>
            <DropdownItem>Modo restrito: desativado</DropdownItem>
            <DropdownItem>Local: Brasil</DropdownItem>
            <DropdownItem>Atalhos do teclado</DropdownItem>
            <div className='dividers'></div>
            <DropdownItem>Configurações</DropdownItem>
            <div className='dividers'></div>
            <DropdownItem>Ajuda</DropdownItem>
            <DropdownItem>Enviar feedback</DropdownItem>
        </div>
        // transformar em map e adicionar ícones
    );
}

function NavItem(props: any) {

    const [open, setOpen] = useState(false)
    return (
        <li className="nav-item">
            <a href="#" className="icon-button icon-button-header" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    )
}

export default DropdownMenu;