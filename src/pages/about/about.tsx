import React from 'react';


interface IProps{
    name?: string,
}


export default class About extends React.Component< IProps > {
    constructor( props:IProps ){
        super( props );
        console.log( 'constructor - 加载的时候调用一次，可以初始化state' );
    }
    render(){
        return <div>
            asdfasdf
        </div>
    }
}