import React from 'react';
import { Box, H3 } from './style/chess';

// Added a "history" feature.
export default class Chess extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        const initArr = [['', '', ''], ['', '', ''], ['', '', '']];
        this.state = {
            player: 'X',
            step: 0,
            isOver: false,
            winner: '',
            initArr,
            historyArr: [ JSON.parse(JSON.stringify(initArr)) ],
        }
    }
    render(){
        let {
            state: {
                step, player, isOver, winner, historyArr
            },
        } = this;
        return <section>
            <H3>
                Current step: { step }
                &nbsp;&nbsp;&nbsp;
                <button disabled={step === 0} onClick={()=>this.changeStep(-1)}>
                    last step
                </button>
                -
                <button disabled={step === historyArr.length-1} onClick={()=>this.changeStep(1)}>
                    next step
                </button>
            </H3>
            <H3>
                Current player: {player}
            </H3>
            <H3 color={ isOver ? 'red' : 'green' } >
                { isOver ? 'Finished' : 'Playing' }
                { winner ? `. The winner is ${winner}` : '' }
                &nbsp;&nbsp;&nbsp;
                <button onClick={()=>this.restart()} >Restart</button>
            </H3>
            <Box>
                {historyArr[step].map((cur:Array<any>, idx:number)=>{
                    return <li key={idx}>
                        {cur.map((onePiece:string, idx2:number)=>{
                            return <span key={idx2} onClick={()=>this.putDown(idx, idx2)} >
                                {onePiece}
                            </span>
                        })}
                    </li>
                })}
            </Box>
        </section>
    }

    changeStep( type:1|-1 ){
        this.setState({
            ...this.state,
            step: this.state.step + type,
        });
    }

    putDown( xx:number, yy:number ){
        const { state } = this;
        let arr = state.historyArr.slice(-1)[0].$dc();
        const isOver = this.getIsCover() || this.getResult( arr );
        if( isOver ) return alert('The game has already over!');
        arr[xx][yy] = state.player;
        const result = {
            ...state,
            step: state.step + 1,
            player: ['X', 'O'][ (state.step + 1)%2 ],
            arr,
            isOver: this.getIsCover() || this.getResult( arr ),
            winner: this.getResult( arr ),
            historyArr: state.historyArr.concat( [arr.$dc()] ),
        };
        console.log( result );
        this.setState( result );
    }
    restart(){
        let initArr = this.state.initArr.$dc();
        this.setState({
            ...this.state,
            step: 0,
            player: 'X',
            historyArr: [ initArr ],
            isOver: false,
            winner: '',
        });
    }
    getResult( arr:Array<any> ){
        arr = JSON.parse(JSON.stringify(arr));
        let winner = '';
        let winnerArr = arr[0].$dc();
        for( let cur of arr ){
            winner = cur.reduce((resultStr:string, curStr:string) => {
                if( resultStr && resultStr === curStr ) return resultStr;
                return '';
            });
            if( winner ) break;
        }
        if( !winner ){
            if( arr[0][0] && arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2] ){
                winner = arr[0][0];
            }else if( arr[0][2] && arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0] ){
                winner = arr[0][2];
            }
        }
        if( !winner ){
            arr.forEach(( cur )=>{
                cur.forEach((thisOne:string[], idx_:number)=>{
                    winnerArr[idx_] = (()=>{
                        if( thisOne && winnerArr[idx_] === thisOne ) return thisOne;
                        return '';
                    })();
                });
            });
        }
        winner = winner || winnerArr.find(Boolean) || '';
        console.log( '判断胜出方：', winner );
        return winner;
    }
    getIsCover():Boolean {
        const { state } = this;
        let arr = state.historyArr[ state.step ];
        return arr.reduce((result:any[], cur:string[])=>{
            result.push( cur.every(Boolean) );
            return result;
        }, []).every( Boolean );
    }
}
