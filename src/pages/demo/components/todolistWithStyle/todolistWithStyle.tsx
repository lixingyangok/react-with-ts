import React from 'react';
import { Input, List, Button } from 'antd';
import styled from './style/todolistWithStyle.js';
import store from 'store/index';


console.log( 'import store = ', store );

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
            <styled.InputBar>
                <Search
                    value={ inputing }
                    placeholder="Input action name"
                    enterButton="To add"
                    size="large"
                    onChange={val=>this.formChagned(val.target.value)}
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
                                删除
                            </Button>
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
    }
    toAdd( value:string ) {
        store.dispatch({
            type: 'add',
            value,
        });
    }
    toRemove( value:number ){
        store.dispatch({
            type: 'remove',
            value,
        });
    }
}