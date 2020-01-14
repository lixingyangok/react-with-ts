import { ADD } from './actionTypes';

export const TO_ADD = ( value:string )=>({
    type: ADD,
    value,
})