import styled from 'styled-components'

export const Body = styled.div<{ openMenu: boolean }>`
    display: inline-block;
    padding: 30px 0px 0px 30px;
    box-sizing: border-box;
    margin-left: ${({ openMenu }) => openMenu? 0 : '-20px'};

    @media (max-width: 900px) {
        width: 90%;
    }

    @media (max-width: 300px) {
        width: 50%;
    }
`;

export const VideoContainer = styled.div<{ openMenu: boolean }>`
    max-width: ${({ openMenu }) => openMenu? '98%' : '96%'};
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu? 'repeat(4 , 1fr)' : 'repeat(5 , 1fr)'};
    column-gap: 25px;
    row-gap: 50px;
    margin: ${({ openMenu }) => openMenu? '20px 0px 30px 20px' : '20px 0px 30px 30px'};

    @media (max-width: 900px) {
        max-width: 100%;
        grid-template-columns: ${({ openMenu }) => openMenu? 'repeat(3 , 1fr)' : 'repeat(4 , 1fr)'};
    }

    @media (max-width: 300px) {
        grid-template-columns: repeat(1 , 1fr);
    }
`;

export const CategoriesContainer = styled.div<{ openMenu: boolean }>`
    width: 100%;
    max-width: ${({ openMenu }) => openMenu? '1600px' : '1800px'};
    height: 50px;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    will-change: auto;
    overflow-x: hidden;
`;

export const Category = styled.span`
    background-color: #c5cae9;
    width: 100%;
    height: 25px;
    padding: 4px 9px 4px 9px;
    margin-right: 8px;
    margin-left: 8px;
    border-radius: 8px;

    :hover {
        background-color: #909090;
    }
`;

export const ShortsContainer = styled.div<{ openMenu: boolean }>`
    width: 98%;
    max-width: ${({ openMenu }) => openMenu? '1600px' : '1800px'};
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu? 'repeat(8 , 1fr)' : 'repeat(9 , 1fr)'};
    column-gap: 20px;
    row-gap: 50px;
    margin: 20px 0px 30px 20px;

    @media (max-width: 900px) {
        width: 100%;
        grid-template-columns: ${({ openMenu }) => openMenu? 'repeat(6 , 1fr)' : 'repeat(7 , 1fr)'}
    }

    @media (max-width: 300px) {
        grid-template-columns: repeat(3 , 1fr);
    }
`;

export const ShortsTitleContainer = styled.div`
    width: 100px;
    height: 35px;
    display: flex;
    margin: 20px 0px 15px 30px;
`;

export const ShortsTitle = styled.span`
    font-size: 20px;
    font-weight: 500;
`;

export const ShortsTitleIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 8px;
`;

export const Dividers = styled.div`
    width: 100%;
    height: 2px;
    background-color: #d3d3d3;
    margin: 15px 0 15px 0;
`;