import React, {Suspense} from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

import './style/demo.scss';

export const navData = [{
    to: '/demo/toDoList',
    name: 'To do list',
    component: React.lazy(()=>import('pages/demo/components/todolist/todolist')),
},{
    to: '/demo/chessGame',
    name: 'chess game',
    component: React.lazy(()=>import('pages/demo/components/chess/chess')),
},
    // {
    //     to: '/demo/test',
    //     name: 'Test',
    //     component: <div> 示例 </div>,
    // },
];

export default class Demo extends React.Component{
    render(){
        return <div className="center-box" data-page="demo" >
            <ul>
                {navData.map((cur, idx )=>{
                    return <li key={idx}>
                        <NavLink to={cur.to} >{cur.name}</NavLink>
                    </li>
                })}
            </ul>
            {/*    */}
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Redirect exact from="/demo" to="/demo/toDoList" />
                    {navData.map((cur, idx)=>{
                        return (
                            <Route
                                path={cur.to}
                                component={cur.component}
                                key={idx}
                            />
                        );
                    })}
                </Switch>
            </Suspense>
        </div>
    }
}
