import React, { useState, useCallback, useEffect } from 'react';

const set = new Set();

function Callback() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');
    const callback = useCallback(() => {
        console.log(count);
    }, [count]);
    set.add(callback);
    /*
        每次修改count，set.size就会+1，这说明useCallback依赖变量count，count变更时会返回新的函数；
        而val变更时，set.size不会变，说明返回的是缓存的旧版本函数。
    */

    return <div>
        <h4>{count}</h4>
        <h4>{set.size}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}


export default function Parent() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');
    const callback = useCallback(() => {
        return count;
    }, [count]);
    return <div>
        <h4>{count}</h4>
        <Child callback={callback}/>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}

function Child({ callback }:any) {
    const [count, setCount] = useState(() => callback());
    useEffect(() => {
        setCount(callback());
    }, [callback]);
    return <div>
        {count}
    </div>
}