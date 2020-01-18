/*
 * @Author: 李星阳
 * @Date: 2020-01-17 13:07:30
 * @LastEditors  : 李星阳
 * @LastEditTime : 2020-01-18 12:56:24
 * @Description: 
 */
import styled from 'styled-components';

export default{
    Wrap: styled.div`
        width: 500px;
        margin: 30px auto 10px;
    `,
    Ul: styled.ul`
        border: solid 1px #aaa;
        padding: 15px;
    `,
    InputWrap: styled.div`
        display: flex;
        margin: 15px 0;
        input{
            flex: auto;
            padding: 10px;
        }
        input, button{
            height: 50px;
        }
    `,
}