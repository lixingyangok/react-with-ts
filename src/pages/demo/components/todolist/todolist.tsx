import React from 'react';
import './style/todolist.scss';

interface IState {
    typing: string
    list: string[],
}

interface IProps {
    name: string,
}

export default class Todolist extends React.Component<IProps, IState>{
    constructor( props: IProps ) {
        super( props );
        this.state = {
            typing: '',
            list: [ 'Learing', 'Exercise' ],
        };
    }
    render(){
        let { state: { list } } = this;
        return <div className="todolist" >
            <div className="input-box" >
                <input className="input" placeholder="Please type in"
                    name="typing" value={this.state.typing}
                    onChange={ ev=>this.formChanged( ev ) }
                />
                <button onClick={ ()=>this.add() }>
                    Submit
                </button>
            </div>
            {/**/}
            <ol className={'list-box'} >
                {list.map((cur:string, idx:number):Object =>{
                    return <li key={idx}>
                        <span>{cur}</span>
                        &nbsp;
                        <button onClick={()=>this.del( idx )} >Delete</button>
                    </li>
                })}
            </ol>
            {
                list.length
                ? ''
                : <h1>There is no item</h1>
            }
        </div>
    }
    formChanged( ev:{target: { name: string, value: string }} ){
        let target = ev.target;
        this.setState({
            ...this.state,
            [ target.name ]: target.value,
        });
    }
    add(){
        let { state } = this;
        this.setState({
            ...state,
            typing: '',
            list: state.list.concat(state.typing),
        });
    }
    del( idx:number ){
        let { state } = this;
        this.setState({
            ...state,
            list: state.list.filter((cur:string, curIdx:number)=> curIdx !== idx ),
        })
    }
}
