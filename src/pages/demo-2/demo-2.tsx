import React from 'react';
import { Menu } from 'antd';

export default function Abc (){
    const [current, setCurrent] = React.useState('mail');
    const handleClick = ( ev:any )=>{
        setCurrent(ev.key);
    }
    return <div className="center-box">
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
            <Menu.Item key="mail" >菜单项</Menu.Item>
            <Menu.Item key="mail1" >菜单项</Menu.Item>
            <Menu.Item key="mail2" >菜单项</Menu.Item>
            <Menu.Item key="mail3" >菜单项</Menu.Item>
        </Menu>
    </div>
}