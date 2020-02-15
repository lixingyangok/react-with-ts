import React from 'react';

export default function(){
    const [count, dispath] = React.useReducer((state, action)=>{
        switch(action){
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;
            default :
                return state;
        };
    }, 0);
    return <div>
        <h1>
            learn React.useReducer() with this demo    
        </h1>
        <h1>
            {count} <br/>
        </h1>
        <button onClick={()=>dispath('add')} >
            to add
        </button>
        <button onClick={()=>dispath('sub')} >
            to sub
        </button>
    </div>
}