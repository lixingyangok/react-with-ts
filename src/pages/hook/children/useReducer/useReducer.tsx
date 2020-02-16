import React from 'react';



interface IState {
    color: string,
    size: string,
}
interface IContext {
    state: IState,
    dispath: Function,
}
const Context:IContext = {
    state: { color: '', size: '' },
    dispath: ()=>null,
}
const myContext = React.createContext(Context);


function ShowColor () {
    const {state} = React.useContext(myContext);
    console.log(state);
    return <h1 style={{color:state.color, textTransform: 'uppercase'}} >
        {state.color}
    </h1>
}
function ChangeColor () {
    const {dispath} = React.useContext(myContext);
    return <h1>
        <button onClick={()=>dispath({type: oType.changeColor, payload:'red'})}>
            Make it red
        </button>
        <button onClick={()=>dispath({type: oType.changeColor, payload:'blue'})}>
            Make it blue
        </button>
    </h1>
}


const oType = {
    changeColor: 'changeColor',
    changeSize: 'changeSize',
}
const reducer = (
    state:IState,
    action:{ type:string, payload:any },
) => {
    // ▼血的教训，必须深拷贝
    const newState = JSON.parse(JSON.stringify(state));
    if( action.type === oType.changeColor ){
        newState.color = action.payload;
    }
    if( action.type === oType.changeSize ){
        newState.size = action.payload;
    }
    return newState;
};
export default function(){
    const [state, dispath] = React.useReducer(reducer, {
        color: 'blue',
        size: '18px',
    });
    return <myContext.Provider value={{state, dispath}}>
        <h1>
            learn React.useReducer() with this demo    
        </h1>
        <ShowColor/>
        <ChangeColor/>
    </myContext.Provider>
}