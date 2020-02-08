import React from 'react';
import styled from 'styled-components';

export default function(){
    const [time, setTime] = React.useState(new Date());
    const Time = `
        ${time.toLocaleString()} ${time.getMilliseconds()}
    `;
    const Input = styled.input`
        width: 300px;
        padding: 0.5em 1.5em;
        text-align: center;
        &:focus{
            outline: solid 1px blue;
        }
    `;
    const myRef:any = React.useRef(null);
    const UpdateTime = function(){
        // console.log( myRef.current.innerText );
        setTime(new Date());
        myRef.current.innerText = Time;
    }
    return <div>
        <h2>Learn useRef by this demo.</h2>
        <Input value={Time} readOnly />
        <p ref={myRef}></p>
        <br/>
        <button onClick={()=>UpdateTime()} >
            Update the time, and make it focused.
        </button>
    </div>;
};