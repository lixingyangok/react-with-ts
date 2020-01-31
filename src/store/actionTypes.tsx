
// enum actions{
//     add,
//     remove,
//     change,
// };

// ▼定义有哪些 actions
export type tp = (
    'add' |
    'remove' |
    'input' |
    'get list' | 
    'change homepage text'
);

export const ADD:tp = 'add';
export const REMOVE:tp = 'remove';
export const INPUT:tp = 'input';
export const GET_LIST:tp = 'get list';
export const CHANGE_HOMEPAGE_TEXT:tp = 'change homepage text';

