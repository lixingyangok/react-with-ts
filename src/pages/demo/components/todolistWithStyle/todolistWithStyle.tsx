import React from 'react';
import { Input, List, Button } from 'antd';
import styled from './style/todolistWithStyle.js';
import store from 'store/index';

const { Search } = Input;
interface IState {
    inputing: string,
    list: string[],
}


export default class ToDoList extends React.Component<any, IState >{
    public state:IState;
    constructor( props:any ){
        super(props);
        this.state = store.getState();
        console.log( 'store的值---', store.getState() );
    }
    render(){
        const { state } = this;
        return <div>
            <styled.InputBar>
                <Input/>
                <Button>提交</Button>
                <Search
                    placeholder="Input action name"
                    enterButton="Submit"
                    size="large"
                    onSearch={value => console.log(value)}
                />
                {/* header={<div>Header</div>}
                footer={<div>Footer</div>} */}
                <styled.List
                    bordered
                    dataSource={ state.list }
                    renderItem={ (item:string) => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </styled.InputBar>
        </div>
    }
}