import { ChannelImage, Container, ImageBanner, TextContainer, TitleContainer, Title, TextCard } from "./styles";

function VideoComponent({ video }: any){
    // depois devo typar exatamente o img, title etc.
    return (
        <Container>
            <ImageBanner src={video.image} />
            <TitleContainer>
                <ChannelImage>
                    CC
                </ChannelImage>

                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.channel}</TextCard>
                    <TextCard>{video.views} de visualizações - há {video.time}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;