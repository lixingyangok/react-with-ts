import React from 'react';

export default function(){
    // ▼下列 React.useState 的调用顺序，数量必须恒定，不可通过判断产生变化
    const [number, setNumber] = React.useState(0);
    return <div>
        <h2>Learn useState by this demo.</h2>
        <h2>You clicked {number} times.</h2>
        <div>
            <button onClick={()=>setNumber(number+1)} >
                Click here
            </button>
            &nbsp;&nbsp;
            <button onClick={()=>setNumber(0)} >
                Make zero
            </button>
        </div>
    </div>
}