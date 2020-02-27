import React from 'react';

 function useGetSize () {
    const [size, setSize] = React.useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    });
    // useMemo返回缓存的变量，useCallback返回缓存的【函数】
    const onResize = React.useCallback(
        () => {
            console.log('查询窗口尺寸');
            setSize({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
            });
        },
        [],
    );
    React.useEffect(()=>{
        window.addEventListener('resize', onResize);
        return ()=>{
            window.removeEventListener('resize', onResize);
        }
    });
    return size;
}

export default function(){
    const {width, height} = useGetSize();
    return <div>
        <h2>Learn useCallback by this demo.</h2>
        <h3>Now the window size:</h3>
        <p style={{fontSize: '22px'}} >
            width: {width}<br/>
            height: {height}<br/>
        </p>
    </div>
}