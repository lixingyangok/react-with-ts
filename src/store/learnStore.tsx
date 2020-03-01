import { createStore, combineReducers, applyMiddleware } from 'redux'; //combineReducers 用于合并多个 reducer
import thunk from 'redux-thunk';

//
declare global {
    function __REDUX_DEVTOOLS_EXTENSION__():any
}

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

// ▼修改 reducer(state?)，要用 store.dispatch 派发一个 action
// action需要2个参数，type 和 payload
// type: 这个动作的名称
// payload: 动作附带的参数
store.dispatch({
    type: 'add',
    payload: 2,
});