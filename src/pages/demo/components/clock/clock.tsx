import React from 'react';
import style from './style/clock-style';
const {
    H1,
} = style;

interface IProps {

}

export default class Clock extends React.Component<IProps, any>{
    private timerID:any;
    constructor(props:IProps) {
        console.log('★constructor');
        super(props);
        this.timerID = 0;
        this.state = {
            date: new Date(),
        };
    }
    componentWillUnmount() {
        console.log('★component-Will-Unmount');
        clearInterval(this.timerID);
    }
    componentDidMount() {
        console.log('★component-Did-Mount');
        this.timerID = setInterval(()=>{
            this.setState({
                ...this.state,
                date: new Date(),
            });
        }, 1*1000);
    }
    render(){
        console.log('★Render');
        return <div>
            <H1>
                Learn lifecycle through this demo
            </H1>
            <div>
                Now time: {this.state.date.toLocaleString()}
            </div>
        </div>
    }
}
