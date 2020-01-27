import React from 'react';
import cpnt from './style/style.js';

interface IProps {
    list: string[],
    inputing: string,
    fnInputing:Function,
    fnDel:Function,
    fnAdd:Function,
}


export default function( props:IProps ){
    const { list, inputing, fnInputing, fnDel, fnAdd } = props;
    return <cpnt.Wrap>
        <h1>
            This todolist has splited the UI and event.
        </h1>
        <cpnt.InputWrap>
            <input value={inputing} onChange={ ev=>fnInputing(ev.target.value) } />
            <button onClick={()=>fnAdd()} >
                Submit
            </button>
        </cpnt.InputWrap>
        <cpnt.Ul>
            {list.map((cur,idx)=>{
                return <li key={idx} >
                    {idx+1}. {cur}
                    &nbsp;&nbsp;&nbsp;
                    {/*  */}
                    <button  style={{padding: '3px 6px', lineHeight: '10px' }}
                        onClick={()=>fnDel(idx)}
                    >
                        Delete
                    </button>
                </li>;
            })}
        </cpnt.Ul>
    </cpnt.Wrap>;
}
