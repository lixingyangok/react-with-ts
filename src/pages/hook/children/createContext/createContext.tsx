import React, {useState} from 'react';
import cpnt from './style/createContext.js';

const MyContext = React.createContext('');



function Banner01(){
    const oneContext = React.useContext(MyContext);
    console.log( '收到context值：', oneContext );
    return <cpnt.H1>
        All teachers welcome：
        {/* 以下是两种调用方式 */}
        <span>{oneContext}</span>，
        <span>
            <MyContext.Consumer>
                { myVal =>  myVal }
            </MyContext.Consumer>
        </span>
    </cpnt.H1>
}

class Banner02 extends React.Component{
    // ▼定义一个静态的 contextType（固定名称）
    // 之后通过 this.context 调用 MyContext 的值
    static contextType = MyContext;
    render(){
        return <cpnt.H1>
            All students welcome：
            { this.context }
        </cpnt.H1>
    }
}


function JustOneBox(props:any){
    return <cpnt.LineBox  >
        <h2>
            Here's a div, and it has two red banners.
        </h2>
        { props.children }
    </cpnt.LineBox>
}

export default function(){
    const [name, setName] = useState('Jack');
    return <div className="center-box" >
        <h1>
            learn React.createContext(), React.useContext() with this demo
        </h1>
        <br/><br/>
        <div>
            Type in to change the content value:&nbsp;&nbsp;&nbsp;
            <input type='text' value={name} onChange={ev=>setName(ev.target.value)} />
        </div>
        <MyContext.Provider value={name}>
            <JustOneBox>
                <Banner01></Banner01>
                <Banner02></Banner02>
            </JustOneBox>  
        </MyContext.Provider>
    </div>
}

