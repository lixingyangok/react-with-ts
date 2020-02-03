import React, {useState} from 'react';
import cpnt from './style/banner.js';
const MyContext = React.createContext({name:''});

function JustOneBox(props:any){
    return <div>
        { props.children }
    </div>
}

function Banner01(){
    return <cpnt.H1>
        All teachers welcome：
        <MyContext.Consumer>
            { myVal =>  myVal.name }
        </MyContext.Consumer>
    </cpnt.H1>
}

// function Banner02(){
//     return <cpnt.H1>
//         All students welcome：
//         <MyContext.Consumer>
//             { myVal =>  myVal.name }
//         </MyContext.Consumer>
//     </cpnt.H1>
// }

class Banner02 extends React.Component{
    // ▼定义一个静态的 contextType。之后通过 this.context 调用 MyContext 的值
    static contextType = MyContext;
    render(){
        return <cpnt.H1>
            All students welcome：
            { this.context.name }
        </cpnt.H1>
    }
}



export default function(){
    const [name, setName] = useState('Jack');
    console.log( name );
    return <div>
        <h1>
            learn React.createContext() with this demo
        </h1>
        <div>
            <input type='text' value={name} onChange={ev=>setName(ev.target.value)} />
        </div>
        <MyContext.Provider value={{name}}>
            <JustOneBox>
                <Banner01></Banner01>
                <Banner02></Banner02>
            </JustOneBox>  
        </MyContext.Provider>
    </div>
}

