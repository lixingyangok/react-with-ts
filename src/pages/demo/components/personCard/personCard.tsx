import React from 'react';
import PropTypes from 'prop-types';
import cpnt from './style/personCard';

interface IProps {
    name: string,
    age?: number,
    sex?: '男' | '女',
}
const PersonCard = function( props:IProps ){
    return <cpnt.Div>
        <cpnt.P>姓名：{props.name}</cpnt.P>
        <cpnt.P>年龄：{props.age}</cpnt.P>
        <cpnt.P>性别：{props.sex}</cpnt.P>
    </cpnt.Div>
}
PersonCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string,
    // optionalArray: PropTypes.array.isRequired, // ▼你可以将属性声明为以下 JS 原生类型
    // optionalBool: PropTypes.bool,
    // optionalFunc: PropTypes.func,
    // optionalNumber: PropTypes.number,
    // optionalObject: PropTypes.object,
    // optionalString: PropTypes.string,
    // optionalSymbol: PropTypes.symbol,
} 
PersonCard.defaultProps = {
    age: 18.18,
    sex: '女',
}

const ps01 = {
    name: '张三',
    age: 30,
}

export default function(){
    return <div>
        <h1>
            Learn "PropTypes" with this demo
        </h1>
        <PersonCard {...ps01} />
        <PersonCard name={'李四'} />
    </div>;
}