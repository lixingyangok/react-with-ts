import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 
import './index.css';

interface StoreState {
    number: number,
}

interface fns {
    add: Function,
    minus?: Function,
}

interface Ifns {
    type: 'add' | 'minus',
    payload: any,
}
// interface Ifns02 {
//     type: typs,
//     payload: any,
// }

// type myAction = 

// action reducer state( state )
function fnForStore(
    state: StoreState = { number: 1 },
    action: Ifns, //{ type:string, payload: any },
):StoreState {
    let fns:fns = {
        add: ()=>({
            ...state,
            number: state.number + action.payload,
        }),
    };
    // if( action.type in fns ) console.log('有');
    if( fns[action.type]  ) fns[action.type]();
    if( action.type === 'add' ){
        return {
            ...state,
            number: state.number+action.payload,
        }
    }
    return state; 
}

// ▼创建 store
let store = createStore( fnForStore );
console.log( 'store：', store );
console.log( Object.keys( store ) );


// ▼修改 reducer(state?)，要用 store.dispatch 派发一个 action
// action需要2个参数，type 和 payload
// type: 这个动作的名称
// payload: 动作附带的参数
console.log( 'store修改之前：', store.getState() );
store.dispatch({
    type: 'add', 
    payload: 2,
});
console.log( 'store修改后：', store.getState() );



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
