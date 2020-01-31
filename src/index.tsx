import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'; //combineReducers用于合并多个reducer
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import myStore from 'store/store';


//
import './index.css';
import 'antd/dist/antd.css';

//
declare global {
    function __REDUX_DEVTOOLS_EXTENSION__():any
}

if( !thunk ) console.log( thunk, compose, applyMiddleware );

// ▼规定store保存了哪些值
interface StoreState {
    number: number,
}

// ▼方法库
interface Fns {
    add: Function,
    minus: Function,
}

// ▼定义有哪些 actions
interface Action {
    type: 'add' | 'minus',
    payload: any,
}

// ▼ This function use to make a Store
function fnForStore(
    state: StoreState = { number: 1 },
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

const rootReducer = combineReducers({
    fnForStore,
});

// ▼ Make a store buy this way
let store = createStore(
    rootReducer,
    applyMiddleware( thunk ), // 这样写，或▼
    // compose(
    //     applyMiddleware( thunk ), //需要使用的中间件数组
    //     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // ),
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
// store.dispatch( function( dispatch:Function ) {
//     dispatch({
//         type: 'add',
//         payload: 2,
//     });
// });

// eslint-disable-next-line
Object.defineProperties( Object.prototype, {
    '$dc': {
        value: function(){
            return JSON.parse(
                JSON.stringify( this ),
            );
        },
        writable: true,
    },
})

const AppRoot = function(){
    return <Provider store={myStore} >
        <App />
    </Provider>
}

ReactDOM.render(
    <AppRoot />,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
