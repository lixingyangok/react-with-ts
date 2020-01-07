import React from 'react';
import { Input, Button, List } from 'antd';
import styleObj from './style/todolistWithStyle.js';

const { InputBar } = styleObj;
const { Search } = Input;

const data = [
    '123',
    'abc',
];

export default function () {
    return <div>
        <InputBar>
            <Search
                placeholder="Input action name"
                enterButton="Submit"
                size="large"
                onSearch={value => console.log(value)}
            />
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
            />
        </InputBar>
    </div>
}
