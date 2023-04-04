import { 
    Container,
    MenuItem,
    ButtonIcon,
    Dividers,
    } from './styles'
import YoutubeInscIcon from '../../assets/youtube-insc.png'
import HomeIcon from '../../assets/home.png'
import ShortsIcon from '../../assets/youtube-shorts.png'
import YoutubeLibIcon from '../../assets/youtube-library.png'
import HistoryIcon from '../../assets/history.png'
import YoutubeVideosIcon from '../../assets/youtube-videos.png'
import ClockIcon from '../../assets/clock.png'
import LikeIcon from '../../assets/like.png'
import VideoListIcon from '../../assets/videolist.png'
import InscriptionsIcon from '../../assets/inscriptions.png'
import SearchIcon from '../../assets/search.png'
import TrendingIcon from '../../assets/trending.png'
import ShoppingIcon from '../../assets/shopping.png'
import MusicIcon from '../../assets/music.png'
import MovieIcon from '../../assets/movie.png'
import OnLiveIcon from '../../assets/onlive.png'
import GameIcon from '../../assets/game.png'
import NewsIcon from '../../assets/news.png'
import SportIcon from '../../assets/sports.png'
import LearnIcon from '../../assets/learn.png'
import ConfigurationIcon from '../../assets/configuration.png'
import FlagIcon from '../../assets/flag.png'
import HelpIcon from '../../assets/help.png'
import FeedbackIcon from '../../assets/feedback.png'
import { useNavigate } from 'react-router-dom'

const items = [
        {
        name: 'Início',
        link: '/', 
        img: HomeIcon, 
        DividersHidden: true, 
        hiddenClosed: false,
        id: '1'
    },
        {
        name: 'Shorts',
        link: '/shorts', 
        img: ShortsIcon, 
        DividersHidden: true, 
        hiddenClosed: false,
        id: '2'
    },
        {
        name: 'Inscrições',
        link: '/inscriptions', 
        img: YoutubeInscIcon, 
        DividersHidden: true,  
        hiddenClosed: false,
        id: '3'
    },
        {
        name: 'Biblioteca',
        link: '/library', 
        img: YoutubeLibIcon, 
        DividersHidden: false, 
        hiddenClosed: false,
        id: '4'
    },
        {
        name: 'Histórico',
        link: '/history', 
        img: HistoryIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '5'
    },
        {
        name: 'Seus Vídeos',
        link: '/yourVideos', 
        img: YoutubeVideosIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '6'
    },
        {
        name: 'Assistir mais tarde',
        link: '/watch-later', 
        img: ClockIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '7'
    },
        {
        name: 'Vídeos curtidos',
        link: '/videos-liked', 
        img: LikeIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '8'
    },
        {
        name: 'Playlist',
        link: '/playlist', 
        img: VideoListIcon, 
        DividersHidden: false, 
        hiddenClosed: true,
        id: '9'
    },
        {
        name: 'Inscrições',
        link: '/inscriptions', 
        img: InscriptionsIcon, 
        DividersHidden: false, 
        hiddenClosed: true,
        id: '10'
    },
        {
        name: 'Explorar',
        link: '/explore', 
        img: SearchIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '11'
    },
        {
        name: 'Em Alta',
        link: '/trending', 
        img: TrendingIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '12'
    },
        {
        name: 'Shopping',
        link: '/shopping', 
        img: ShoppingIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '13'
    },
        {
        name: 'Musicas',
        link: '/musics', 
        img: MusicIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '14'
    },
        {
        name: 'Filmes',
        link: '/movies', 
        img: MovieIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '15'
    },
        {
        name: 'Ao Vivo',
        link: '/onlive', 
        img: OnLiveIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '16'
    },
        {
        name: 'Jogos',
        link: '/games', 
        img: GameIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '17'
    },
        {
        name: 'Notícias',
        link: '/news', 
        img: NewsIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '18'
    },
        {
        name: 'Esportes',
        link: '/sports', 
        img: SportIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '19'
    },
        {
        name: 'Aprender',
        link: '/learn', 
        img: LearnIcon, 
        DividersHidden: false, 
        hiddenClosed: true,
        id: '20'
    },
        {
        name: 'Configurações',
        link: '/configuration', 
        img: ConfigurationIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '21'
    },
        {
        name: 'Histórico de denúncias',
        link: '/report-history', 
        img: FlagIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '22'
    },
        {
        name: 'Ajuda',
        link: '/help', 
        img: HelpIcon, 
        DividersHidden: true, 
        hiddenClosed: true,
        id: '23'
    },
        {
        name: 'Enviar Feedback',
        link: '/feedback', 
        img: FeedbackIcon, 
        DividersHidden: false, 
        hiddenClosed: true,
        id: '24'
    },
]

interface IProps {
    openMenu: boolean;
}

function Menu({ openMenu }: IProps ){
    const navigate = useNavigate();

    return (
        <Container openMenu={openMenu}>        
            {items.map((item) => (
                <div key={item.id}>
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                        <ButtonIcon alt="" src={item.img} /> 
                        <span hidden={!openMenu && item.hiddenClosed}>{item.name}</span>                       
                    </MenuItem>    
                    <Dividers hidden={item.DividersHidden} />
                </div>
            ))}    
        </Container>
    )
}

export default Menu;