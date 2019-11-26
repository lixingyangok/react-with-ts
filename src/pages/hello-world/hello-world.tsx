import React from 'react';

interface ifsProps{
    name: string,
    age: number,
    children: any,
}
interface ifsSate{
    name: string,
}

// 通过 <ifsProps> 指定接口收到的参数
export default class HelloWorld extends React.Component< ifsProps, any > {
    constructor( props:ifsProps ){
        super( props );
        console.log( props );
    }
    // public readonly state = {
    public readonly state: Readonly <ifsSate> = {
        name: '按钮',
    }
    render():Object{
        const { state, props } = this;
        return <button onClick={()=>this.setState({ name: state.name+'-' })} >
            这是一个按钮{state.name} <br/>
            I am { props.name } <br/>
            and I'm { props.age } years old <br/>
            {  props.children  }
        </button>
    }
}