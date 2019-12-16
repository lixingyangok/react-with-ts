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
            list: [ '学习', '运动' ],
        };
    }
    render(){
        let { state: { list } } = this;
        return <div className="todolist" >
            <div className="input-box" >
                <input className="input" placeholder="请输入"
                    name="typing" value={this.state.typing}
                    onChange={ ev=>this.formChanged( ev ) }
                />
                <button onClick={ ()=>this.add() }>
                    提交{this.props.name || 0}
                </button>
            </div>
            {/**/}
            <ol className={'list-box'} >
                {list.map((cur:string, idx:number):Object =>{
                    return <li key={idx}>
                        <span>{cur}</span>
                        &nbsp;
                        <button onClick={()=>this.del( idx )} >删除</button>
                    </li>
                })}
            </ol>
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
