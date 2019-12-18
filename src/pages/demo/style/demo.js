import styled from 'styled-components';

export const Ul = styled.ul`
    background: #e9e9e9;
    display: flex;
    padding: 10px 35px;
    text-align: center;
    a{
        margin: 0 15px 0 0;
        padding: 3px 9px;
        &:hover,
        &[class~=active]{
            background: yellow;
        }
    }
`;
