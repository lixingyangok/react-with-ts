import React from 'react';
import { Input, List } from 'antd';
import styled from './style/todolistWithStyle.js';
import store from 'store/index';

const { Search } = Input;

const data = [
    '123',
    'abc',
];



export default class ToDoList extends React.Component{
    constructor( props:any ){
        super(props);
        console.log( store.getState() );
    }
    render(){
        return <div>
            <styled.InputBar>
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
                    dataSource={data}
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

export function  abc() {
    return <div>
        <styled.InputBar>
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
                dataSource={data}
                renderItem={ (item:string) => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
            />
        </styled.InputBar>
    </div>
}
