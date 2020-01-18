import { ADD, REMOVE, INPUT } from './actionTypes';

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