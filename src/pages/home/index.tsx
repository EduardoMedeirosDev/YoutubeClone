import ShortsComponent from "../../components/ShortsComponent";
import VideoComponent from "../../components/videoComponent";
import { Body, CategoriesContainer, Category, ShortsContainer, VideoContainer, ShortsTitleIcon, ShortsTitle, ShortsTitleContainer, Dividers } from "./styles";
import ShortsIcon from '../../assets/youtube-shorts.png'

const categories = [
    {
    name: 'Tudo',
    link: '/home', 
    id: '1'
},
    {
    name: 'Jogos',
    link: '/games', 
    id: '2'
},
    {
    name: 'Mixes',
    link: '/mixes', 
    id: '3'
},
    {
    name:'Músicas',
    link: '/musics',
    id: '4'
},

    {name: 'Ao vivo',
    link: '/onlive', 
    id: '5'
},
    {
    name: 'Comédia',
    link: '',
    id: '6'
},
    {
    name: 'Aulas',
    link: '/learn', 
    id: '7'
},
    {
    name: 'Enviados Recentemente',
    link: '',
    id: '8'
},
    {
    name: 'Novidades para você',
    link: '',
    id: '9'
},
    {
    name: 'Animação',
    link: '',
    id: '10'
},
    {
    name: 'Notícias',
    link: '/news', 
    id: '11'
},
    {
    name: 'Podcast',
    link: '',
    id: '12'
},
    {
    name: 'Esportes',
    link: '/sports', 
    id: '13'
},
    {
    name: 'Suspenses',
    link: '',
    id: '14'
},
    {name:
     'Séries',
    link: '',
    id: '15'
},
    {
    name: 'Filmes',
    link: '',
    id: '16'
},  
    {
    name: 'MasterCheft Brasil',
    link: '',
    id: '17'
},
]

export const videos = [
    {
    image: 'https://i.ytimg.com/vi/LHZoIqtTf0w/maxresdefault.jpg',
    title: 'O QUE OS GURUS NÃO QUEREM MESMO QUE VOCÊ DESCUBRA - EP. 1626',
    channel: 'Cade a Chave?',
    views: '332 mil Visualizações',
    time: '4 meses',
    likes: '39,1 mil Curtidas',
    id: '1',
},
    {
    image: 'https://i.ytimg.com/vi/LHZoIqtTf0w/maxresdefault.jpg',
    title: 'O QUE OS GURUS NÃO QUEREM MESMO QUE VOCÊ DESCUBRA - EP. 1626',
    channel: 'Cade a Chave?',
    views: '332 mil Visualizações',
    time: '4 meses',
    likes: '39,1 mil Curtidas',
    id: '2',
},
    {
    image: 'https://i.ytimg.com/vi/LHZoIqtTf0w/maxresdefault.jpg',
    title: 'O QUE OS GURUS NÃO QUEREM MESMO QUE VOCÊ DESCUBRA - EP. 1626',
    channel: 'Cade a Chave?',
    views: '332 mil Visualizações',
    time: '4 meses',
    likes: '39,1 mil Curtidas',
    id: '3',
},
    {
    image: 'https://i.ytimg.com/vi/LHZoIqtTf0w/maxresdefault.jpg',
    title: 'O QUE OS GURUS NÃO QUEREM MESMO QUE VOCÊ DESCUBRA - EP. 1626',
    channel: 'Cade a Chave?',
    views: '332 mil Visualizações',
    time: '4 meses',
    likes: '39,1 mil Curtidas',
    id: '4',
},
    {
    image: 'https://i.ytimg.com/vi/LHZoIqtTf0w/maxresdefault.jpg',
    title: 'O QUE OS GURUS NÃO QUEREM MESMO QUE VOCÊ DESCUBRA - EP. 1626',
    channel: 'Cade a Chave?',
    views: '332 mil Visualizações',
    time: '4 meses',
    likes: '39,1 mil Curtidas',
    id: '5',
},
    {
    image: 'https://i.ytimg.com/vi/LHZoIqtTf0w/maxresdefault.jpg',
    title: 'O QUE OS GURUS NÃO QUEREM MESMO QUE VOCÊ DESCUBRA - EP. 1626',
    channel: 'Cade a Chave?',
    views: '332 mil Visualizações',
    time: '4 meses',
    likes: '39,1 mil Curtidas',
    id: '6',
},
    {
    image: 'https://i.ytimg.com/vi/LHZoIqtTf0w/maxresdefault.jpg',
    title: 'O QUE OS GURUS NÃO QUEREM MESMO QUE VOCÊ DESCUBRA - EP. 1626',
    channel: 'Cade a Chave?',
    views: '332 mil Visualizações',
    time: '4 meses',
    likes: '39,1 mil Curtidas',
    id: '7',
},
]

const shorts = [
    {
    image: 'https://i.ytimg.com/vi/Za1H9XFnvIg/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB9DlsEWK0wb18VItT9zi0-HqJogA',
    title: 'Crispy accordion potatoes 🥔😋',
    views: '20M',
    id: '1',
},
    {
    image: 'https://i.ytimg.com/vi/Za1H9XFnvIg/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB9DlsEWK0wb18VItT9zi0-HqJogA',
    title: 'Crispy accordion potatoes 🥔😋',
    views: '20M',
    id: '2',
},
    {
    image: 'https://i.ytimg.com/vi/Za1H9XFnvIg/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB9DlsEWK0wb18VItT9zi0-HqJogA',
    title: 'Crispy accordion potatoes 🥔😋',
    views: '20M',
    id: '3',
},
    {
    image: 'https://i.ytimg.com/vi/Za1H9XFnvIg/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB9DlsEWK0wb18VItT9zi0-HqJogA',
    title: 'Crispy accordion potatoes 🥔😋',
    views: '20M',
    id: '4',
},
    {
    image: 'https://i.ytimg.com/vi/Za1H9XFnvIg/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB9DlsEWK0wb18VItT9zi0-HqJogA',
    title: 'Crispy accordion potatoes 🥔😋',
    views: '20M',
    id: '5',
},
    {
    image: 'https://i.ytimg.com/vi/Za1H9XFnvIg/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB9DlsEWK0wb18VItT9zi0-HqJogA',
    title: 'Crispy accordion potatoes 🥔😋',
    views: '20M',
    id: '6',
},
    {
    image: 'https://i.ytimg.com/vi/Za1H9XFnvIg/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB9DlsEWK0wb18VItT9zi0-HqJogA',
    title: 'Crispy accordion potatoes 🥔😋',
    views: '20M',
    id: '7',
},
    {
    image: 'https://i.ytimg.com/vi/Za1H9XFnvIg/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB9DlsEWK0wb18VItT9zi0-HqJogA',
    title: 'Crispy accordion potatoes 🥔😋',
    views: '20M',
    id: '8',
},
    {
    image: 'https://i.ytimg.com/vi/Za1H9XFnvIg/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB9DlsEWK0wb18VItT9zi0-HqJogA',
    title: 'Crispy accordion potatoes 🥔😋',
    views: '20M',
    id: '9',
},
    {
    image: 'https://i.ytimg.com/vi/Za1H9XFnvIg/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB9DlsEWK0wb18VItT9zi0-HqJogA',
    title: 'Crispy accordion potatoes 🥔😋',
    views: '20M',
    id: '10',
},
]

interface IProps {
    openMenu: boolean
}

function Home({ openMenu }: IProps) {

    return (
        <div>
        <Body openMenu={openMenu}>
             <CategoriesContainer openMenu={openMenu}>
                {categories.map((category) => (
                    <Category key={category.id}>
                        {category.name}
                    </Category>
                ))}
            </CategoriesContainer> 
            <VideoContainer openMenu={openMenu}>
                {videos.map((video) => (
                    <VideoComponent key={video.id} video={video}/>
                ))}
            </VideoContainer>     
            <Dividers />
            <ShortsTitleContainer>
                <ShortsTitleIcon src={ShortsIcon}/>
                <ShortsTitle>Shorts</ShortsTitle>
            </ShortsTitleContainer>
            <ShortsContainer openMenu={openMenu}>
                {shorts.map((short) => (
                    <ShortsComponent key={short.id} short={short}>
                        {short}
                    </ShortsComponent>
                ))}
            </ShortsContainer>
        </Body>
        </div>
    )
}

export default Home;