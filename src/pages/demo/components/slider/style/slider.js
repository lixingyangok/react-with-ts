import styled from 'styled-components';

export default {
    Div: styled.div`
        margin: 30px;
        border: solid 1px blue;
        overflow: hidden;
        display: flex;
        ul{
            flex: none;
            padding: 0;
            margin: 0;
            display: flex;
            position: relative;
            top: 0;
            left: 0;
        }
        li{
            flex: none;
            width: 310px;
            height: 100px;
            line-height: 100px;
            background: #eee;
            text-align: center;
            outline: solid 1px orange;
            font-size: 28px;
        }
    `,
}