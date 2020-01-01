import React from 'react';
import styles from './style/slider.js';

const { Div } = styles;

interface IProps {

}

interface IState {
    iLeft: number,
    iLiWidth: number,
    oUl: object,
    oLi: object,
    iTimer: number,
    iCur: number,
    iPst: number,
}

export default class Slider extends React.Component<IProps, IState>{
    public state: IState;
    constructor( props:IProps ){
        super(props);
        this.state = {
            iLeft: 0,
            oUl: {},
            oLi: {},
            iLiWidth: 123,
            iTimer: 0,
            iCur: 0,
            iPst: 0,
        };
    }
    render(){
        const { state } = this;
        return <div>
            <h1>
                This is is slider
                { state.iLiWidth }
            </h1>
            <Div ref="div" >
                {Array(2).fill(1).map((cur_, idx_:number)=>{
                    return <ul key={idx_} style={{left: `${state.iLeft}px`}} >
                        {Array(4).fill(1).map((cur:number, idx:number)=>{
                            return <li key={idx} >
                                {idx+1}
                            </li>
                        })}
                    </ul>
                })}
            </Div>
            <div>
                <button onClick={()=>this.LetItGo(1)} > Go left </button>
                <button onClick={()=>this.LetItGo(-1)} > Go right </button>
            </div>
        </div>
    }
    LetItGo( direction: 1|-1 ){
        clearInterval( this.state.iTimer );
        const { state, state: { iLiWidth, oUl } } = this;
        const iCur = ( ():number => {
            let val = state.iCur + direction;
            if( val < 0 ) {
                // @ts-ignore
                const liLength = oUl.children.length;
                this.setState({
                    iLeft: iLiWidth * liLength,
                    iCur: liLength,
                });
                val = liLength - 1;
            }
            return val;
        })();
        this.setState({ iCur });
        const iTerminus = -iCur * iLiWidth;
        if ( iTerminus === state.iLeft ) return;
        console.log( `目标${iCur}` );
        console.log( `目标px ${iTerminus}` );
        let timer = setInterval(()=>{
            const iLeft = (()=>{
                let val = this.state.iLeft;
                return iTerminus > val ? val + 10 : val - 10;
            })();
            this.setState({
                iLeft,
            });
            const isBeEnd = (
                (direction === 1 && iLeft <= iTerminus) ||
                (direction === -1 && iLeft >= iTerminus)
            );
            if( isBeEnd ){
                this.setState({ iLeft: iTerminus });
                clearInterval( timer );
            }
        }, 15 );
        // @ts-ignore
        this.setState({ iTimer: timer });
    }
    componentDidMount(){
        const oDiv:any = this.refs.div;
        const oUl = oDiv.querySelector('ul');
        const oLi = oDiv.querySelector('li');
        const iWidth = oLi.offsetWidth;
        this.setState({
            oUl,
            oLi,
            iLiWidth: iWidth,
        });
        console.log( iWidth );
    }
    componentWillUnmount(){
        clearInterval( this.state.iTimer );
    }
}
