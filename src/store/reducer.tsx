import { tp, ADD, REMOVE, INPUT } from './actionTypes';


export interface IStore {
    inputing: string,
    list: string[],
}


interface IAction {
    type: tp,
    value: any,
    payload?: any,
}

let defaultState:IStore = {
    inputing: '',
    list: [
        'sample',
    ],
};

// ▼这里应为:【纯函数】即：一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用
export default (
    state: IStore = defaultState,
    action: IAction
) :IStore => {
    const { type, value } = action;
    let newState = JSON.parse( JSON.stringify(state) );
    const fnLib = {
        [ADD](){
            newState.list.push( value );
            newState.inputing = '';
        },
        [REMOVE](){
            newState.list.splice( value, 1 );
        },
        [INPUT](){
            newState.inputing = value;
        },
    }
    fnLib[type] && fnLib[type]();
    return newState;
}

