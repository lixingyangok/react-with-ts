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
        console.log('01-constructor');
        super(props);
        this.timerID = 0;
        this.state = {
            date: new Date(),
        };
    }
    componentWillUnmount() {
        console.log('04-component-Will-Unmount');
        clearInterval(this.timerID);
    }
    componentDidMount() {
        console.log('03-component-Did-Mount');
        this.timerID = setInterval(()=>{
            this.setState({
                ...this.state,
                date: new Date(),
            });
        }, 1*1000);
    }
    render(){
        console.log('02-Render');
        return <div>
            <H1>
                Learn lifecycle through this demo
            </H1>
            <div>
                Now time:
                <H1>
                    {this.state.date.toLocaleString()}
                </H1>
            </div>
        </div>
    }
}
