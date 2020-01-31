import React from 'react';
import Interface from './interface';
import store from 'store/store';
import { TO_INPUT, TO_REMOVE, TO_ADD } from 'store/actionsMaker';


interface IProps {
    
}
interface IState { //指定 state 内容
    inputing: string,
    list: string[],
}

export default class ToDoList extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props);
        this.state = store.getState();
        // ▼监听store变化、必须用箭头函数
        store.subscribe(()=>{
            this.setState(store.getState());
        });
    }
    render(){
        const { list, inputing } = this.state;
        return <Interface list={list} inputing={inputing}
            fnInputing={this.fnInputing.bind(this)}
            fnDel={this.fnDel.bind(this)}
            fnAdd={this.fnAdd.bind(this)}
        />
    }
    fnInputing( newVal:string ){
        store.dispatch( TO_INPUT(newVal) );
    }
    fnDel( idx:number ){
        store.dispatch( TO_REMOVE(idx) );
    }
    fnAdd(newVal:string){
        store.dispatch(TO_ADD(this.state.inputing))
    }
}