import React from 'react';

interface IProps{
    msg: string,
}
interface IState{
    number: number,
}

export default class Msg extends React.Component< IProps, IState >{
    constructor( props:IProps ){
        super( props );
        this.state = {
            number: 0,
        };
    }
    render(){
        let { state } = this;
        return <div>
            { this.props.msg || '这是收到的消息 - ' }
            { state.number }
        </div>
    }
}