import styled from 'styled-components';

const oneBlock = 100;
export const Box = styled.ul`
    width: ${oneBlock*3}px;
    padding: 0;
    background: #f1f1f1;
    border: solid 1px #ddd;
    margin: 0 auto;
    >li{
        height: calc(100% / 3);
        display: flex;
    }
    span{
        width: ${oneBlock}px;
        height: ${oneBlock}px;
        line-height: ${oneBlock}px;
        vertical-align: -0.1em;
        font-size: 20px;
        transition: 0.2s;
        cursor: pointer;
        outline: solid 1px #ddd;
        &:hover{
            background: rgba(0,0,0,0.05);
        }
    }
`;

export const H3 = styled.h3`
	line-height: 1;
	margin: 10px 0;
	color: ${ pp => pp.color || '' };
`
