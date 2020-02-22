import React, { useState, useMemo } from 'react';

// ▼反例
function WithoutMemo() {
    const [count, setCount] = useState(1); // 数字
    const [val, setValue] = useState(''); // 文字
    // 这有一个求值的函数
    // 如果没有 useMemo 它会在【不必要时】频繁调用，比如 val 的值发生改变
    function expensive() { 
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }

    return <div>
        <h4>{count}-{expensive()}</h4>
        {val}
        <div>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}


export default function WithMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
    // ▼通过 useMemo 指定在这个方法仅仅在 count 发生变化后再执行。
    const expensive = useMemo(() => {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }, [count]);

    return <div>
        <h4>{count}-{expensive}</h4>
        {val}
        <div>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}