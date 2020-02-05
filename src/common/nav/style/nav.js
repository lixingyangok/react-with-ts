import styled from 'styled-components';

export default{
    nav: styled.nav`
        background: black;
    `,
    ul: styled.ul`
        display: flex;
        justify-content: center;
        padding: 18px 30px;
    `,
    li: styled.li`
        list-style: none;
        margin: 0 10px;
        a{
            color: white;
            font-size: 16px;
            padding: 0.1em 0.5em;
            font-weight: bold;
            &[class~=active]{
                color: yellow;
            }
        }
    `,
}