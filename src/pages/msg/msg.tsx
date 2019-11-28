import React from 'react';

interface IProps{
    msg: string,
}

export default class Msg extends React.Component<IProps>{
    constructor( props:IProps ){
        super( props );
    }
    render(){
        return <div>
            { this.props.msg }
        </div>
    }
}