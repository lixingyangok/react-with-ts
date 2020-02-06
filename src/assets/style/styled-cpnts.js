import styled from 'styled-components';

export const SmallNav = styled.ul`
    max-width: 960px;
    margin: 0 auto 35px;
    background: #0097e6;
    display: flex;
    li{
        
    }
    li a{
        display: block;
        padding: 0.6em 1em;
        margin-right: 0.5em;
        color: white;
        font-size: 16px;
        transition: 0.3s;
        &[class~=active]{
            background: rgba(0,0,0,0.15);
        }
        &:hover{
            text-shadow: 0px 0px 2px rgba(0,0,0,0.7);
        }
    }
`;