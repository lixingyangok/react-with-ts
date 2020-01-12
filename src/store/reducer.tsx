
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
    let newState = JSON.parse( JSON.stringify(state) );
    const fnLib = {
        add(){
            newState.list.push( action.value );
            newState.inputing = '';
        },
        remove(){
            newState.list.splice( action.value, 0 );
        },
        change(){
            newState.inputing = action.value;
        },
    }
    fnLib[action.type] && fnLib[action.type]();
    return newState;
}

