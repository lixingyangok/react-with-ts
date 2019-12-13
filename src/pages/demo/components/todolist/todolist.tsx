import React from 'react';

interface IState {
    name: string
}
interface IProps {
    name: string,
}

export default class Todolist extends React.Component<IProps, any>{
    constructor({props}: { props: any }) {
        super(props);
    }
    render(){
        return <div>
            todolist<br/>
            todolist<br/>
        </div>
    }
}