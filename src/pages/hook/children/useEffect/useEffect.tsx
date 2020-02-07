import React from 'react';
import ReactDOM from 'react-dom';


function Hello(){
    return <span id="Hello" >Hello world</span>
}


export default function(){
    
    const [number, setNumber] = React.useState(1);
    // ▼useEffect在组件挂载，更新后会调用。相当于 componentDidMount & componentDidUpdate
    React.useEffect(
        // useEffect 的1参是个函数， 可拿到state值
        // 在return 之后执行
        ()=>{
            let theTimer = setInterval(()=>{
                // setNumber(number+1); //打印的永远是初始值
                // setNumber( ()=>number+1); //打印的永远是初始值
                // console.log(`number: `, number ); //打印的永远是初始值
                setNumber(number=>number+1);
            }, 1*1000);
            // ▼返回的函数相当于 whileUnMount
            return ()=>{
                clearInterval(Number(theTimer));
                console.log('组件卸载了');
            };
        },
        // ▼无2参，一旦更新后就执行1参的方法
        // ▼空数组，相当于componentDidMount，仅仅在挂载后执行一次
        // ▼一般数组，当监听到数组内值发生变化后，执行1参的方法
        [],
    );
    
    console.log('■■■■ It\'s about to return');
    function suicide(){
        const helloDom:any = document.getElementById('Hello');
        console.log('删除组件', helloDom);
        ReactDOM.unmountComponentAtNode( helloDom );
    }
    return <div id="userEffect" >
        <h2>Learn Effect by this demo.</h2>
        <div>
            <div>
                数字：{number} <br/>
                组件：<Hello/> <br/>
            </div>
            <button onClick={()=>setNumber(number-1)} >
                number - 1
            </button>
            &nbsp;&nbsp;
            <button onClick={()=>suicide()} >
                unmountComponentAtNode
            </button>
        </div>
    </div>
}

