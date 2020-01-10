import React from 'react';
import { Input, List, Button } from 'antd';
import styled from './style/todolistWithStyle.js';
import store from 'store/index';
import { changeConfirmLocale } from 'antd/lib/modal/locale';
console.log( 'store', store );

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
                    value={state.inputing}
                    placeholder="Input action name"
                    enterButton="Submit"
                    size="large"
                    onChange={val=>console.log(val.target.value)}
                    onSearch={value => this.toSearch(value)}
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
    formChagned( value:string ){
        store.dispatch({
            type: 'change',
            value,
        });
        this.setState( store.getState() );
    }
    toSearch( newItem:string) {
        store.dispatch({
            type: 'add',
            value: newItem,
        });
        this.setState( store.getState() );
    }
}