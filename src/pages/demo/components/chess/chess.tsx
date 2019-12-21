import React from 'react';
import { Box, H3 } from './style/chess';

export default class Chess extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        const initArr = [['x', 'x', ''], ['', '', ''], ['', '', '']];
        this.state = {
            player: 'X',
            step: 0,
            isOver: false,
            winner: '',
            arr: JSON.parse(JSON.stringify(initArr)),
            historyArr: [ JSON.parse(JSON.stringify(initArr)) ],
        }
    }
    render(){
        let {
            state: {
                arr, step, player, isOver, winner, historyArr
            },
        } = this;
        return <section>
            <H3>
                Current step: {step+1}
                &nbsp;&nbsp;&nbsp;
                <button disabled={step==0} >last step</button>-
                <button>next step</button>
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

    putDown( xx:number, yy:number ){
        const { state } = this;
        let arr = state.arr;
        const isOver = this.getIsCover() || this.getResult( arr );
        if( isOver ) return alert('The game has already over!');
        // ▲ To Judge if the game is over, if so return.
        arr[xx][yy] = state.player;
        this.setState({
            ...state,
            step: state.step + 1,
            player: ['X', 'O'][ (state.step + 1)%2 ],
            arr,
            isOver: this.getIsCover() || this.getResult( arr ),
            winner: this.getResult( arr ),
            historyArr: state.historyArr.concat( [...arr] ),
        });
    }
    restart(){
        this.setState({
            ...this.state,
            step: 0,
            player: 'X',
            arr: this.state.arr.map(()=>['', '', '']),
            isOver: false,
            winner: '',
        });
    }
    getResult( arr:Array<any> ){
        let winner = '';
        for( let cur of arr ){
            winner = cur.reduce((resultStr:string, curStr:string) => {
                if( resultStr && resultStr === curStr ) return resultStr;
            });
            if( winner ) break;
        }
        if( !winner ){

        }
        return winner;
    }
    getIsCover():Boolean {
        const { state: { arr } } = this;
        return arr.reduce((result:any[], cur:string[])=>{
            result.push( cur.every(Boolean) );
            return result;
        }, []).every( Boolean );
    }
}
