// ▼定义有哪些 actions
export type tp = 'add' | 'remove' | 'change';
export let tp = 99;

export const ADD:tp = 'add';


interface arr01 {
    0: string,
    1: number,
}
let arr01:arr01 = ['0', 1];

type tp01 = '男' | '女';
let someOneSex:tp01 = '男';

enum sex {'男', '女'};
let someOneSex02:sex = sex['男'];

