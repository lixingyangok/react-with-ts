import React from 'react';
import './style/todolist.scss';

interface IState {
    name: string
}
interface IProps {
    name: string,
}

export default class Todolist extends React.Component<IProps, any>{
    constructor({props}: { props: any }) {
        super(props);
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
                    name="typing"
                    value={this.state.typing}
                    onChange={()=>this.formChanged(1)}
                />
                <button>提交</button>
            </div>
            {/**/}
            <ol className={'list-box'} >
                {list.map((cur:string, idx:number):Object =>{
                    return <li key={idx}>
                        <span>{cur}</span>
                        &nbsp;
                        <button>删除</button>
                    </li>
                })}
            </ol>
        </div>
    }
    formChanged( ev:any ){
        console.log( ev );
    }
    add(){

    }
}
