import React from 'react';
import { Box, H3 } from './style/chess';

export default class Chess extends React.Component<any, any>{
    constructor(props:any) {
        super(props);

        this.state = {
            player: 'X',
            step: 0,
            isOver: false,
            winner: '',
            arr: [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ],
        }
    }
    render(){
        let {
            state: {
                arr, step, player, isOver, winner
            },
        } = this;
        return <section>
            <H3>
                Current step: {step+1}
            </H3>
            <H3>
                Current player: {player}
            </H3>
            <H3 stress >
                { isOver ? 'Finished' : 'Playing' }
                { winner }
                {/*The winner is {123}.*/}
                &nbsp;&nbsp;&nbsp;
                <button onClick={()=>this.restart()} >Restart</button>
            </H3>
            <Box>
                {arr.map((cur:string[], idx:number)=>{
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
        let isOver = this.getIsCover();
        if( isOver ) return alert('The game has already over!');
        arr[xx][yy] = state.player;
        this.setState({
            ...state,
            step: state.step + 1,
            player: ['X', 'O'][ (state.step + 1)%2 ],
            arr,
            isOver: this.getIsCover(),
            winner: this.getResult(),
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
    getResult(){
        const { state: { arr } } = this;
        let winner = '';
        for( let [idx, cur] of arr.entries() ){

            winner = cur.reduce((resultStr:string, curStr:string) => {
                if( resultStr && resultStr==curStr ) return resultStr;
            });
            if( winner ) break;
        }
        if( !winner ){

        }
        console.log( winner );
        return winner;
    }
    getIsCover():Boolean{
        const { state: { arr } } = this;
        return arr.reduce((result:any[], cur:string[])=>{
            result.push( cur.every(Boolean) );
            return result;
        }, []).every( Boolean );
    }
}
