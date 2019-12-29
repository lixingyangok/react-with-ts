import React from 'react';
import styles from './style/slider.js';

const { Div } = styles;


export default class Slider extends React.Component{
    // constructor(){

    // }
    render(){
        return <div>
            <h1>This is is slider</h1>
            <Div ref="div" >
                {Array(2).fill(1).map((cur_, idx_:number)=>{
                    return <ul key={idx_} >
                        {Array(5).fill(1).map((cur:number, idx:number)=>{
                            return <li key={idx} >
                                {idx+1}
                            </li>
                        })}
                    </ul>
                })}
            </Div>
            <div>
                <button> Go left </button>
                <button> Go right </button>
            </div>
        </div>
    }
    componentDidMount(){
        const oDiv = this.refs.div;
        const oLi = oDiv.querySelector('li');
        console.log( oDiv );
    }
}