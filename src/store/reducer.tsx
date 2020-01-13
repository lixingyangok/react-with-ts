
export interface IStore {
    inputing: string,
    list: string[],
}
// ▼定义有哪些 actions
type tp = 'add' | 'remove' | 'change';

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

export default (
    state: IStore = defaultState,
    action: IAction
) :IStore => {
    const { type, value } = action;
    let newState = JSON.parse( JSON.stringify(state) );
    const fnLib = {
        add(){
            newState.list.push( value );
            newState.inputing = '';
        },
        remove(){
            newState.list.splice( value, 1 );
        },
        change(){
            newState.inputing = value;
        },
    }
    fnLib[type] && fnLib[type]();
    return newState;
}

