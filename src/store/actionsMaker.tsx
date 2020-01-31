import { ADD, REMOVE, INPUT, GET_LIST, CHANGE_HOMEPAGE_TEXT } from './actionTypes';

export const TO_ADD = ( value:string )=>({
    type: ADD,
    value,
});

export const TO_REMOVE = ( value:number )=>({
    type: REMOVE,
    value,
});

export const TO_INPUT = ( value:string )=>({
    type: INPUT,
    value,
});

export const TO_GET_LIST = ( value:string[] )=>({
    type: GET_LIST,
    value,
});

export const TO_CHANGE_HOMEPAGE_TEXT = ()=>({
    type: CHANGE_HOMEPAGE_TEXT,
});


export const TO_GET_LIST_FN = ()=>{
    return ( dispatch:Function )=>{
        console.log('开始查找数据■■■■■')
    }
};