import styled from 'styled-components';

export default {
    Form: styled.form`
        width: 500px;
        margin: 0 auto;
        outline: solid 1px #999;
        text-align: left;
        padding: 30px;
        &>div{
            margin: 0 0 15px;    
        }
        label{
            margin: 0 0 0 10px;
        }
    `,
}