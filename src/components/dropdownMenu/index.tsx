import React, { useState, useContext } from 'react';
import { userContext } from '../../contexts/userContext'
import './styles.css'
import LocationIcon  from '../../assets/globe.png'
import KeyboardIcon  from '../../assets/keyboard.png'
import LanguageIcon  from '../../assets/language.png'
import SignOutIcon  from '../../assets/signout.png'
import RestrictModeIcon  from '../../assets/restrict-mode.png'
import SignaturesIcon  from '../../assets/signatures.png'
import ThemeIcon  from '../../assets/theme.png'
import SwitchAccountIcon  from '../../assets/switch-account.png'
import UserDataIcon  from '../../assets/user-data.png'
import YoutubeStudioIcon  from '../../assets/youtube-studio.png'
import UserIcon  from '../../assets/user.png'
import ConfigIcon from '../../assets/configuration.png'
import HelpIcon from '../../assets/help.png'
import FeedbackIcon from '../../assets/feedback.png'
import RightArrowIcon from '../../assets/right-arrow.png'
import { useNavigate } from 'react-router-dom'

const dropdownitems = [
        {
            name: 'Seu Canal',
            link: '/channel', 
            leftIcon: UserIcon, 
            DividersHidden: true, 
            id: '1',
            rightIcon: '',
        },
        {
            name: 'Youtube Studio',
            link: '', 
            leftIcon: YoutubeStudioIcon, 
            DividersHidden: true, 
            id: '2',
            rightIcon: '',
        },
        {
            name: 'Alternar Conta',
            link: '', 
            leftIcon: SwitchAccountIcon, 
            DividersHidden: true, 
            id: '3',
            rightIcon: RightArrowIcon,
        },
        {
            name: 'Sair',
            link: '/logOut', 
            leftIcon: SignOutIcon, 
            DividersHidden: false, 
            id: '4',
            rightIcon: '',
        },
        {
            name: 'Compras e Assinaturas',
            link: '', 
            leftIcon: SignaturesIcon, 
            DividersHidden: true, 
            id: '5',
            rightIcon: '',
        },
        {
            name: 'Seus dados no Youtube',
            link: '', 
            leftIcon: UserDataIcon, 
            DividersHidden: false, 
            id: '6',
            rightIcon: '',
        },
        {
            name: 'Aparência',
            link: '', 
            leftIcon: ThemeIcon, 
            DividersHidden: true, 
            id: '7',
            rightIcon: RightArrowIcon,
        },
        {
            name: 'Language',
            link: '', 
            leftIcon: LanguageIcon, 
            DividersHidden: true, 
            id: '8',
            rightIcon: RightArrowIcon,
        },
        {
            name: 'Modo restrito',
            link: '', 
            leftIcon: RestrictModeIcon, 
            DividersHidden: true, 
            id: '',
            rightIcon: RightArrowIcon,
        },
        {
            name: 'Local',
            link: '', 
            leftIcon: LocationIcon, 
            DividersHidden: true, 
            id: '9',
            rightIcon: RightArrowIcon,
        },
        {
            name: 'Atalhos do Teclado',
            link: '', 
            leftIcon: KeyboardIcon, 
            DividersHidden: false, 
            id: '10',
            rightIcon: '',
        },
        {
            name: 'Configurações',
            link: '/configurations', 
            leftIcon: ConfigIcon, 
            DividersHidden: false, 
            id: '11',
            rightIcon: '',
        },
        {
            name: 'Ajuda',
            link: '', 
            leftIcon: HelpIcon, 
            DividersHidden: true, 
            id: '12',
            rightIcon: '',
        },
        {
            name: 'Feedback',
            link: '', 
            leftIcon: FeedbackIcon, 
            DividersHidden: true, 
            id: '13',
            rightIcon: '',
        },
    ]

function DropdownMenu() {

    const { user } = useContext(userContext)
  
    const userName: string = user["name"];
  
    return (
        <NavItem icon={userName.charAt(0).toUpperCase()}>
            <DropdownMenuA />
        </NavItem>
    );
}

function DropdownMenuA() {
   
    function DropdownItem() {
        const navigate = useNavigate();

        return (
            <div>
            {dropdownitems.map((item) => (
                <div key={item.id}>
                    <a  href='#' className='menu-item' onClick={() => navigate(item.link)}>
                        <img className="icon-button icon-button-dropdown" src={item.leftIcon}></img>
                        {item.name}
                        <img className="icon-right" src={item.rightIcon} hidden={!item.rightIcon}></img>
                    </a>
                    <div className='dividers' hidden={item.DividersHidden}></div>
                </div>
            ))}
            
        </div>
    )}  

    const { user } = useContext(userContext)
    const userName: string = user["name"];

    return (
        <div className='dropdown'> 
            <div className='active-account-container'>
                <span className="icon-button icon-button-header">
                    {userName.charAt(0).toUpperCase()}
                </span>
                <span className='active-account-name'>{userName.charAt(0).toUpperCase() + userName.slice(1)}</span>
            </div>
            <div className='dividers'></div>
            <DropdownItem />          
        </div>
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