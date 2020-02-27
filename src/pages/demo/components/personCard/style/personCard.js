import styled from 'styled-components';

export default{
    Div: styled.div`
        width: 300px;
        border: solid 1px #999;
        padding: 30px 50px;
        margin: 0 auto;
        font-size: 18px;
        text-align: left;
    `,
    P: styled.p`
        margin: 0;
        +p{
            margin-top: 0.5em;
        }
    `,
}