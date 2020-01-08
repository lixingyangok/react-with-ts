let defaultState = {
    inputing: 'inputing',
    list: [ '123', 'abc' ],
};

// interface f1( object, Function):object=>{};

const fn:Function = ( 
    state:object=defaultState, 
    action: Function
):object =>  {
    return state;
}

export default fn