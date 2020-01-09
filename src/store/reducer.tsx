export interface IStore {
    inputing: string,
    list: string[],
}


let defaultState:IStore = {
    inputing: 'inputing',
    list: [ '123', 'abc' ],
};

// ▼定义有哪些 actions
interface Action {
    type: 'add' | 'minus',
    payload: any,
}

// interface f1( object, Function):object=>{};

export default (
    state: IStore = defaultState, 
    action: object
) :IStore => {
    return state;
}

