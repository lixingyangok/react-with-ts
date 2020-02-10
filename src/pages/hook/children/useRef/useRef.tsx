import React from 'react';
import styled from 'styled-components';

export default function(){
    const [time, setTime] = React.useState(new Date());
    const Time = `
        ${time.toLocaleString()} ${time.getMilliseconds()}
    `.trim();
    const Input = styled.input`
        width: 300px;
        padding: 0.5em 1.5em;
        text-align: center;
        &:focus{
            outline: solid 1px blue;
        }
    `;
    const myRef:any = React.useRef(null);
    const myIpt:any = React.useRef(null);
    React.useEffect(
        ()=>console.log('组件变化'),
    );
    const UpdateTime = function(){
        setTime(new Date());
        myRef.current.innerText = Time;
    }
    const beFocused = function(){
        myIpt.current.focus();
    }
    return <div>
        <h2>Learn useRef by this demo.</h2>
        <Input ref={myIpt} value={Time} readOnly />
        <p ref={myRef}>&nbsp;&nbsp;</p>
        <br/>
        <button onClick={()=>UpdateTime()} >
            Update the time, and make it focused.
        </button>
        <button onClick={()=>beFocused()} >
            Be focused.
        </button>
    </div>;
};