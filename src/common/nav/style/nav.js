import styled from 'styled-components';
import style from 'pages/demo/components/todolistSeparation/style/style';

export default{
    nav: styled.nav`
        background: black;
    `,
    ul: styled.ul`
        display: flex;
        justify-content: center;
        padding: 10px 30px;
    `,
    li: styled.li`
        list-style: none;
        margin: 0 20px;
        a{
            color: white;
            &[class~=active]{
                color: yellow;
            }
        }
    `,
}