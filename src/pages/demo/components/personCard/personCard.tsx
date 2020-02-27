import React from 'react';
import PropTypes from 'prop-types';
import cpnt from './style/personCard';

interface IProps {
    name: string,
    age?: number,
    sex?: '男' | '女',
}
const PersonCard = function( props:IProps ){
    return <div>
        <h1>
            Learn some...
        </h1>
        <cpnt.Div>
            <cpnt.P>姓名：{props.name}</cpnt.P>
            <cpnt.P>年龄：{props.age || 18}</cpnt.P>
            <cpnt.P>性别：{props.sex || '男'}</cpnt.P>
        </cpnt.Div>
    </div>
}
// console.log( PersonCard.propTypes );

const ps01 = {
    name: '张三',
    age: 30,
}

export default function(){
    return <PersonCard {...ps01} />;
}