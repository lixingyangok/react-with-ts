import React from 'react';
import { Box } from './style/chess';

export default class Chess extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            player: 'x',
            arr: [
                ['x', 'x', 'x'],
                ['x', 'x', 'x'],
                ['x', 'x', 'x'],
            ],
        }
    }
    render(){
        let {state: {arr}} = this;
        return <section>
            <h1>current player：{}</h1>
            <Box>
                {arr.map((cur:string, idx:number)=>{
                    return <li key={idx}>
                        {cur}
                    </li>
                })}
            </Box>
        </section>
    }
}
