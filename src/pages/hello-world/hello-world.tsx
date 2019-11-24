import React from 'react';

interface IProps{
    name: string,
    age: number,
    children: any,
}

export default class HelloWorld extends React.Component<IProps> {
    constructor( props:any ){
        console.log( typeof props, props );
        super( props );
    }
    render():Object{
        return <button>
            hello world <br/>
            I am {this.props.name} <br/>
            and I'm {this.props.age} years old <br/>
            { this.props.children }
        </button>
    }
}