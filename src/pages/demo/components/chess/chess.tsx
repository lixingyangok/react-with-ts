import React from 'react';

export default class Chess extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            player: 'x',

        }
    }
    render(){
        return <section>
            <h1>current player：{}</h1>

        </section>
    }
}
