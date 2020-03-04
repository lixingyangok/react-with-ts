import styled from 'styled-components';

export default{
    Div: styled.div`
        width: 500px;
        margin: 0 auto;
        .ant-list{
            margin-top: 20px;
        }
    `,
    ItemLeft: styled.p`
        max-width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
    `,
}