import React from 'react';
import cpnt from './style/style.js';

interface IProps {
    list: string[],
    fnInputing:Funcion,
    fnDel:Function,
}

export default class extends React.Component<IProps>{
    constructor( props:IProps ){
        super(props);
    }
    render(){
        const { list, fnInputing, fnDel } = this.props;
        return <cpnt.Wrap>
            <h1>
                This todolist has splited the UI and event.
            </h1>
            <cpnt.InputWrap>
                <input onChange={ ev=>fnInputing(ev.target.value) } />
                <button>Submit</button>
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
}