import React from 'react';
import ReactDOM from 'react-dom';

function Hello(){
    return <span id="Hello" >
        Hello world
    </span>
}

export default function Counter (){
    const [ number, setNumber ] = React.useState(1);
    // ▼useEffect在组件挂载，更新后会调用。相当于 componentDidMount & componentDidUpdate
    React.useEffect(
        // 1参是个函数，定义在useState之后，可拿到state值
        // 在 return 之后执行（类似在render之后执行）
        ()=>{
            console.log('React.useEffect 1参执行');
            let theTimer = setInterval(()=>{
                // setNumber(number+1); //修改无效，
                // setNumber( ()=>number+1); //修改无效，
                // console.log(`number: `, number ); //打印的永远是初始值
                setNumber(number=>number+1);
            }, 1*1000);

            return ()=>{ // 返回的函数用于在 componentWillUnmount 时执行
                clearInterval(Number(theTimer));
                console.log('组件卸载了');
            };
        },
        // ▼2参可为空，在【挂载或更新（即state更新）】后就执行1参的方法，连1参返回的方法也执行
        // ▼2参为空数组，相当于 componentDidMount，仅仅在【挂载后】执行一次，在卸载时执行1参返回的方法
        // ▼一般数组，当【监听到数组内值发生变化后】，执行1参的方法
        [],
    );
    
    function suicide(){
        const helloDom:any = document.getElementById('Hello');
        console.log('删除组件', helloDom);
        ReactDOM.unmountComponentAtNode( helloDom );
    }
    // console.log('■■■■ It\'s about to return');
    return <div id="userEffect" >
        <h2>Learn useEffect by this demo.</h2>
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