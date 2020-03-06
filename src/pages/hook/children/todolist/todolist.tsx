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
    props:{ list: Array<any>, toDel:Function },
){
    const { list, toDel } = props;

    return <List bordered
        dataSource={list}
        renderItem={(item,idx) => (
            <List.Item>
                <cpnt.ItemLeft>{item}</cpnt.ItemLeft>
                <Button size="small" onClick={()=>toDel(idx)} >
                    删除
                </Button>
            </List.Item>
        )}
    />
}

export default function(){
    const [list, setList] = React.useState(['1','2']);
    const addItem = function( newVal:string ){
        setList([ ...list, newVal ]);
    }
    const toDel = function ( idx:number ){
        setList(list.filter((cur,listIdx)=>listIdx !== idx));
    }
    return <div>
        <h2>Write a todolist by hook.</h2>
        <cpnt.Div className="center-box" >
            <TypeIn addItem={addItem} />
            <TheList list={list} toDel={toDel}/>
        </cpnt.Div>
    </div>
}


