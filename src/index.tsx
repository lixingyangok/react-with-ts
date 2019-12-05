import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 
import './index.css';

interface Istate{
    number: number,
}
// interface Ifns {
//     add: Function,
// }

// action reducer state( state )
function fnForStore(
    state: Istate = { number: 1 },
    action: { type:string, payload: any },
):object{
    // let fns:Ifns = {
    //     add():object{
    //         return state;
    //     },
    // }
    // if( fns[action.type] ){}
    // state = state || { number:1 }
    if( action.type == 'add' ){
        return {
            ...state,
            number: state.number+action.payload,
        }
    }
    return state; 
}

// ▼创建 store
let store = createStore( fnForStore );
console.log( store );
console.log( Object.keys( store ) );
console.log( store.getState() );

// ▼修改 reducer(state?)，要用 store.dispatch 派发一个 action
// action需要2个参数，type 和 payload
// type: 这个动作的名称
// payload: 动作附带的参数
store.dispatch({
    type: 'add', 
    payload: 1,
});



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
