import React from 'react';

export default function(){
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