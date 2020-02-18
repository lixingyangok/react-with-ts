import React from 'react'
import styled from 'styled-components';


interface IProps{
    val01: string,
    val02?: string,
}
function Kid ({val01}:IProps) {
    const Div = styled.div`
        border: solid 1px #aaa;
        padding: 10px 30px;
        margin: 35px auto 0;
    `;
    function getNewVal01 () {
        console.log('子组件开始求值');
        return 'new value: ' + val01;
    };
    const newVal01 = React.useMemo(()=>getNewVal01(), [val01]);
    return <Div>
        {newVal01}
    </Div>
}

export default function () {
    const Span = styled.span`
        display: inline-block;
        font-size: 18px;
        margin: 1em 0;
        border: solid 1px #aaa;
        padding: 0.3em 1em;
    `;
    const [val01, setVal01] = React.useState('value01');
    const [val02, setVal02] = React.useState('value02');
    return <div className="center-box" >
        <h2>Learn useMemo by this demo.</h2>
        <div>
            <Span>{val01}</Span>
            &nbsp;&nbsp;&nbsp;
            <Span>{val02}</Span>
        </div>
        <div>
            <button onClick={()=>setVal01(val01+'-')} >Change val01</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={()=>setVal02(val02+'-')} >Change val02</button>
        </div>
        <Kid val01={val01} />
    </div>
}
