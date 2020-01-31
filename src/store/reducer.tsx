import { tp, ADD, REMOVE, INPUT, GET_LIST, CHANGE_HOMEPAGE_TEXT } from './actionTypes';

export interface IStore {
    homePageText: string,
    inputing: string,
    list: string[],
}

interface IAction {
    type: tp,
    value: any,
}

let defaultState:IStore = {
    homePageText: 'This project is just for practice React with TS.',
    inputing: '',
    list: [
        'Sample',
    ],
};

// ▼这里应为:【纯函数】
// 纯函数：一个函数的返回结果只依赖于它的参数，且执行无副作用
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
        [GET_LIST](){
            newState.list = value;
        },
        [CHANGE_HOMEPAGE_TEXT](){
            newState.homePageText = (
                newState.homePageText + 
                '\n\r' +
                new Date().toLocaleString()
            );
        }
    }
    fnLib[type] && fnLib[type]();
    return newState;
}

