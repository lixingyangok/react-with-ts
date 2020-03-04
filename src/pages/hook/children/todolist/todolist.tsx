import React from 'react';
import cpnt from './style/todolist';
import {
    Input, List, Button
} from 'antd';
const { Search } = Input;

function TypeIn(
    props: { addItem:Function },
){
    const { addItem } = props;
    const [text, setText] = React.useState('');
    const toAdd = function(item:string){
        if(!item.trim()) return;
        addItem(item);
        setText('');
    }
    return <Search placeholder="input search text"
        enterButton="Add a item"
        size="large"
        value={text}
        onChange={(ev:any)=>setText(ev.target.value)}
        onSearch={value => toAdd(value)}
    />
}

function TheList(
    props:{ list: Array<any> },
){
    const { list } = props;
    return <List bordered
        dataSource={list}
        renderItem={item => (
            <List.Item>
                <cpnt.ItemLeft>{item}</cpnt.ItemLeft>
                <Button size="small">删除</Button>
            </List.Item>
        )}
    />
}

export default function(){
    const [list, setList] = React.useState(['1','2']);
    const addItem = function( newVal:string ){
        setList([ ...list, newVal ]);
    }
    return <cpnt.Div className="center-box" >
        <TypeIn addItem={addItem} />
        <TheList list={list}/>
    </cpnt.Div>
}


