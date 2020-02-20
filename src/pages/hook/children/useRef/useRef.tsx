import React from 'react';

const inputStyle = {
    display: 'inline-block',
    width: '300px',
    padding: '0.2em 1.5em',
    margin: '0 auto',
    border: 'solid 1px #aaa',
}

export default function(){
    const [time, setTime] = React.useState(new Date());
    const [text, setText] = React.useState('value');
    const myRef:any = React.useRef(null);
    const myIpt02:any = React.useRef(null);
    const UpdateTime = function(){
        setTime(new Date());
        myRef.current.innerText = Time;
    }
    const beFocused = function(){
        myIpt02.current.focus();
    }
    const Time = `${time.toLocaleString()} - ${time.getMilliseconds()}`;
    console.log('重新渲染了');
    return <div>
        <h2>Learn useRef by this demo.</h2>
        <br/>
        <div>
            <p ref={myRef} style={inputStyle}>&nbsp;&nbsp;</p>
            <button onClick={()=>UpdateTime()} >
                Update the time.
            </button>
        </div>
        <div>
            <input style={inputStyle} ref={myIpt02} value={text} onChange={(ev:any)=>setText(ev.target.value)} /> 
            <button onClick={()=>beFocused()} >
                Make it focused.
            </button>
        </div>
    </div>;
};