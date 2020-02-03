import React from 'react';
import style from './style/clock-style';

const { H1 } = style;

interface IProps {

}
interface IState{
    note:string,
    date:Date,
    seconds:number,
}

export default class Clock extends React.Component<IProps, IState>{
    private timerID:any;
    state:IState;
    constructor(props:IProps) {
        console.log('■■ 挂载开始 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■');
        console.log('01-constructor（挂载调用');
        super(props);
        this.timerID = 0;
        this.state = {
            seconds: 0,
            note: '',
            date: new Date(),
        };
    }
    // ▼生命周期准备删除的方法▼
    // componentWillMount
    // componentWillUpdate
    // componentWillReceiveProps
    static getDerivedStateFromProps(props:IProps, state:IState){
        console.log( '02-A-getDerivedStateFromProps（双重调用'); // console.log(props, state );
        // 一般情况在通过判断 props 的值，来修改state （或者返回null，表示不做修改
        return {
            note: state.date.getMilliseconds() % 2 == 0 ? '偶数' : '奇数',
        }
    }
    shouldComponentUpdate(){
        console.log( 'B-shouldComponentUpdate（更新调用' );
        return true;
    }
    render(){
        console.log('03-C-Render（双重调用');
        const { state } = this;
        return <div>
            <H1>
                Learn lifecycle through this demo
            </H1>
            <div>
                <button onClick={()=>this.getTime()}>Click here, and get time. (And watch the console)</button>
                <H1>
                    {state.date.toLocaleString()}
                    &nbsp;&nbsp;&nbsp;&nbsp;millisecond:
                    {state.date.getMilliseconds()}
                    ({state.note})
                    <br/>
                    {state.seconds}
                </H1>
            </div>
        </div>
    }
    getSnapshotBeforeUpdate(prevProps:IProps, prevState:IState) { // prevProps, prevState
        console.log('D-getSnapshotBeforeUpdate（更新调用');
        console.log('■■ 更新完成 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■');
        const HowManyCecondsPast = (this.state.date.getTime() - prevState.date.getTime()) / 1000;
        return {
            seconds: HowManyCecondsPast,
        }
        return null;
    }
    componentDidUpdate(){
        // console.log('componentDidUpdate')
    }
    componentDidMount() {
        console.log('04-componentDidMount（挂载调用');
        console.log('■■ 挂载完成 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■');
        // ▼组件挂载完成之后，启动定时器
        // this.timerID = setInterval(()=>{
        //     this.setState({
        //         ...this.state,
        //         date: new Date(),
        //     });
        // }, 1*1000);
    }
    componentWillUnmount() {
        console.log('LastOne-componentWillUnmount（卸载调用');
        // ▼组件【卸载】之前关闭定时器
        // clearInterval(this.timerID);
    }
    getTime(){
        this.setState({
            date: new Date(),
        });
    }
}
