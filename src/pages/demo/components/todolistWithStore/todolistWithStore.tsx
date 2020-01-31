import React from 'react';
import { Input, List, Button } from 'antd';
import styled from './style/todolistWithStore.js';
import store from 'store/store';
import { 
    TO_ADD,
    TO_INPUT,
    TO_REMOVE,
} from 'store/actionsMaker';

const { Search } = Input;

interface IState { //指定 state 内容
    inputing: string,
    list: string[],
}


export default class ToDoList extends React.Component<any, IState >{
    public state:IState;
    constructor( props:any ){
        super(props);
        this.state = store.getState();
        // ▼监听store变化、必须用箭头函数
        store.subscribe(  ()=>this.setState( store.getState() ) );
    }
    render(){
        const { inputing, list } = this.state;
        return <div>
            <h1>
                This todolist built with store(redux).
            </h1>
            <styled.InputBar>
                <Search
                    value={ inputing }
                    placeholder="Input action name"
                    enterButton="To add"
                    size="large"
                    onChange={ ev=>this.toInput( ev.target.value)}
                    onSearch={value => this.toAdd(value)}
                />
                {/* header={<div>Header</div>}
                footer={<div>Footer</div>} */}
                <styled.List
                    bordered
                    dataSource={ list }
                    renderItem={ (item:string, idx:number) => (
                        <List.Item>
                            {item}
                            <Button type="link" onClick={this.toRemove.bind(this, idx)} >
                                Delete
                            </Button>
                        </List.Item>
                    )}
                />
            </styled.InputBar>
        </div>
    }
    toInput( value:string ){
        store.dispatch(
            TO_INPUT(value),
        );
    }
    toAdd( value:string ) {
        store.dispatch(
            TO_ADD(value),
        );
    }
    toRemove( value:number ){
        store.dispatch(
            TO_REMOVE(value),
        );
    }
}