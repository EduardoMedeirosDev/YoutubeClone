import styled from 'styled-components'

export const Body = styled.div`
    display: inline-block;
    overflow-x: hidden;
`;

export const VideoContainer = styled.div<{ openMenu: boolean }>`
    width: 98%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu? 'repeat(4 , 1fr)' : 'repeat(5 , 1fr)'};
    column-gap: 20px;
    row-gap: 50px;
    margin: ${({ openMenu }) => openMenu? '20px 0px 30px 20px' : '20px 0px 30px 30px'};

    @media (max-width: 900px) {
        grid-template-columns: ${({ openMenu }) => openMenu? 'repeat(2 , 1fr)' : 'repeat(3 , 1fr)'};
    }
`;

export const CategoriesContainer = styled.div`
    width: 100%;
    max-width: 1600px;
    height: 50px;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    will-change: auto;
    overflow-x: auto;
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
    max-width: 1600px;
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu? 'repeat(8 , 1fr)' : 'repeat(9 , 1fr)'};
    column-gap: 20px;
    row-gap: 50px;
    margin: 20px 0px 30px 20px;
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