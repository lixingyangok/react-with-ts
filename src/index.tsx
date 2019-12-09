
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 
import './index.css';
declare global {
    function  __REDUX_DEVTOOLS_EXTENSION__():Object
}

// ▼规定store保存了哪些值
interface StoreState {
    number: number,
    // info: {
    //     a: number,
    //     b: number,
    // }
}
// ▼方法库
interface Fns {
    add: Function,
    minus: Function,
}
// ▼
interface Action {
    type: 'add' | 'minus',
    payload: any,
}

// ▼ The funciton use to make a store
function fnForStore(
    state: StoreState = { number: 1,  },
    action: Action, //{ type:string, payload: any },
):StoreState {
    let fns:Fns = {
        add: ()=>({
            ...state,
            number: state.number + action.payload,
        }),
        minus: ()=>{

        }
    };
    if( fns[action.type]  ) {
        return fns[action.type]();
    }else{
        return state; 
    }
}

// ▼ Make a store buy this way
let store = createStore(
    fnForStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
console.log( '创建的store：', store );
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
