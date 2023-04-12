import { useContext } from 'react'
import { 
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    } from './styles'
import HamburguerIcon from '../../assets/hamburger.png'
import Logo from '../../assets/youtube-logo.png'
import SearchIcon from '../../assets/search.png'
import MicIcon from '../../assets/microfone-recorder.png'
import VideoIcon from '../../assets/video.png'
import NotificationIcon from '../../assets/sino.png'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../contexts/userContext'
import DropdownMenu from '../dropdownMenu'

interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void,
}

function Header({ openMenu, setOpenMenu }: IProps){
    const { login } = useContext(userContext)

    const navigate = useNavigate();

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img
                    style={{ cursor: 'pointer', width: '100px'}}
                    alt=''
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder='Pesquisar'/>
                </SearchInputContainer>

                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon}/>
                </SearchButton>
                
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon}/>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon}/>
                </ButtonContainer>

                <ButtonContainer margin='0 10px 0 10px'>
                    <ButtonIcon alt="" src={NotificationIcon}/>
                </ButtonContainer>
                    {login? 
                       <DropdownMenu />                      

                        :

                        <ButtonContainer margin='0 0 0 10px' onClick={() => navigate('/login')}>Login</ButtonContainer>
                    }
            </HeaderButton>
        </Container>
    )
}

export default Header;