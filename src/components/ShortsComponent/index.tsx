import { ShortsTitle } from "../../pages/home/styles";
import { Container, ImageBanner, Title, TextCard, TitleContainer } from "./styles";

function ShortsComponent({ short }: any){
    return (
        <Container>
            <ImageBanner src={'https://i.ytimg.com/vi/Za1H9XFnvIg/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB9DlsEWK0wb18VItT9zi0-HqJogA'} />
            <TitleContainer>
                <Title>{short.title}</Title>
                <TextCard>{short.views} views</TextCard>
            </TitleContainer>     
        </Container>
 
    )
}

export default ShortsComponent;